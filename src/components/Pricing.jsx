import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Comece agora",
      price: "R$ 0/mês",
      caption: "para criar conta e gerar links",
      features: [
        "Criação de links de pagamento",
        "Painel para acompanhar status",
        "Envio de arquivos e links",
        "Suporte por e-mail",
      ],
      highlighted: false,
      cta: "Criar conta grátis",
    },
    {
      name: "Transação",
      price: "3,49% por pagamento",
      caption: "cobrado somente quando a venda acontece",
      features: [
        "Pagamento retido até confirmação",
        "Disputa e mediação",
        "Notificações por e-mail",
        "Saques para sua conta",
      ],
      highlighted: true,
      cta: "Começar a vender",
    },
  ];

  return (
    <section id="precos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Preços simples e transparentes</h2>
          <p className="mt-3 text-gray-600">Sem mensalidade. Você só paga quando vender.</p>
        </div>
        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative rounded-3xl ${
                p.highlighted ? "ring-2 ring-indigo-600 shadow-xl" : "ring-1 ring-gray-200"
              } bg-white p-8`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 right-6 inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow">
                  Mais popular
                </span>
              )}

              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{p.caption}</p>
                </div>
              </div>
              <p className="mt-6 text-3xl font-bold text-gray-900">{p.price}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <Check className="h-5 w-5 text-emerald-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-medium transition ${
                  p.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/20"
                    : "bg-gray-900 text-white hover:bg-black"
                }`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
