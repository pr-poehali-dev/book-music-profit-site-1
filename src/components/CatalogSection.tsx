import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface CatalogSectionProps {
  books: any[];
  music: any[];
  allProducts: any[];
  favorites: number[];
  toggleFavorite: (productId: number) => void;
  addToCart: (product: any) => void;
}

const CatalogSection = ({ books, music, allProducts, favorites, toggleFavorite, addToCart }: CatalogSectionProps) => {
  const renderProductCard = (product: any) => (
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
        {allProducts.includes(product) && (
          <Badge className="absolute top-3 left-3 bg-white/90 text-foreground">
            {product.category === 'book' ? (
              <><Icon name="BookOpen" size={14} className="inline mr-1" /> Книга</>
            ) : (
              <><Icon name="Music" size={14} className="inline mr-1" /> Музыка</>
            )}
          </Badge>
        )}
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
  );

  return (
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
            {allProducts.map((product) => renderProductCard(product))}
          </div>
        </TabsContent>

        <TabsContent value="books" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((product) => renderProductCard(product))}
          </div>
        </TabsContent>

        <TabsContent value="music" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {music.map((product) => renderProductCard(product))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CatalogSection;
