import { lazy, Suspense } from 'react';
import { Header } from "@/components/xnet/Header";
import { Hero } from "@/components/xnet/Hero";
import { WhatsAppButton } from "@/components/xnet/WhatsAppButton";
import { InstagramButton } from "@/components/xnet/InstagramButton";
import { LoadingSpinner } from "@/components/xnet/LoadingSpinner";
import { ChatwootLabel } from "@/components/xnet/ChatwootLabel";

// Carrega as seções abaixo da dobra (não visíveis inicialmente) de forma preguiçosa
const TrustIndicators = lazy(() => import('@/components/xnet/TrustIndicators').then(module => ({ default: module.TrustIndicators })));
const Plans = lazy(() => import('@/components/xnet/Plans').then(module => ({ default: module.Plans })));
const Advantages = lazy(() => import('@/components/xnet/Advantages').then(module => ({ default: module.Advantages })));
// const SpeedTest = lazy(() => import('@/components/xnet/SpeedTest').then(module => ({ default: module.SpeedTest }))); // Removido
const Testimonials = lazy(() => import('@/components/xnet/Testimonials').then(module => ({ default: module.Testimonials })));
const Faq = lazy(() => import('@/components/xnet/Faq').then(module => ({ default: module.Faq })));
const Contact = lazy(() => import('@/components/xnet/Contact').then(module => ({ default: module.Contact })));

const Index = () => {
  return (
    <div className="font-sans bg-white">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <TrustIndicators />
          <Plans />
          <Advantages />
          {/* <SpeedTest /> -- Removido conforme solicitação */}
          <Testimonials />
          <Faq />
          <Contact />
        </Suspense>
      </main>
      <WhatsAppButton />
      <InstagramButton />
      <ChatwootLabel />
    </div>
  );
};

export default Index;