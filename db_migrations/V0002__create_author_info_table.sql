-- Таблица информации об авторе
CREATE TABLE author_info (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    bio TEXT,
    avatar_url TEXT,
    email VARCHAR(255),
    phone VARCHAR(50),
    social_links JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Вставляем базовую информацию об авторе
INSERT INTO author_info (name, bio, email, phone, social_links) 
VALUES (
    'Автор',
    'Создатель книг и музыки для вдохновения',
    'contact@creativestore.ru',
    '+7 (999) 123-45-67',
    '{"instagram": "", "youtube": "", "telegram": ""}'::jsonb
);