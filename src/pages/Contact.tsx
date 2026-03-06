import WhatsAppButton from "../components/WhatsAppButton";

const contactItems = [
  {
    title: "Ubicación",
    description: "Cochabamba, Bolivia",
  },
  {
    title: "Atención",
    description:
      "Consultas por WhatsApp para reservas, cotizaciones e impresión de fotografías.",
  },
  {
    title: "Servicios",
    description:
      "Fotografía, video e impresión de recuerdos para eventos especiales.",
  },
];

const tips = [
  "Fecha del evento",
  "Tipo de evento",
  "Ubicación",
  "Cantidad aproximada de personas",
  "Servicio que necesitas",
];

export default function Contact() {
  return (
    <main className="bg-foxBlack text-white min-h-screen">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 pt-24 pb-14">
        <p className="text-foxOrange font-semibold tracking-[0.22em] uppercase text-sm">
          Contacto
        </p>

        <h1
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight"
        >
          Hablemos sobre tu próximo evento
        </h1>

        <p className="mt-5 max-w-3xl text-white/70 text-lg">
          Si deseas reservar una fecha, solicitar una cotización o pedir
          información sobre impresión de fotografías, estamos listos para
          ayudarte.
        </p>
      </section>

      {/* CONTACT INFO + CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-foxOrange font-semibold tracking-[0.22em] uppercase text-sm">
              Escríbenos
            </p>

            <h2
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="mt-3 text-3xl font-bold"
            >
              Tu consulta empieza aquí
            </h2>

            <p className="mt-4 text-white/70 leading-8">
              Nuestro canal principal de atención es WhatsApp. Desde ahí podemos
              responder tus consultas, orientarte sobre nuestros servicios y
              ayudarte a coordinar la cobertura de tu evento o tu pedido de
              impresión.
            </p>

            <div className="mt-8">
              <WhatsAppButton />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-foxOrange font-semibold tracking-[0.22em] uppercase text-sm">
              Información
            </p>

            <h2
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="mt-3 text-3xl font-bold"
            >
              Datos de contacto
            </h2>

            <div className="mt-6 space-y-4">
              {contactItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <p className="text-foxOrange text-sm font-semibold uppercase tracking-wider">
                    {item.title}
                  </p>
                  <p className="mt-2 text-white/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIPS PARA COTIZAR */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="text-foxOrange font-semibold tracking-[0.22em] uppercase text-sm">
              Cotización
            </p>

            <h2
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="mt-3 text-3xl md:text-5xl font-bold"
            >
              Qué información puedes enviarnos
            </h2>

            <p className="mt-4 text-white/70">
              Para responderte mejor y más rápido, puedes incluir algunos datos
              básicos sobre tu evento o solicitud.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-black/20 p-5 text-center"
              >
                <p
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="text-lg font-bold text-white"
                >
                  {tip}
                </p>
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
              Estamos listos para escuchar tu idea
            </h2>

            <p className="mt-4 text-white/75">
              Escríbenos por WhatsApp y cuéntanos sobre tu evento. En ARTE FOX
              estaremos encantados de ayudarte a conservar tus recuerdos.
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
