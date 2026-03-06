import WhatsAppButton from "../components/WhatsAppButton";

const services = [
  {
    emoji: "💍",
    title: "Matrimonios",
    description:
      "Cobertura fotográfica y audiovisual para capturar cada emoción, detalle y momento especial de tu boda.",
  },
  {
    emoji: "👶",
    title: "Bautizos",
    description:
      "Conservamos con sensibilidad y dedicación los recuerdos de este momento tan importante para la familia.",
  },
  {
    emoji: "🎉",
    title: "Cumpleaños",
    description:
      "Fotografía y video para fiestas familiares, celebraciones infantiles y momentos llenos de alegría.",
  },
  {
    emoji: "🎓",
    title: "Graduaciones",
    description:
      "Registramos logros importantes con imágenes que transmiten orgullo, emoción y recuerdos duraderos.",
  },
  {
    emoji: "🎥",
    title: "Video para eventos",
    description:
      "Producción de video para capturar la atmósfera, los detalles y la historia completa de cada ocasión especial.",
  },
  {
    emoji: "🖼️",
    title: "Impresión de fotografías",
    description:
      "Imprimimos tus fotografías con cuidado y calidad para que tus recuerdos estén siempre contigo, también fuera de la pantalla.",
  },
];

const process = [
  {
    step: "01",
    title: "Cuéntanos tu evento",
    description:
      "Escríbenos por WhatsApp con la fecha, el tipo de evento y la ubicación.",
  },
  {
    step: "02",
    title: "Recibe una cotización",
    description:
      "Te orientamos sobre el servicio más adecuado según lo que necesites.",
  },
  {
    step: "03",
    title: "Reservamos tu fecha",
    description:
      "Coordinamos todos los detalles para brindarte un servicio claro y organizado.",
  },
  {
    step: "04",
    title: "Capturamos tus recuerdos",
    description:
      "Trabajamos con una mirada profesional para entregarte imágenes y video con calidad.",
  },
];

export default function Services() {
  return (
    <main className="bg-foxBlack text-white min-h-screen">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 pt-24 pb-14">
        <p className="text-foxOrange font-semibold tracking-[0.22em] uppercase text-sm">
          Servicios
        </p>

        <h1
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight"
        >
          Cobertura profesional para tus momentos más importantes
        </h1>

        <p className="mt-5 max-w-3xl text-white/70 text-lg">
          En ARTE FOX ofrecemos fotografía, video e impresión de recuerdos para
          eventos especiales, con una atención cercana, experiencia y un estilo
          visual profesional.
        </p>
      </section>

      {/* GRID DE SERVICIOS */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:border-foxOrange/40 transition"
            >
              <div className="text-3xl">{service.emoji}</div>
              <h2
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="mt-5 text-2xl font-bold"
              >
                {service.title}
              </h2>
              <p className="mt-3 text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
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
              Cómo trabajamos
            </h2>
            <p className="mt-4 text-white/70">
              Queremos que tu experiencia sea simple, clara y profesional desde
              el primer mensaje hasta la entrega final.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
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
              Reserva
            </p>

            <h2
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="mt-3 text-3xl md:text-5xl font-bold"
            >
              Hablemos de tu próximo evento
            </h2>

            <p className="mt-4 text-white/75">
              Si quieres cotizar un servicio de fotografía, video o impresión de
              recuerdos, escríbenos por WhatsApp y cuéntanos los detalles de tu
              evento.
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
