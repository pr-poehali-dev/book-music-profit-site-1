import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface ReviewsSectionProps {
  reviews: Array<{
    id: number;
    name: string;
    rating: number;
    text: string;
    avatar: string;
  }>;
}

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  return (
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
  );
};

export default ReviewsSection;
