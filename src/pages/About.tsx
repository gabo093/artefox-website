import WhatsAppButton from "../components/WhatsAppButton";

const values = [
  {
    title: "Experiencia",
    description:
      "Más de 20 años capturando recuerdos y acompañando momentos importantes con profesionalismo.",
  },
  {
    title: "Cercanía",
    description:
      "Trabajamos con un trato amable y humano para que cada cliente se sienta cómodo y bien atendido.",
  },
  {
    title: "Compromiso",
    description:
      "Nos esforzamos por brindar un servicio responsable, claro y de calidad en cada evento.",
  },
  {
    title: "Recuerdos con valor",
    description:
      "No solo tomamos fotografías: conservamos historias, emociones y momentos únicos.",
  },
];

export default function About() {
  return (
    <main className="bg-foxBlack text-white min-h-screen">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 pt-24 pb-14">
        <p className="text-foxOrange font-semibold tracking-[0.22em] uppercase text-sm">
          Nosotros
        </p>

        <h1
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight"
        >
          Más de 20 años capturando momentos que merecen ser recordados
        </h1>

        <p className="mt-5 max-w-3xl text-white/70 text-lg">
          ARTE FOX es un negocio familiar dedicado a la fotografía, el video y
          la impresión de recuerdos para eventos especiales en Cochabamba,
          Bolivia.
        </p>
      </section>

      {/* HISTORIA */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-foxOrange font-semibold tracking-[0.22em] uppercase text-sm">
              Nuestra historia
            </p>

            <h2
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="mt-3 text-3xl font-bold"
            >
              Un camino construido con dedicación
            </h2>

            <p className="mt-4 text-white/70 leading-8">
              Durante más de dos décadas hemos acompañado a familias, parejas,
              estudiantes y clientes en algunos de los momentos más importantes
              de sus vidas. Nuestra experiencia nos ha permitido entender que
              cada evento tiene una historia única, y que cada recuerdo merece
              ser tratado con cuidado, sensibilidad y profesionalismo.
            </p>

            <p className="mt-4 text-white/70 leading-8">
              Hoy, ARTE FOX continúa creciendo con la misma pasión, adaptándose
              a una nueva etapa digital para seguir ofreciendo un servicio
              cercano, confiable y visualmente profesional.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 flex items-center">
            <div>
              <p className="text-foxOrange font-semibold tracking-[0.22em] uppercase text-sm">
                Qué hacemos
              </p>

              <h2
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="mt-3 text-3xl font-bold"
              >
                Fotografía, video e impresión de recuerdos
              </h2>

              <p className="mt-4 text-white/70 leading-8">
                Nos especializamos en la cobertura de matrimonios, bautizos,
                cumpleaños, graduaciones y otros eventos especiales. Además,
                ofrecemos impresión de fotografías para que esos momentos puedan
                conservarse también en formato físico.
              </p>

              <p className="mt-4 text-white/70 leading-8">
                Nuestro objetivo es combinar una mirada artística con una
                atención cercana, para que cada cliente reciba recuerdos que
                realmente transmitan emoción y calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="text-foxOrange font-semibold tracking-[0.22em] uppercase text-sm">
              Valores
            </p>
            <h2
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="mt-3 text-3xl md:text-5xl font-bold"
            >
              Lo que representa ARTE FOX
            </h2>
            <p className="mt-4 text-white/70">
              Cada servicio que ofrecemos está guiado por una forma de trabajo
              basada en la experiencia, la confianza y el respeto por los
              recuerdos de nuestros clientes.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-black/20 p-6"
              >
                <h3
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="text-xl font-bold"
                >
                  {value.title}
                </h3>
                <p className="mt-3 text-white/70 text-sm">
                  {value.description}
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
              Contacto
            </p>

            <h2
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="mt-3 text-3xl md:text-5xl font-bold"
            >
              Conversemos sobre tu próximo evento
            </h2>

            <p className="mt-4 text-white/75">
              Si deseas conocer más sobre nuestro trabajo o reservar una fecha,
              escríbenos por WhatsApp y estaremos encantados de atenderte.
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
