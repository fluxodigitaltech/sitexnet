import { Shield, Award, Users, ThumbsUp } from 'lucide-react';

const indicators = [
  {
    icon: Users,
    value: "+ 500",
    label: "Clientes Satisfeitos",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: ThumbsUp,
    value: "99.8%",
    label: "de Satisfação",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Shield,
    value: "Suporte",
    label: "Especializado",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
];

export const TrustIndicators = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {indicators.map((indicator, index) => (
            <div key={index} className="text-center group">
              <div className={`${indicator.bgColor} ${indicator.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <indicator.icon className="w-10 h-10" />
              </div>
              <div className="text-3xl font-black text-gray-900 mb-1">{indicator.value}</div>
              <div className="text-sm text-gray-600 font-medium">{indicator.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};