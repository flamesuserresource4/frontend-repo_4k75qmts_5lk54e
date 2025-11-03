import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Comece agora",
      price: "0% + R$ 0,00",
      caption: "para criar conta e gerar links",
      features: [
        "Criação de links de pagamento",
        "Painel para acompanhar status",
        "Envio de arquivos e links",
        "Suporte por e-mail",
      ],
      highlighted: false,
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
    },
  ];

  return (
    <section id="precos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Preços simples e transparentes</h2>
          <p className="mt-3 text-gray-600">Sem mensalidade. Você só paga quando vender.</p>
        </div>
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`${
                p.highlighted
                  ? "ring-2 ring-indigo-600 shadow-lg"
                  : "ring-1 ring-gray-200"
              } rounded-2xl bg-white p-8`}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{p.caption}</p>
                </div>
                {p.highlighted && (
                  <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                    Mais popular
                  </span>
                )}
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
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 font-medium transition ${
                  p.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-900 text-white hover:bg-black"
                }`}
              >
                Criar minha conta
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
