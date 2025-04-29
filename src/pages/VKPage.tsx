
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { MessageCircle, ThumbsUp, Share, Bookmark, Wifi, Zap, ShieldCheck } from "lucide-react";

const VKPage = () => {
  return (
    <div className="min-h-screen electron-gradient py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Шапка */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border-4 border-electron-neon-blue animate-pulse-glow">
              <span className="text-electron-dark-blue text-2xl font-bold">Э</span>
            </div>
            <div className="ml-4">
              <h1 className="text-3xl font-bold text-white">Электрон</h1>
              <p className="text-electron-neon-blue">Официальная страница ВКонтакте</p>
            </div>
          </div>
          <Button className="bg-electron-neon-blue hover:bg-blue-400 text-electron-dark-blue font-semibold">
            Подписаться
          </Button>
        </div>

        {/* Информация о сообществе */}
        <Card className="mb-8 bg-opacity-10 bg-white backdrop-blur-md text-white border-electron-neon-blue">
          <CardHeader>
            <CardTitle className="text-electron-neon-blue">О нас</CardTitle>
            <CardDescription className="text-white opacity-80">Интернет-провайдер нового поколения</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                Компания «Электрон» предоставляет высокоскоростной доступ в интернет, цифровое ТВ и другие 
                телекоммуникационные услуги для частных лиц и бизнеса.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <Wifi className="text-electron-neon-blue mr-2" />
                  <span>Скорость до 1 Гбит/с</span>
                </div>
                <div className="flex items-center">
                  <Zap className="text-electron-neon-blue mr-2" />
                  <span>Стабильное соединение</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck className="text-electron-neon-blue mr-2" />
                  <span>Надежная защита</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-electron-neon-blue border-opacity-30 pt-4">
            <div className="flex items-center text-sm">
              <span>Подписчиков: 5.2K</span>
              <span className="mx-2">•</span>
              <span>Публикаций: 342</span>
              <span className="mx-2">•</span>
              <span>Онлайн: 78</span>
            </div>
          </CardFooter>
        </Card>

        {/* Основной контент */}
        <Tabs defaultValue="posts" className="mb-8">
          <TabsList className="bg-electron-dark-blue w-full justify-start border border-electron-neon-blue">
            <TabsTrigger value="posts" className="data-[state=active]:bg-electron-neon-blue data-[state=active]:text-electron-dark-blue">
              Записи
            </TabsTrigger>
            <TabsTrigger value="photos" className="data-[state=active]:bg-electron-neon-blue data-[state=active]:text-electron-dark-blue">
              Фотографии
            </TabsTrigger>
            <TabsTrigger value="videos" className="data-[state=active]:bg-electron-neon-blue data-[state=active]:text-electron-dark-blue">
              Видео
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts">
            {[1, 2, 3].map((post) => (
              <Card key={post} className="mb-4 bg-opacity-10 bg-white backdrop-blur-md text-white border-electron-neon-blue">
                <CardHeader>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-electron-neon-blue">
                      <span className="text-electron-dark-blue text-sm font-bold">Э</span>
                    </div>
                    <div className="ml-2">
                      <CardTitle className="text-white text-base">Электрон</CardTitle>
                      <CardDescription className="text-xs text-white opacity-70">Вчера в 18:30</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    {post === 1 && "🚀 Специальное предложение для новых абонентов! Подключайте интернет 500 Мбит/с всего за 499 ₽/мес на первые 3 месяца!"}
                    {post === 2 && "📺 Мы добавили 10 новых каналов в пакет 'Премиум'. Смотрите лучшие фильмы и сериалы в идеальном качестве!"}
                    {post === 3 && "🛠️ Плановые технические работы завершены. Скорость соединения увеличена на 20% для всех тарифов!"}
                  </p>
                  {post === 1 && (
                    <div className="relative h-48 rounded-md overflow-hidden mb-2">
                      <img 
                        src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                        alt="Специальное предложение" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </CardContent>
                <CardFooter className="border-t border-electron-neon-blue border-opacity-30 pt-4">
                  <div className="w-full flex justify-between">
                    <Button variant="ghost" size="sm" className="text-white hover:text-electron-neon-blue">
                      <ThumbsUp className="h-4 w-4 mr-2" /> 42
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:text-electron-neon-blue">
                      <MessageCircle className="h-4 w-4 mr-2" /> 7
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:text-electron-neon-blue">
                      <Share className="h-4 w-4 mr-2" /> Поделиться
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:text-electron-neon-blue">
                      <Bookmark className="h-4 w-4 mr-2" /> Сохранить
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="photos">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-square rounded-md overflow-hidden border border-electron-neon-blue">
                  <img 
                    src={`https://source.unsplash.com/random/300x300?tech&sig=${i}`} 
                    alt={`Фото ${i + 1}`} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="relative rounded-md overflow-hidden border border-electron-neon-blue">
                  <div className="aspect-video bg-electron-dark-blue">
                    <img 
                      src={`https://source.unsplash.com/random/600x340?network&sig=${i}`} 
                      alt={`Видео превью ${i + 1}`} 
                      className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-electron-neon-blue bg-opacity-80 flex items-center justify-center">
                        <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-electron-dark-blue ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 bg-electron-dark-blue text-white">
                    <h3 className="font-medium">
                      {i === 0 ? "Как работает оптоволоконный интернет" : "Обзор нового роутера Электрон 2000X"}
                    </h3>
                    <p className="text-sm text-electron-neon-blue">Просмотров: {i === 0 ? "1.2K" : "876"}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Нижний колонтитул */}
        <div className="mt-8 text-center text-white">
          <p className="text-sm opacity-70">© 2025 Интернет-провайдер «Электрон». Все права защищены.</p>
          <div className="mt-2">
            <Link to="/" className="text-electron-neon-blue hover:underline text-sm mx-2">На главную</Link>
            <Link to="/telegram" className="text-electron-neon-blue hover:underline text-sm mx-2">Наш Телеграм</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VKPage;
