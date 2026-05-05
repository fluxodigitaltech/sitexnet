import { Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { TikTokIcon } from '@/components/icons/TikTokIcon';
import { useState } from 'react';

const LOGO_URL = "https://xnetfibraoptica.com.br/assets/images/Logo-White.png"; // URL do logo atualizado
const LOGO_FALLBACK_URL = "/logo-placeholder.svg";

export const Footer = () => {
  const [logoSrc, setLogoSrc] = useState(LOGO_URL);

  const handleImageError = () => {
    if (logoSrc !== LOGO_FALLBACK_URL) {
      setLogoSrc(LOGO_FALLBACK_URL);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Receba Ofertas Exclusivas 🎁
            </h3>
            <p className="text-gray-400 mb-6">
              Cadastre-se e receba novidades e promoções!
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="bg-brand-purple hover:bg-purple-700 text-white font-bold rounded-full px-8 whitespace-nowrap">
                Cadastrar
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="block mb-6">
              <img 
                src={logoSrc} 
                alt="XNET Fibra Óptica Logo" 
                className="h-14 w-auto" 
                onError={handleImageError}
              />
            </a>
            
            <div className="space-y-2 text-sm text-gray-400">
              <p>CNPJ: 54.496.958/0001-44</p>
              <p>Licença Anatel: SCM 12.345/2020</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#inicio" className="hover:text-brand-purple transition-colors">Início</a></li>
              <li><a href="#planos" className="hover:text-brand-purple transition-colors">Planos e Preços</a></li>
              <li><a href="#vantagens" className="hover:text-brand-purple transition-colors">Vantagens</a></li>
              <li><a href="#depoimentos" className="hover:text-brand-purple transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-brand-purple transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#contato" className="hover:text-brand-purple transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Suporte</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-brand-purple transition-colors">Área do Cliente</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">2ª Via de Boleto</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Teste de Velocidade</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Status da Rede</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Tutoriais</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-purple mt-0.5" />
                <div>
                  <p className="text-white font-semibold">(13) 99102-1555</p>
                  <p className="text-xs">WhatsApp e Ligações</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-purple mt-0.5" />
                <div>
                  <p>contato@xnet.com.br</p>
                  <p>suporte@xnet.com.br</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-purple mt-0.5" />
                <div>
                  <p className="text-xs">Matriz:</p>
                  <p>Est. Cel. Joaquim Branco, 1061</p>
                  <p>Savoy, Itanhaém - SP</p>
                  <p>CEP: 11742-674</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-purple mt-0.5" />
                <div>
                  <p>Segunda a Sábado: 9h às 17h20</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Siga-nos:</span>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/profile.php?id=61577213919602" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <Facebook className="w-5 h-5 text-brand-purple" />
                </a>
                <a href="https://www.instagram.com/xnet_fibra_optica" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <Instagram className="w-5 h-5 text-brand-purple" />
                </a>
                <a href="https://www.tiktok.com/@xnet.fibraoptica" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <TikTokIcon className="w-5 h-5 text-brand-purple" />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-brand-purple transition-colors">Termos de Uso</a>
              <span>•</span>
              <a href="#" className="hover:text-brand-purple transition-colors">Política de Privacidade</a>
              <span>•</span>
              <a href="#" className="hover:text-brand-purple transition-colors">Cookies</a>
              <span>•</span>
              <a href="#" className="hover:text-brand-purple transition-colors">LGPD</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} XNET Telecomunicações LTDA. Todos os direitos reservados.</p>
          <p className="mt-2">
            Desenvolvido com 💜 por <a href="#" className="text-brand-purple hover:text-purple-400">XNET Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
};