import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/60 px-3 py-1 text-xs font-medium text-indigo-700">
              <Shield className="h-4 w-4" />
              Plataforma de Pagamento com Garantia
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Venda Segura
            </h1>
            <p className="mt-4 text-lg leading-7 text-gray-600">
              Uma conta garantia para troca de serviços e compra e venda de produtos. Seu cliente paga agora e você recebe quando entregar — segurança para ambos os lados.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-indigo-700 transition"
              >
                Como funciona
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#precos"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-gray-900 font-medium ring-1 ring-gray-200 hover:bg-gray-50 transition"
              >
                Ver preços
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Sem mensalidade para começar
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Receba com segurança
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-gray-100 bg-white/70 backdrop-blur p-6 shadow-xl">
              <div className="rounded-xl bg-gray-900 text-gray-100 p-4">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500" />
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                </div>
                <div className="mt-3 text-sm">
                  <p className="text-gray-300">Link de pagamento</p>
                  <code className="block rounded-md bg-gray-800 p-3 text-indigo-200 overflow-x-auto">
                    vendasegura.app/pagar/8F2-K9Q
                  </code>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-gray-800 p-3">
                    <p className="text-xs text-gray-400">Status</p>
                    <p className="font-semibold text-emerald-400">Pagamento retido</p>
                  </div>
                  <div className="rounded-lg bg-gray-800 p-3">
                    <p className="text-xs text-gray-400">Liberação</p>
                    <p className="font-semibold text-indigo-300">Após entrega</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-lg bg-gray-800 p-3">
                  <div>
                    <p className="text-xs text-gray-400">Comprador</p>
                    <p className="font-medium">Ana Costa</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Valor</p>
                    <p className="font-semibold">R$ 1.250,00</p>
                  </div>
                </div>
                <button className="mt-4 w-full rounded-lg bg-emerald-500 px-4 py-2 font-medium text-white hover:bg-emerald-600 transition">
                  Confirmar Entrega e Receber
                </button>
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-indigo-100 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
