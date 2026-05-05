import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Wifi, Clock, Unlock, Zap, Users } from 'lucide-react';

const advantages = [
  { icon: Rocket, title: "Velocidade Real" },
  { icon: Wifi, title: "Wi-Fi Premium" },
  { icon: Clock, title: "Suporte Especializado" },
  { icon: Unlock, title: "Sem Fidelidade" },
  { icon: Zap, title: "Instalação Rápida e Grátis" },
  { icon: Users, title: "Atendimento Local" },
];

export const Advantages = () => {
  return (
    <section id="vantagens" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">Por que escolher a XNET?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-md border-0 text-center p-4 transition-transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-brand-purple/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <advantage.icon className="w-8 h-8 text-brand-purple" />
                </div>
                <CardTitle className="text-base font-semibold text-gray-700">{advantage.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};