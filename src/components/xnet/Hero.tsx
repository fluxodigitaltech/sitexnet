import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Zap, Shield, Wifi } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"; // Importar Autoplay

const heroImages = [
  "https://raw.githubusercontent.com/fluxodigitaltech/xnet-img/refs/heads/main/WhatsApp%20Image%202025-12-19%20at%2015.06.21%20(1).jpeg",
  "https://raw.githubusercontent.com/fluxodigitaltech/xnet-img/refs/heads/main/WhatsApp%20Image%202025-12-19%20at%2015.06.21.jpeg",
  "https://raw.githubusercontent.com/fluxodigitaltech/xnet-img/refs/heads/main/WhatsApp%20Image%202025-12-19%20at%2015.06.22.jpeg",
];

const WHATSAPP_LINK = "https://wa.me/5513991021555";

export const Hero = () => {
  const [currentSpeed, setCurrentSpeed] = useState(0);
  
  useEffect(() => {
    const targetSpeed = 1000;
    // Garante que a animação comece do 0
    setCurrentSpeed(0); 

    const interval = setInterval(() => {
      setCurrentSpeed(prevSpeed => {
        if (prevSpeed < targetSpeed) {
          // Incrementa de 10 em 10 para a animação não ficar muito longa
          return Math.min(prevSpeed + 10, targetSpeed);
        } else {
          // Para a animação ao atingir o valor final
          clearInterval(interval);
          return targetSpeed;
        }
      });
    }, 30); // Atualiza a cada 30ms (total de 3 segundos para chegar a 1000)

    // Limpa o intervalo se o componente for desmontado
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative pt-24 lg:pt-32 pb-16 overflow-hidden">
      {/* Background com gradiente e padrão */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 leading-tight">
              Internet <span className="text-brand-purple">Ultra Rápida</span> com{' '}
              <span className="relative">
                <span className="relative z-10">Fibra Óptica</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 2 100 2 150 10C200 2 250 2 298 10" stroke="#B204BD" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Transforme sua experiência digital com velocidades de até <strong className="text-brand-purple tabular-nums">{currentSpeed} Mega</strong>. 
              Instalação grátis, sem fidelidade e suporte local especializado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-brand-purple to-purple-600 hover:from-purple-700 hover:to-brand-purple text-white font-bold rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  <Wifi className="mr-2 w-5 h-5" />
                  Quero Contratar Agora
                </Button>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white font-bold rounded-full px-8 py-6 text-lg transition-all"
                >
                  Verificar Cobertura
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Instalação Grátis</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Cancele Quando Quiser</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Carousel 
              className="w-full rounded-2xl overflow-hidden shadow-2xl"
              plugins={[
                Autoplay({
                  delay: 3000, // Transição a cada 3 segundos
                }),
              ]}
            >
              <CarouselContent>
                {heroImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <img 
                      src={image} 
                      alt={`Família feliz usando internet de alta velocidade ${index + 1}`} 
                      className="w-full h-auto object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20" />
            </Carousel>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/20 to-transparent"></div>
            
            {/* Badges flutuantes */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 animate-bounce">
              <div className="flex items-center gap-2">
                <Shield className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-xs text-gray-500">Garantia</p>
                  <p className="font-bold text-gray-900">100% Fibra</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4">
              <div className="flex items-center gap-2">
                <Zap className="w-8 h-8 text-brand-purple" />
                <div>
                  <p className="text-xs text-gray-500">Velocidade</p>
                  <p className="font-bold text-gray-900">Até 1GB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};