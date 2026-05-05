import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Zap, TrendingUp, Check } from 'lucide-react';

const plans = [
  {
    speed: "600",
    price: "99,90",
    badge: "Mais Vendido",
    features: [
      "Instalação 100% Gratuita",
      "Roteador Wi-Fi 6 Dual Band incluso",
      "Sem fidelidade ou multas",
      "Suporte técnico especializado",
      "Ideal para streaming e estudos",
      "4 dispositivos simultâneos"
    ],
    color: "purple",
  },
  {
    speed: "800",
    price: "119,90",
    badge: "Recomendado",
    features: [
      "Atendimento prioritário",
      "Roteador Wi-Fi 6 incluso",
      "Sem fidelidade ou multas",
      "Upload simétrico",
      "Ideal para jogos online",
      "6 dispositivos simultâneos"
    ],
    highlight: true,
    color: "gradient",
  },
  {
    speed: "1000",
    price: "139,90",
    badge: "Premium",
    features: [
      "Suporte exclusivo",
      "Roteador Wi-Fi 6 incluso",
      "Sem fidelidade ou multas",
      "Velocidade garantida",
      "Ideal para jogos online e empresas",
      "10+ dispositivos simultâneos"
    ],
    color: "purple",
  },
];

const WHATSAPP_LINK = "https://wa.me/5513991021555";

export const Plans = () => {
  return (
    <section id="planos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-brand-purple border-purple-200">
            <TrendingUp className="w-4 h-4 mr-1" />
            Planos Sem Pegadinhas
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4">
            Escolha o Plano <span className="text-brand-purple">Perfeito</span> para Você
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todos os planos incluem instalação grátis, equipamentos de última geração e suporte local especializado. 
            <strong className="text-brand-purple"> Sem surpresas na fatura!</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.speed} 
              className={`relative flex flex-col rounded-2xl transition-all duration-300 hover:scale-105 ${
                plan.highlight 
                  ? 'border-2 border-brand-purple shadow-2xl scale-105' 
                  : 'border border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit">
                  <Badge className="bg-gradient-to-r from-brand-purple to-purple-600 text-white border-0 px-6 py-2 text-sm font-bold shadow-lg">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    MELHOR CUSTO-BENEFÍCIO
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <Badge 
                  variant="secondary" 
                  className={`mb-4 mx-auto ${
                    plan.highlight ? 'bg-purple-100 text-brand-purple' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {plan.badge}
                </Badge>
                
                <CardTitle className="text-5xl font-black mb-2">
                  <span className="bg-gradient-to-r from-brand-purple to-purple-600 bg-clip-text text-transparent">
                    {plan.speed}
                  </span>
                  <span className="text-2xl font-bold text-gray-700 ml-2">MEGA</span>
                </CardTitle>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="text-4xl font-black text-gray-900">
                    R$ {plan.price}
                    <span className="text-lg font-medium text-gray-500">/mês</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <Check className="w-5 h-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button 
                    className={`w-full font-bold rounded-full py-6 text-base transition-all ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-brand-purple to-purple-600 hover:from-purple-700 hover:to-brand-purple text-white shadow-lg hover:shadow-xl'
                        : 'bg-brand-purple hover:bg-purple-700 text-white'
                    }`}
                  >
                    <Zap className="mr-2 w-5 h-5" />
                    Contratar Agora
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            🔒 <strong>Pagamento 100% Seguro</strong> • Aceitamos Pix, Cartão e Boleto
          </p>
        </div>
      </div>
    </section>
  );
};