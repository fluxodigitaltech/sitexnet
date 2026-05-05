import { Instagram } from 'lucide-react';

export const InstagramButton = () => {
  return (
    <a
      href="https://www.instagram.com/xnet_fibra_optica"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-48 right-6 bg-brand-purple text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-transform hover:scale-110 z-40"
      aria-label="Siga-nos no Instagram"
    >
      <Instagram size={32} />
    </a>
  );
};