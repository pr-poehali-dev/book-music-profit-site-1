import { useState } from 'react';
import Header from '@/components/Header';
import CatalogSection from '@/components/CatalogSection';
import SubscriptionSection from '@/components/SubscriptionSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState('catalog');

  const books = [
    {
      id: 1,
      title: 'Путь к успеху',
      author: 'Автор',
      price: 599,
      cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop',
      category: 'book',
      description: 'Вдохновляющая книга о достижении целей'
    },
    {
      id: 2,
      title: 'Тайны вселенной',
      author: 'Автор',
      price: 799,
      cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop',
      category: 'book',
      description: 'Научно-популярное издание о космосе'
    },
    {
      id: 3,
      title: 'Искусство жизни',
      author: 'Автор',
      price: 499,
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
      category: 'book',
      description: 'Философские размышления о смысле бытия'
    }
  ];

  const music = [
    {
      id: 4,
      title: 'Летний альбом',
      author: 'Исполнитель',
      price: 299,
      cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
      category: 'music',
      description: '12 треков энергичной музыки'
    },
    {
      id: 5,
      title: 'Ночные мелодии',
      author: 'Исполнитель',
      price: 399,
      cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
      category: 'music',
      description: 'Атмосферные композиции для релакса'
    },
    {
      id: 6,
      title: 'Электронные ритмы',
      author: 'Исполнитель',
      price: 349,
      cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
      category: 'music',
      description: 'Современная электронная музыка'
    }
  ];

  const allProducts = [...books, ...music];

  const subscriptionPlans = [
    {
      id: 'basic',
      name: 'Базовая',
      price: 299,
      period: 'месяц',
      features: [
        'Доступ к 50+ книгам',
        'Скидка 10% на покупки',
        'Новинки каждую неделю',
        'Техническая поддержка'
      ]
    },
    {
      id: 'premium',
      name: 'Премиум',
      price: 599,
      period: 'месяц',
      features: [
        'Безлимитный доступ ко всему контенту',
        'Скидка 25% на покупки',
        'Эксклюзивные релизы',
        'Приоритетная поддержка',
        'Без рекламы'
      ],
      popular: true
    },
    {
      id: 'pro',
      name: 'Профессиональная',
      price: 999,
      period: 'месяц',
      features: [
        'Всё из Премиум',
        'Личные консультации с автором',
        'Доступ к закрытым вебинарам',
        'Ранний доступ к новинкам',
        'Коммерческая лицензия'
      ]
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Алексей П.',
      rating: 5,
      text: 'Отличная платформа! Качественный контент и удобная навигация.',
      avatar: 'AP'
    },
    {
      id: 2,
      name: 'Мария С.',
      rating: 5,
      text: 'Премиум подписка полностью оправдывает свою стоимость. Рекомендую!',
      avatar: 'МС'
    },
    {
      id: 3,
      name: 'Дмитрий К.',
      rating: 4,
      text: 'Хороший выбор книг и музыки. Ждем больше новинок!',
      avatar: 'ДК'
    }
  ];

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const toggleFavorite = (productId: number) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Header
        favorites={favorites}
        cart={cart}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        removeFromCart={removeFromCart}
        getTotalPrice={getTotalPrice}
      />

      <main className="container mx-auto px-4 py-12">
        {activeTab === 'catalog' && (
          <CatalogSection
            books={books}
            music={music}
            allProducts={allProducts}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            addToCart={addToCart}
          />
        )}

        {activeTab === 'subscription' && (
          <SubscriptionSection subscriptionPlans={subscriptionPlans} />
        )}

        {activeTab === 'reviews' && (
          <ReviewsSection reviews={reviews} />
        )}

        {activeTab === 'contact' && (
          <ContactSection />
        )}
      </main>

      <footer className="mt-20 border-t border-purple-100 bg-white/50 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>© 2024 CreativeStore. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
