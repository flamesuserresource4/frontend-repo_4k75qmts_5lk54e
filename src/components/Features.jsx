import { ShieldCheck, Lock, Receipt, Clock3, Link2, FileText, Globe } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Conta Garantia",
      desc: "Pagamento fica retido até a entrega ser confirmada pelo comprador.",
    },
    {
      icon: Lock,
      title: "Disputa Justa",
      desc: "Mediação simples em caso de divergências entre as partes.",
    },
    {
      icon: Receipt,
      title: "Links de Pagamento",
      desc: "Crie links em segundos e compartilhe por WhatsApp, e-mail ou redes sociais.",
    },
    {
      icon: FileText,
      title: "Envio de Arquivos",
      desc: "Faça upload seguro de entregas digitais direto na plataforma.",
    },
    {
      icon: Link2,
      title: "Acesso Controlado",
      desc: "Compartilhe links de visualização/descarga apenas após pagamento.",
    },
    {
      icon: Clock3,
      title: "Prazos Flexíveis",
      desc: "Defina prazos de entrega e liberação conforme o seu fluxo.",
    },
    {
      icon: Globe,
      title: "Multiplos formatos",
      desc: "Funciona para produtos físicos e serviços digitais.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Recursos que inspiram confiança</h2>
          <p className="mt-3 text-gray-600">
            Tudo que você precisa para vender com segurança, sem burocracia.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
