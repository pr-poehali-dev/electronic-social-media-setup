
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Wifi, Shield, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen electron-gradient flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-4xl w-full text-center mb-12">
        <div className="mb-8">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center border-4 border-electron-neon-blue animate-pulse-glow mx-auto">
            <span className="text-electron-dark-blue text-4xl font-bold">Э</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mt-6 text-white">
            Интернет-провайдер <span className="neon-text">Электрон</span>
          </h1>
          <p className="text-xl text-white mt-4">Высокие технологии для вашего комфорта</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="bg-electron-dark-blue bg-opacity-70 border-electron-neon-blue border-opacity-50 hover:border-opacity-100 transition-all">
            <CardContent className="p-6 flex flex-col items-center">
              <Wifi className="h-12 w-12 text-electron-neon-blue mb-4" />
              <h3 className="text-white text-xl font-medium mb-2">Скорость</h3>
              <p className="text-white opacity-80 text-center">До 1 Гбит/с для любых задач</p>
            </CardContent>
          </Card>
          
          <Card className="bg-electron-dark-blue bg-opacity-70 border-electron-neon-blue border-opacity-50 hover:border-opacity-100 transition-all">
            <CardContent className="p-6 flex flex-col items-center">
              <Zap className="h-12 w-12 text-electron-neon-blue mb-4" />
              <h3 className="text-white text-xl font-medium mb-2">Стабильность</h3>
              <p className="text-white opacity-80 text-center">99.9% времени бесперебойной работы</p>
            </CardContent>
          </Card>
          
          <Card className="bg-electron-dark-blue bg-opacity-70 border-electron-neon-blue border-opacity-50 hover:border-opacity-100 transition-all">
            <CardContent className="p-6 flex flex-col items-center">
              <Shield className="h-12 w-12 text-electron-neon-blue mb-4" />
              <h3 className="text-white text-xl font-medium mb-2">Безопасность</h3>
              <p className="text-white opacity-80 text-center">Надежная защита вашей сети</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Наши социальные сети</h2>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to="/vk">
            <Button className="w-full sm:w-auto px-8 bg-electron-neon-blue hover:bg-blue-400 text-electron-dark-blue font-bold">
              Наша страница ВКонтакте
            </Button>
          </Link>
          
          <Link to="/telegram">
            <Button className="w-full sm:w-auto px-8 bg-electron-neon-blue hover:bg-blue-400 text-electron-dark-blue font-bold">
              Наш канал в Телеграм
            </Button>
          </Link>
        </div>
      </div>
      
      <footer className="w-full text-center text-white opacity-70 text-sm">
        <p>© 2025 Интернет-провайдер «Электрон». Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;
