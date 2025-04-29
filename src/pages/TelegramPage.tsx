
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight, Send, Paperclip, Smile, CheckCheck, Clock, Wifi, Zap, ShieldCheck } from "lucide-react";

const TelegramPage = () => {
  const messages = [
    { 
      id: 1, 
      type: 'received', 
      content: 'Добро пожаловать в официальный канал интернет-провайдера «Электрон»! Здесь вы узнаете о новых тарифах, акциях и сервисных работах.', 
      time: '10:15', 
      views: '2.4K'
    },
    { 
      id: 2, 
      type: 'received', 
      content: '🚀 НОВЫЙ ТАРИФ «КВАНТОВЫЙ ПРЫЖОК»\n\n• Скорость до 1 Гбит/с\n• Безлимитный трафик\n• Бесплатное оборудование\n• Техподдержка 24/7\n\nВсего за 799 ₽/мес при подключении до конца месяца!', 
      time: '12:30', 
      views: '1.8K'
    },
    { 
      id: 3, 
      type: 'received', 
      content: '⚡ Уважаемые абоненты!\n\nСообщаем, что завтра с 02:00 до 05:00 будут проводиться плановые технические работы в районах Центральный и Восточный. Возможно кратковременное ограничение скорости.', 
      time: '14:45', 
      views: '956'
    },
  ];

  return (
    <div className="min-h-screen electron-gradient py-4">
      <div className="max-w-xl mx-auto bg-electron-dark-blue rounded-lg overflow-hidden shadow-2xl border border-electron-neon-blue">
        {/* Шапка канала */}
        <div className="p-4 bg-electron-dark-blue border-b border-electron-neon-blue border-opacity-40 flex items-center">
          <Link to="/" className="text-electron-neon-blue mr-4">
            <ArrowRight className="h-5 w-5 transform rotate-180" />
          </Link>
          <div className="mr-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-electron-neon-blue animate-pulse-glow">
              <span className="text-electron-dark-blue text-sm font-bold">Э</span>
            </div>
          </div>
          <div>
            <h1 className="text-white font-medium">Электрон | Интернет-провайдер</h1>
            <p className="text-electron-neon-blue text-xs">Канал • 5.7K подписчиков</p>
          </div>
        </div>
        
        {/* Описание канала */}
        <div className="p-4 bg-electron-navy">
          <p className="text-white text-sm">
            Официальный канал интернет-провайдера «Электрон». 
            Новости компании, акции, технические обновления.
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
            <div className="flex items-center text-electron-neon-blue">
              <Wifi className="h-3 w-3 mr-1" /> 
              <span>До 1 Гбит/с</span>
            </div>
            <div className="flex items-center text-electron-neon-blue">
              <Zap className="h-3 w-3 mr-1" /> 
              <span>Стабильность</span>
            </div>
            <div className="flex items-center text-electron-neon-blue">
              <ShieldCheck className="h-3 w-3 mr-1" /> 
              <span>Безопасность</span>
            </div>
          </div>
          <div className="mt-4">
            <Button className="w-full bg-electron-neon-blue hover:bg-blue-400 text-electron-dark-blue font-medium">
              Подписаться
            </Button>
          </div>
        </div>
        
        {/* Сообщения канала */}
        <div className="p-2 space-y-3 max-h-[calc(100vh-280px)] overflow-y-auto">
          {messages.map((message) => (
            <Card key={message.id} className="relative bg-electron-dark-blue border border-electron-neon-blue border-opacity-30">
              <CardContent className="p-3">
                <div className="mb-2 text-sm text-white whitespace-pre-line">
                  {message.content}
                </div>
                {message.id === 2 && (
                  <div className="mt-3 mb-2 rounded overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt="Квантовый тариф" 
                      className="w-full object-cover h-40"
                    />
                  </div>
                )}
                <div className="flex justify-between items-center mt-2 text-xs text-electron-neon-blue">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{message.time}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1">{message.views}</span>
                    <MessageCircle className="h-3 w-3" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Кнопки взаимодействия */}
        <div className="p-4 bg-electron-dark-blue border-t border-electron-neon-blue border-opacity-40">
          <div className="flex items-center space-x-2">
            <Card className="w-full flex items-center bg-electron-navy border-electron-neon-blue border-opacity-30 p-2">
              <input 
                type="text" 
                placeholder="Написать сообщение..." 
                className="bg-transparent text-white w-full focus:outline-none placeholder:text-white placeholder:opacity-50"
              />
              <div className="flex items-center space-x-2 text-electron-neon-blue">
                <Paperclip className="h-5 w-5 cursor-pointer hover:text-white transition-colors" />
                <Smile className="h-5 w-5 cursor-pointer hover:text-white transition-colors" />
              </div>
            </Card>
            <Button className="h-10 w-10 p-0 bg-electron-neon-blue hover:bg-blue-400 flex items-center justify-center">
              <Send className="h-5 w-5 text-electron-dark-blue" />
            </Button>
          </div>
        </div>
        
        {/* Последняя активность */}
        <div className="p-2 text-xs text-center text-electron-neon-blue bg-electron-navy border-t border-electron-neon-blue border-opacity-30">
          <div className="flex items-center justify-center">
            <span>Последняя активность:</span>
            <span className="mx-1">сегодня в 16:24</span>
            <CheckCheck className="h-3 w-3" />
          </div>
          <div className="mt-1">
            <Link to="/" className="hover:underline mx-2">На главную</Link>
            <Link to="/vk" className="hover:underline mx-2">Наша страница ВК</Link>
          </div>
        </div>
      </div>
      
      {/* Нижний колонтитул */}
      <div className="mt-6 text-center text-xs text-white opacity-70 px-4">
        <p>© 2025 Интернет-провайдер «Электрон». Все права защищены.</p>
        <p className="mt-1">Дизайн интерфейса представлен в ознакомительных целях и не является официальной страницей Telegram.</p>
      </div>
    </div>
  );
};

export default TelegramPage;
