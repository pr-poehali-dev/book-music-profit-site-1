import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface SubscriptionSectionProps {
  subscriptionPlans: Array<{
    id: string;
    name: string;
    price: number;
    period: string;
    features: string[];
    popular?: boolean;
  }>;
}

const SubscriptionSection = ({ subscriptionPlans }: SubscriptionSectionProps) => {
  return (
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
  );
};

export default SubscriptionSection;
