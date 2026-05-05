import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export const ChatwootLabel = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // O rótulo desaparecerá após 5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`fixed bottom-9 right-24 z-40 transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ pointerEvents: 'none' }} // Impede que o rótulo seja clicável
    >
      <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-xl">
        <span className="text-sm font-semibold text-gray-800">Atendimento Online</span>
        <ArrowRight className="w-5 h-5 text-brand-purple" />
      </div>
    </div>
  );
};