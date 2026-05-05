import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: "Como é feita a instalação do serviço?",
    answer: "Nossa equipe técnica especializada realiza a instalação dentro do período comercial (Segunda a Sábado: 9h às 17h20). A instalação é 100% gratuita, rápida (em média 2 horas) e limpa. Fornecemos todos os equipamentos necessários: modem de fibra óptica, roteador Wi-Fi 6 de última geração e até 100 metros de cabo de fibra. Deixamos tudo configurado e funcionando perfeitamente no mesmo dia. Após o cadastro com a documentação do cliente, agendamos a instalação.",
    category: "Instalação"
  },
  {
    question: "Existe taxa de cancelamento ou fidelidade?",
    answer: "Não! Na XNET você tem liberdade total. Não cobramos taxa de cancelamento, não temos contrato de fidelidade e você pode cancelar a qualquer momento sem multas. Acreditamos que você deve ficar conosco pela qualidade do serviço, não por obrigação contratual.",
    category: "Contrato"
  },
  {
    question: "Qual o valor dos planos?",
    answer: "O valor dos planos é fixo: R$ 99,90 para 600 Mega, R$ 119,90 para 800 Mega e R$ 139,90 para 1000 Mega. Este valor só sofre reajuste anual conforme índice da Anatel, como qualquer serviço de telecomunicação.",
    category: "Preços"
  },
  {
    question: "Posso mudar de plano depois?",
    answer: "Sim! Você tem total flexibilidade para aumentar ou diminuir a velocidade do seu plano a qualquer momento. A mudança é feita de forma simples e rápida através da área do cliente, WhatsApp ou telefone. A alteração entra em vigor no próximo ciclo de faturamento.",
    category: "Planos"
  },
  {
    question: "Em quanto tempo a internet é instalada?",
    answer: "Nossos serviços são pós-pagos e a instalação é totalmente gratuita, ou seja, não há taxa inicial a ser paga. Após a confirmação do seu cadastro e envio da documentação, nossa equipe entrará em contato em até 2 horas úteis para agendar a instalação. Geralmente, conseguimos instalar em até 48 horas úteis, dependendo da disponibilidade na sua região.",
    category: "Prazo"
  },
  {
    question: "O que está incluído no plano?",
    answer: "Todos os planos incluem: instalação gratuita, modem de fibra óptica, roteador Wi-Fi 6 dual band, configuração completa, suporte técnico especializado, manutenção preventiva, e acesso à área do cliente com relatórios de consumo e velocidade.",
    category: "Benefícios"
  }
];

export const Faq = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-brand-purple border-purple-200">
            <HelpCircle className="w-4 h-4 mr-1" />
            Tire Suas Dúvidas
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4">
            Perguntas <span className="text-brand-purple">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Transparência total: todas as informações que você precisa saber
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gray-50 rounded-xl px-6 border-0 data-[state=open]:bg-purple-50"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex items-start gap-3 pr-4">
                  <Badge variant="outline" className="mt-1 text-xs">
                    {item.category}
                  </Badge>
                  <span className="text-lg font-semibold text-gray-900">
                    {item.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Ainda tem dúvidas?
          </p>
          <p className="text-gray-600 mb-4">
            Nossa equipe está pronta para ajudar você!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5513991021555" 
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-colors"
            >
              💬 Falar no WhatsApp
            </a>
            <a 
              href="tel:13991021555" 
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-purple hover:bg-purple-700 text-white font-bold rounded-full transition-colors"
            >
              📞 Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};