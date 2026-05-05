import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Mudei da concorrência e a diferença é absurda! Nunca mais tive problemas com quedas ou lentidão. O suporte é excepcional!",
    name: "Maria Silva",
    location: "Bairro Savoy",
    rating: 5,
    avatar: "MS",
    role: "Empresária"
  },
  {
    quote: "Trabalho com videoconferências o dia todo e jogos à noite. A conexão nunca me deixa na mão. Melhor investimento que fiz!",
    name: "João Santos",
    location: "Centro, Itanhaém",
    rating: 5,
    avatar: "JS",
    role: "Desenvolvedor"
  },
  {
    quote: "Instalação rápida, técnicos educados e internet que realmente entrega a velocidade prometida. Recomendo de olhos fechados!",
    name: "Ana Clara",
    location: "Jardim Coronel",
    rating: 5,
    avatar: "AC",
    role: "Professora"
  },
  {
    quote: "Preço justo e qualidade impecável. Minha família toda usa simultaneamente sem travamentos. Perfeito!",
    name: "Roberto Lima",
    location: "Vila São Paulo",
    rating: 5,
    avatar: "RL",
    role: "Arquiteto"
  }
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4">
            O Que Nossos <span className="text-brand-purple">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 500 famílias já transformaram sua experiência digital com a XNET
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-600">(50 avaliações)</span>
          </div>
        </div >

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-0">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="w-8 h-8 text-brand-purple/20 mb-4" />
                    
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-6 flex-grow italic">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gradient-to-br from-brand-purple to-purple-600 text-white font-bold">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white font-bold rounded-full px-8 py-6 text-base transition-all"
          >
            Ver Mais Avaliações no Google
          </Button>
        </div>
      </div>
    </section>
  );
};