import { ArrowRight, Shield, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm"
            >
              <Shield className="h-4 w-4" />
              Plataforma de Pagamento com Garantia
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.6 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Venda Segura
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg leading-7 text-gray-600 max-w-xl"
            >
              Uma conta garantia para troca de serviços e compra e venda de produtos. Seu cliente paga agora e você recebe quando entregar — segurança para ambos os lados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-white font-medium shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition"
              >
                Como funciona
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#precos"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-gray-900 font-medium ring-1 ring-gray-200 hover:bg-gray-50 transition"
              >
                Ver preços
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 flex items-center gap-4 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Sem mensalidade para começar
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Receba com garantia
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl border border-gray-100 bg-white/70 backdrop-blur p-6 shadow-xl"
            >
              <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-indigo-100 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-purple-100 blur-2xl" />

              <div className="rounded-2xl bg-gray-900 text-gray-100 p-5 shadow-inner">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500" />
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-gray-800 p-3">
                    <p className="text-xs text-gray-400">Status</p>
                    <p className="font-semibold text-emerald-400">Pagamento retido</p>
                  </div>
                  <div className="rounded-xl bg-gray-800 p-3">
                    <p className="text-xs text-gray-400">Liberação</p>
                    <p className="font-semibold text-indigo-300">Após entrega</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-xl bg-gray-800 p-3">
                  <div>
                    <p className="text-xs text-gray-400">Comprador</p>
                    <p className="font-medium">Ana Costa</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Valor</p>
                    <p className="font-semibold">R$ 1.250,00</p>
                  </div>
                </div>
                <button className="mt-4 w-full rounded-xl bg-emerald-500 px-4 py-2.5 font-medium text-white hover:bg-emerald-600 transition">
                  Confirmar Entrega e Receber
                </button>
                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-400">
                  <Sparkles className="h-4 w-4 text-indigo-400" />
                  Simulação de interface do vendedor
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
