import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
