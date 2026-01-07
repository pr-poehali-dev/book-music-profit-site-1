import json
import os
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: dict, context) -> dict:
    '''API для создания и получения заказов'''
    
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }
    
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor(cursor_factory=RealDictCursor)
    
    if method == 'POST':
        body = json.loads(event.get('body', '{}'))
        customer_email = body.get('customer_email')
        customer_name = body.get('customer_name')
        customer_phone = body.get('customer_phone', '')
        items = body.get('items', [])
        
        if not customer_email or not customer_name or not items:
            cur.close()
            conn.close()
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Missing required fields'})
            }
        
        cur.execute(
            "SELECT id FROM customers WHERE email = %s",
            (customer_email,)
        )
        customer = cur.fetchone()
        
        if not customer:
            cur.execute(
                "INSERT INTO customers (email, name, phone) VALUES (%s, %s, %s) RETURNING id",
                (customer_email, customer_name, customer_phone)
            )
            customer_id = cur.fetchone()['id']
        else:
            customer_id = customer['id']
        
        total_price = sum(item['price'] for item in items)
        
        cur.execute(
            "INSERT INTO orders (customer_id, total_price, status) VALUES (%s, %s, %s) RETURNING id",
            (customer_id, total_price, 'pending')
        )
        order_id = cur.fetchone()['id']
        
        for item in items:
            cur.execute(
                "INSERT INTO order_items (order_id, product_id, price) VALUES (%s, %s, %s)",
                (order_id, item['product_id'], item['price'])
            )
        
        conn.commit()
        cur.close()
        conn.close()
        
        return {
            'statusCode': 201,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'order_id': order_id, 'status': 'pending'})
        }
    
    if method == 'GET':
        query_params = event.get('queryStringParameters') or {}
        email = query_params.get('email')
        
        if email:
            cur.execute(
                """
                SELECT o.*, c.name as customer_name, c.email as customer_email
                FROM orders o
                JOIN customers c ON o.customer_id = c.id
                WHERE c.email = %s
                ORDER BY o.created_at DESC
                """,
                (email,)
            )
        else:
            cur.execute(
                """
                SELECT o.*, c.name as customer_name, c.email as customer_email
                FROM orders o
                JOIN customers c ON o.customer_id = c.id
                ORDER BY o.created_at DESC
                LIMIT 100
                """
            )
        
        orders = cur.fetchall()
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'orders': orders}, default=str)
        }
    
    cur.close()
    conn.close()
    
    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Method not allowed'})
    }
