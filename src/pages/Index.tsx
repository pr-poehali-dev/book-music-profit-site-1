import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

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
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CreativeStore
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" onClick={() => setActiveTab('catalog')}>
                Каталог
              </Button>
              <Button variant="ghost" onClick={() => setActiveTab('subscription')}>
                Подписка
              </Button>
              <Button variant="ghost" onClick={() => setActiveTab('reviews')}>
                Отзывы
              </Button>
              <Button variant="ghost" onClick={() => setActiveTab('contact')}>
                Контакты
              </Button>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="relative">
                <Icon name="Heart" size={20} />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-white text-xs rounded-full flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </Button>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <Icon name="ShoppingCart" size={20} />
                    {cart.length > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                        {cart.length}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md">
                  <SheetHeader>
                    <SheetTitle>Корзина</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-4">
                    {cart.length === 0 ? (
                      <p className="text-muted-foreground text-center py-8">Корзина пуста</p>
                    ) : (
                      <>
                        {cart.map((item) => (
                          <div key={item.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                            <img src={item.cover} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm">{item.title}</h4>
                              <p className="text-sm text-muted-foreground">{item.price} ₽</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Icon name="Trash2" size={18} />
                            </Button>
                          </div>
                        ))}
                        <div className="pt-4 border-t">
                          <div className="flex justify-between items-center mb-4">
                            <span className="font-semibold">Итого:</span>
                            <span className="text-2xl font-bold text-primary">{getTotalPrice()} ₽</span>
                          </div>
                          <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                            Оформить заказ
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              <Button variant="outline" size="icon">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {activeTab === 'catalog' && (
          <div className="space-y-16 animate-fade-in">
            <section className="text-center space-y-6 py-12">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2">
                <Icon name="Star" size={16} className="inline mr-2" />
                Платформа для творческих людей
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Книги и музыка
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  от автора
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Откройте мир качественного контента. Книги для души и музыка для вдохновения.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать прослушивание
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Читать бесплатно
                </Button>
              </div>
            </section>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full md:w-auto">
                <TabsTrigger value="all" className="flex-1 md:flex-none">
                  <Icon name="Grid3x3" size={16} className="mr-2" />
                  Все
                </TabsTrigger>
                <TabsTrigger value="books" className="flex-1 md:flex-none">
                  <Icon name="BookOpen" size={16} className="mr-2" />
                  Книги
                </TabsTrigger>
                <TabsTrigger value="music" className="flex-1 md:flex-none">
                  <Icon name="Music" size={16} className="mr-2" />
                  Музыка
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allProducts.map((product) => (
                    <Card key={product.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 animate-scale-in">
                      <div className="relative overflow-hidden">
                        <img
                          src={product.cover}
                          alt={product.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 flex gap-2">
                          <Button
                            size="icon"
                            variant="secondary"
                            className="rounded-full shadow-lg"
                            onClick={() => toggleFavorite(product.id)}
                          >
                            <Icon
                              name="Heart"
                              size={18}
                              className={favorites.includes(product.id) ? 'fill-current text-red-500' : ''}
                            />
                          </Button>
                        </div>
                        <Badge className="absolute top-3 left-3 bg-white/90 text-foreground">
                          {product.category === 'book' ? (
                            <><Icon name="BookOpen" size={14} className="inline mr-1" /> Книга</>
                          ) : (
                            <><Icon name="Music" size={14} className="inline mr-1" /> Музыка</>
                          )}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="line-clamp-1">{product.title}</CardTitle>
                        <CardDescription>{product.author}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                        <Button
                          onClick={() => addToCart(product)}
                          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                        >
                          <Icon name="ShoppingCart" size={18} className="mr-2" />
                          В корзину
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="books" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {books.map((product) => (
                    <Card key={product.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
                      <div className="relative overflow-hidden">
                        <img
                          src={product.cover}
                          alt={product.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <Button
                          size="icon"
                          variant="secondary"
                          className="absolute top-3 right-3 rounded-full shadow-lg"
                          onClick={() => toggleFavorite(product.id)}
                        >
                          <Icon
                            name="Heart"
                            size={18}
                            className={favorites.includes(product.id) ? 'fill-current text-red-500' : ''}
                          />
                        </Button>
                      </div>
                      <CardHeader>
                        <CardTitle className="line-clamp-1">{product.title}</CardTitle>
                        <CardDescription>{product.author}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                        <Button
                          onClick={() => addToCart(product)}
                          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                        >
                          <Icon name="ShoppingCart" size={18} className="mr-2" />
                          В корзину
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="music" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {music.map((product) => (
                    <Card key={product.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
                      <div className="relative overflow-hidden">
                        <img
                          src={product.cover}
                          alt={product.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <Button
                          size="icon"
                          variant="secondary"
                          className="absolute top-3 right-3 rounded-full shadow-lg"
                          onClick={() => toggleFavorite(product.id)}
                        >
                          <Icon
                            name="Heart"
                            size={18}
                            className={favorites.includes(product.id) ? 'fill-current text-red-500' : ''}
                          />
                        </Button>
                      </div>
                      <CardHeader>
                        <CardTitle className="line-clamp-1">{product.title}</CardTitle>
                        <CardDescription>{product.author}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                        <Button
                          onClick={() => addToCart(product)}
                          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                        >
                          <Icon name="ShoppingCart" size={18} className="mr-2" />
                          В корзину
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeTab === 'subscription' && (
          <div className="space-y-12 animate-fade-in">
            <section className="text-center space-y-4">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2">
                <Icon name="Zap" size={16} className="inline mr-2" />
                Регулярный доход для автора
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Выберите свою{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  подписку
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Поддержите автора и получите доступ к эксклюзивному контенту
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {subscriptionPlans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                    plan.popular ? 'border-4 border-primary scale-105' : 'border-2'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                      Популярная
                    </div>
                  )}
                  <CardHeader className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto">
                      <Icon name="Crown" size={32} className="text-white" />
                    </div>
                    <div className="text-center">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-5xl font-bold text-primary">{plan.price}</span>
                        <span className="text-muted-foreground ml-2">₽/{plan.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                          : ''
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      <Icon name="Sparkles" size={18} className="mr-2" />
                      Оформить подписку
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-12 animate-fade-in">
            <section className="text-center space-y-4">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2">
                <Icon name="MessageSquare" size={16} className="inline mr-2" />
                Отзывы пользователей
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Что говорят{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  наши клиенты
                </span>
              </h2>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {reviews.map((review) => (
                <Card key={review.id} className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                          {review.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <div className="flex gap-1 mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="fill-current text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="space-y-12 animate-fade-in max-w-4xl mx-auto">
            <section className="text-center space-y-4">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2">
                <Icon name="Mail" size={16} className="inline mr-2" />
                Свяжитесь с нами
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Остались{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  вопросы?
                </span>
              </h2>
            </section>

            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">contact@creativestore.ru</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Социальные сети</h3>
                      <div className="flex gap-3 mt-2">
                        <Button size="icon" variant="outline">
                          <Icon name="Instagram" size={20} />
                        </Button>
                        <Button size="icon" variant="outline">
                          <Icon name="Youtube" size={20} />
                        </Button>
                        <Button size="icon" variant="outline">
                          <Icon name="Send" size={20} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                      placeholder="ivan@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background min-h-[120px]"
                      placeholder="Ваше сообщение..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </div>
              </div>
            </Card>
          </div>
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
