import WhatsAppButton from "../components/WhatsAppButton";

const steps = [
  {
    step: "01",
    title: "Envíanos tus fotos",
    description:
      "Puedes enviarnos tus imágenes por WhatsApp o coordinar con nosotros la mejor forma de compartirlas.",
  },
  {
    step: "02",
    title: "Indica los detalles",
    description:
      "Cuéntanos cuántas fotos deseas imprimir, si necesitas diferentes tamaños o alguna indicación especial.",
  },
  {
    step: "03",
    title: "Recibe tu cotización",
    description:
      "Te responderemos con la información necesaria para confirmar tu pedido de forma rápida y clara.",
  },
  {
    step: "04",
    title: "Imprimimos tus recuerdos",
    description:
      "Trabajamos con cuidado para que tus fotografías impresas conserven su valor y significado.",
  },
];

const benefits = [
  "Impresión de fotografías para conservar recuerdos importantes",
  "Atención personalizada para coordinar tu pedido",
  "Ideal para eventos, regalos y recuerdos familiares",
  "Proceso simple y directo por WhatsApp",
];

export default function PrintPhotos() {
  return (
    <main className="bg-foxBlack text-white min-h-screen">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 pt-24 pb-14">
        <p className="text-foxOrange font-semibold tracking-[0.22em] uppercase text-sm">
          Impresión de fotografías
        </p>

        <h1
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight"
        >
          Tus recuerdos también merecen estar fuera de la pantalla
        </h1>

        <p className="mt-5 max-w-3xl text-white/70 text-lg">
          En ARTE FOX también ofrecemos impresión de fotografías para que tus
          momentos especiales puedan conservarse de forma física, cercana y
          duradera.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-foxOrange font-semibold tracking-[0.22em] uppercase text-sm">
              Beneficios
            </p>

            <h2
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="mt-3 text-3xl font-bold"
            >
              Un servicio práctico y cercano
            </h2>

            <div className="mt-6 space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white/80"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 flex items-center">
            <div>
              <p className="text-foxOrange font-semibold tracking-[0.22em] uppercase text-sm">
                Ideal para
              </p>

              <h2
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="mt-3 text-3xl font-bold"
              >
                Revivir tus momentos importantes
              </h2>

              <p className="mt-4 text-white/70 text-lg">
                Las fotografías impresas tienen un valor especial. Son perfectas
                para recuerdos familiares, álbumes, regalos o para conservar los
                momentos más importantes de tu vida de una forma tangible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="text-foxOrange font-semibold tracking-[0.22em] uppercase text-sm">
              Proceso
            </p>
            <h2
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="mt-3 text-3xl md:text-5xl font-bold"
            >
              Cómo solicitar tus impresiones
            </h2>
            <p className="mt-4 text-white/70">
              Hemos simplificado el proceso para que puedas hacer tu pedido de
              manera rápida y sin complicaciones.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-black/20 p-6"
              >
                <p className="text-foxOrange text-sm font-semibold tracking-[0.2em] uppercase">
                  {item.step}
                </p>
                <h3
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="mt-3 text-xl font-bold"
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-white/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-foxOrange/20 blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <p className="text-foxOrange font-semibold tracking-[0.22em] uppercase text-sm">
              Pedido
            </p>

            <h2
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="mt-3 text-3xl md:text-5xl font-bold"
            >
              Solicita la impresión de tus fotografías
            </h2>

            <p className="mt-4 text-white/75">
              Escríbenos por WhatsApp para coordinar tu pedido, consultar
              detalles y recibir atención personalizada.
            </p>

            <div className="mt-8">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
