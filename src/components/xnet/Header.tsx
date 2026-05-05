import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#planos', label: 'Planos' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
];

const WHATSAPP_LINK = "https://wa.me/5513991021555";
const LOGO_URL = "https://xnetfibraoptica.com.br/assets/images/Logo.png"; // URL do logo atualizado
const LOGO_FALLBACK_URL = "/logo-placeholder.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoSrc, setLogoSrc] = useState(LOGO_URL);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    // Bloqueia o scroll do body quando o menu está aberto
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset'; // Garante que o scroll seja liberado
    };
  }, [isMenuOpen]);

  const handleImageError = () => {
    if (logoSrc !== LOGO_FALLBACK_URL) {
      setLogoSrc(LOGO_FALLBACK_URL);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-md py-4'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#inicio" className="flex items-center gap-2 group">
            <img 
              src={logoSrc} 
              alt="XNET Logo" 
              className="h-12 transition-transform group-hover:scale-105" 
              onError={handleImageError}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="relative text-sm font-medium text-gray-700 hover:text-brand-purple transition-colors after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-purple after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#" 
              className="text-sm font-medium text-gray-700 hover:text-brand-purple transition-colors"
            >
              Área do Cliente
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:13991021555" className="text-sm font-semibold text-gray-700 hover:text-brand-purple transition-colors">
              📞 (13) 99102-1555
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-brand-purple to-purple-600 hover:from-purple-700 hover:to-brand-purple text-white font-bold rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all group">
                Assinar Agora
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden p-2 rounded-lg bg-white hover:bg-gray-100 transition-colors shadow-md"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6 text-brand-purple" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/60 z-[998] backdrop-blur-sm"
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div className={`lg:hidden fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white z-[999] shadow-2xl transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)}>
              <img 
                src={logoSrc} 
                alt="XNET Logo" 
                className="h-10" 
                onError={handleImageError}
              />
            </a>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Fechar menu"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex-grow p-4 overflow-y-auto">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)} 
                    className="block text-lg font-medium text-gray-800 hover:text-brand-purple hover:bg-purple-50 rounded-md py-3 px-4 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="block text-lg font-medium text-gray-800 hover:text-brand-purple hover:bg-purple-50 rounded-md py-3 px-4 transition-colors"
                >
                  Área do Cliente
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Menu Footer */}
          <div className="p-4 border-t space-y-4 bg-gray-50">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full bg-gradient-to-r from-brand-purple to-purple-600 hover:from-purple-700 hover:to-brand-purple text-white font-bold rounded-full py-5 text-base shadow-lg">
                Contratar Agora
              </Button>
            </a>
            <a href="tel:13991021555" className="flex items-center justify-center gap-2 text-base font-semibold text-gray-700 hover:text-brand-purple">
              📞 (13) 99102-1555
            </a>
          </div>
        </div>
      </div>
    </>
  );
};