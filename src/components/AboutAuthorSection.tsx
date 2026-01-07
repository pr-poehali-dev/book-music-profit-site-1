import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const AboutAuthorSection = () => {
  const [author, setAuthor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://functions.poehali.dev/238be4e9-f636-4e79-ad1d-0d3d32bfa9a5')
      .then(res => res.json())
      .then(data => {
        setAuthor(data.author);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="space-y-12 animate-fade-in">
        <section className="text-center">
          <p className="text-muted-foreground">Загрузка...</p>
        </section>
      </div>
    );
  }

  if (!author) {
    return (
      <div className="space-y-12 animate-fade-in">
        <section className="text-center">
          <p className="text-muted-foreground">Информация об авторе недоступна</p>
        </section>
      </div>
    );
  }

  const socialLinks = author.social_links || {};

  return (
    <div className="space-y-12 animate-fade-in max-w-5xl mx-auto">
      <section className="text-center space-y-4">
        <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2">
          <Icon name="User" size={16} className="inline mr-2" />
          Об авторе
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold">
          Познакомьтесь с{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            автором
          </span>
        </h2>
      </section>

      <Card className="p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex-shrink-0">
            <Avatar className="w-32 h-32 md:w-40 md:h-40">
              <AvatarImage src={author.avatar_url} />
              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-4xl">
                {author.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-1 space-y-6 text-center md:text-left">
            <div>
              <h3 className="text-3xl font-bold mb-2">{author.name}</h3>
              <p className="text-lg text-muted-foreground">{author.bio}</p>
            </div>

            <div className="space-y-3">
              {author.email && (
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <a href={`mailto:${author.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {author.email}
                  </a>
                </div>
              )}

              {author.phone && (
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-secondary" />
                  </div>
                  <a href={`tel:${author.phone}`} className="text-muted-foreground hover:text-secondary transition-colors">
                    {author.phone}
                  </a>
                </div>
              )}
            </div>

            <div className="pt-4">
              <p className="text-sm font-semibold mb-3">Следите за мной:</p>
              <div className="flex gap-3 justify-center md:justify-start">
                {socialLinks.instagram && (
                  <Button size="icon" variant="outline" asChild>
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                      <Icon name="Instagram" size={20} />
                    </a>
                  </Button>
                )}
                {socialLinks.youtube && (
                  <Button size="icon" variant="outline" asChild>
                    <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                      <Icon name="Youtube" size={20} />
                    </a>
                  </Button>
                )}
                {socialLinks.telegram && (
                  <Button size="icon" variant="outline" asChild>
                    <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer">
                      <Icon name="Send" size={20} />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Icon name="BookOpen" size={32} className="text-primary" />
          </div>
          <h4 className="text-xl font-bold mb-2">Книги</h4>
          <p className="text-muted-foreground">Вдохновляющие истории и знания для вашего развития</p>
        </Card>

        <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Icon name="Music" size={32} className="text-secondary" />
          </div>
          <h4 className="text-xl font-bold mb-2">Музыка</h4>
          <p className="text-muted-foreground">Атмосферные композиции для работы и отдыха</p>
        </Card>

        <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Icon name="Heart" size={32} className="text-accent" />
          </div>
          <h4 className="text-xl font-bold mb-2">С любовью</h4>
          <p className="text-muted-foreground">Каждая работа создана с заботой о качестве</p>
        </Card>
      </div>
    </div>
  );
};

export default AboutAuthorSection;
