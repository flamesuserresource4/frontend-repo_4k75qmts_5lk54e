import { CreditCard, Upload, Package, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: CreditCard,
      title: "Cliente paga com segurança",
      desc: "Você cria um link de pagamento e envia ao cliente. O valor fica retido com segurança.",
    },
    {
      icon: Upload,
      title: "Você envia o produto/serviço",
      desc: "Faça upload de arquivos, envie o link de acesso ou informe o código de rastreio.",
    },
    {
      icon: Package,
      title: "Cliente confirma o recebimento",
      desc: "O comprador acompanha o status e confirma a entrega quando tudo estiver certo.",
    },
    {
      icon: CheckCircle2,
      title: "Pagamento liberado",
      desc: "Após a confirmação, o valor é liberado para sua conta.",
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Como funciona</h2>
          <p className="mt-3 text-gray-600">
            A experiência é simples para quem compra e para quem vende — transparência de ponta a ponta.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 p-6 bg-white shadow-sm"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-indigo-50 to-purple-50" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-105 transition">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
