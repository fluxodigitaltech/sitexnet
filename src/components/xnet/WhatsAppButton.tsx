import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5513991021555"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-28 right-6 bg-brand-purple text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-transform hover:scale-110 z-40"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};