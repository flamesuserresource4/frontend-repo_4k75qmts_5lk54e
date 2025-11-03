import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import { Shield, Menu } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-xl">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Shield className="h-5 w-5" />
            </span>
            Venda Segura
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#como-funciona" className="hover:text-gray-900">Como funciona</a>
            <a href="#precos" className="hover:text-gray-900">Preços</a>
            <a href="#" className="rounded-lg bg-gray-900 text-white px-4 py-2 hover:bg-black">Entrar</a>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-gray-100 px-6 pb-4">
            <div className="flex flex-col gap-3 py-3 text-sm">
              <a href="#como-funciona" className="py-2">Como funciona</a>
              <a href="#precos" className="py-2">Preços</a>
              <a href="#" className="py-2">Entrar</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Pricing />
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold">Pronto para vender com segurança?</h3>
            <p className="mt-3 text-gray-600">
              Crie seu primeiro link de pagamento agora e ofereça uma experiência com garantia para seus clientes.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#precos" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700">Começar grátis</a>
              <a href="#como-funciona" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-gray-900 font-medium ring-1 ring-gray-200 hover:bg-gray-50">Saiba mais</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Venda Segura. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">Termos</a>
            <a href="#" className="hover:text-gray-900">Privacidade</a>
            <a href="#" className="hover:text-gray-900">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
