import { useTranslation } from "react-i18next";
import WhatsAppButton from "../components/WhatsAppButton";
import heroImage from "../assets/images/hero-wedding.jpg";
import weddingImage from "../assets/images/wedding-1.jpg";
import birthdayImage from "../assets/images/birthday-1.jpg";
import graduationImage from "../assets/images/graduation-1.jpg";
import baptismImage from "../assets/images/baptism-1.jpg";
export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="bg-foxBlack text-white">
      {/* HERO IMPACTANTE */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* imagen de fondo */}
        <img
          src={heroImage}
          alt="Matrimonio capturado por Arte Fox"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        {/* contenido */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 py-20">
          <div className="max-w-3xl">
            <p className="text-foxOrange font-semibold tracking-[0.22em] uppercase text-sm">
              ARTE FOX · Foto & Video
            </p>

            <h1
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="mt-4 text-5xl md:text-7xl font-extrabold leading-[0.95] tracking-tight"
            >
              {t("home.headline")}
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-2xl text-white/85">
              {t("home.subheadline")}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppButton />

              <a
                href="/gallery"
                className="px-6 py-3 rounded-2xl border border-white/25 bg-white/5 backdrop-blur-sm hover:border-white/40 transition"
              >
                {t("home.ctaGallery")}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm md:text-base text-white/80">
              <span className="rounded-full border border-white/15 bg-black/20 px-4 py-2 backdrop-blur-sm">
                +20 años de experiencia
              </span>
              <span className="rounded-full border border-white/15 bg-black/20 px-4 py-2 backdrop-blur-sm">
                Matrimonios · Bautizos · Cumpleaños
              </span>
              <span className="rounded-full border border-white/15 bg-black/20 px-4 py-2 backdrop-blur-sm">
                Fotografía · Video · Impresiones
              </span>
            </div>
          </div>
        </div>

        {/* etiqueta inferior */}
        <div className="absolute bottom-6 right-6 z-10 hidden md:block">
          <div className="rounded-2xl border border-white/15 bg-black/35 backdrop-blur-md px-5 py-3 text-sm text-white/80">
            Matrimonio · Cochabamba
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CONFIANZA */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="text-3xl md:text-4xl font-bold"
        >
          Confianza y experiencia
        </h2>

        <div className="mt-8 grid md:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-foxOrange text-sm font-semibold uppercase tracking-wider">
              Experiencia
            </p>
            <p className="mt-3 text-xl font-semibold">+20 años</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-foxOrange text-sm font-semibold uppercase tracking-wider">
              Calidad
            </p>
            <p className="mt-3 text-xl font-semibold">Profesional</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-foxOrange text-sm font-semibold uppercase tracking-wider">
              Cobertura
            </p>
            <p className="mt-3 text-xl font-semibold">Eventos especiales</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-foxOrange text-sm font-semibold uppercase tracking-wider">
              Servicio
            </p>
            <p className="mt-3 text-xl font-semibold">Entrega responsable</p>
          </div>
        </div>
      </section>
      {/* PORTAFOLIO */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-foxOrange font-semibold tracking-[0.22em] uppercase text-sm">
              Portafolio
            </p>
            <h2
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="mt-3 text-3xl md:text-5xl font-bold"
            >
              Historias que capturamos
            </h2>
            <p className="mt-4 text-white/70 max-w-2xl">
              Cada evento tiene su propia emoción, su propia energía y su propia
              historia. En ARTE FOX capturamos esos momentos con un enfoque
              artístico y profesional.
            </p>
          </div>

          <a
            href="/gallery"
            className="px-5 py-3 rounded-2xl border border-white/20 bg-white/5 hover:border-white/40 transition"
          >
            Ver galería completa
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Matrimonios */}
          <div className="group relative rounded-3xl overflow-hidden border border-white/10 min-h-[420px]">
            <img
              src={weddingImage}
              alt="Fotografía de matrimonio"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 p-6 md:p-8">
              <p className="text-foxOrange text-sm uppercase tracking-[0.2em] font-semibold">
                Matrimonios
              </p>
              <h3
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="mt-2 text-2xl md:text-3xl font-bold"
              >
                Momentos que duran toda la vida
              </h3>
              <p className="mt-3 text-white/75 max-w-md">
                Fotografías y video para uno de los días más importantes de tu
                historia.
              </p>
            </div>
          </div>

          {/* Cumpleaños */}
          <div className="group relative rounded-3xl overflow-hidden border border-white/10 min-h-[420px]">
            <img
              src={birthdayImage}
              alt="Fotografía de cumpleaños"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 p-6 md:p-8">
              <p className="text-foxOrange text-sm uppercase tracking-[0.2em] font-semibold">
                Cumpleaños
              </p>
              <h3
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="mt-2 text-2xl md:text-3xl font-bold"
              >
                Alegría, familia y celebración
              </h3>
              <p className="mt-3 text-white/75 max-w-md">
                Capturamos la energía y la emoción de cada fiesta con estilo y
                naturalidad.
              </p>
            </div>
          </div>

          {/* Graduaciones */}
          <div className="group relative rounded-3xl overflow-hidden border border-white/10 min-h-[420px]">
            <img
              src={graduationImage}
              alt="Fotografía de graduación"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 p-6 md:p-8">
              <p className="text-foxOrange text-sm uppercase tracking-[0.2em] font-semibold">
                Graduaciones
              </p>
              <h3
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="mt-2 text-2xl md:text-3xl font-bold"
              >
                Logros que merecen recordarse
              </h3>
              <p className="mt-3 text-white/75 max-w-md">
                Conservamos esos instantes que marcan el cierre de una etapa
                importante.
              </p>
            </div>
          </div>

          {/* Bautizos */}
          <div className="group relative rounded-3xl overflow-hidden border border-white/10 min-h-[420px]">
            <img
              src={baptismImage}
              alt="Fotografía de bautizo"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 p-6 md:p-8">
              <p className="text-foxOrange text-sm uppercase tracking-[0.2em] font-semibold">
                Bautizos
              </p>
              <h3
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="mt-2 text-2xl md:text-3xl font-bold"
              >
                Recuerdos llenos de ternura
              </h3>
              <p className="mt-3 text-white/75 max-w-md">
                Documentamos con delicadeza y atención cada detalle de este
                momento especial.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICIOS */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-foxOrange font-semibold tracking-[0.22em] uppercase text-sm">
            Servicios
          </p>
          <h2
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="mt-3 text-3xl md:text-5xl font-bold"
          >
            Cobertura profesional para tus momentos más importantes
          </h2>
          <p className="mt-4 text-white/70">
            En ARTE FOX ofrecemos fotografía, video e impresión de recuerdos
            para eventos especiales, con una atención cercana y un estilo visual
            profesional.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:border-foxOrange/40 transition">
            <div className="text-3xl">💍</div>
            <h3 className="mt-5 text-2xl font-bold">Matrimonios</h3>
            <p className="mt-3 text-white/70">
              Cobertura fotográfica y audiovisual para capturar cada emoción,
              detalle y momento especial de tu boda.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:border-foxOrange/40 transition">
            <div className="text-3xl">👶</div>
            <h3 className="mt-5 text-2xl font-bold">Bautizos</h3>
            <p className="mt-3 text-white/70">
              Conservamos con sensibilidad y dedicación los recuerdos de este
              momento tan importante para la familia.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:border-foxOrange/40 transition">
            <div className="text-3xl">🎉</div>
            <h3 className="mt-5 text-2xl font-bold">Cumpleaños</h3>
            <p className="mt-3 text-white/70">
              Fotografía y video para fiestas familiares, celebraciones
              infantiles y momentos llenos de alegría.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:border-foxOrange/40 transition">
            <div className="text-3xl">🎓</div>
            <h3 className="mt-5 text-2xl font-bold">Graduaciones</h3>
            <p className="mt-3 text-white/70">
              Registramos logros importantes con imágenes que transmiten
              orgullo, emoción y recuerdos duraderos.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:border-foxOrange/40 transition">
            <div className="text-3xl">🎥</div>
            <h3 className="mt-5 text-2xl font-bold">Video para eventos</h3>
            <p className="mt-3 text-white/70">
              Producción de video para capturar la atmósfera, los detalles y la
              historia completa de cada ocasión especial.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:border-foxOrange/40 transition">
            <div className="text-3xl">🖼️</div>
            <h3 className="mt-5 text-2xl font-bold">
              Impresión de fotografías
            </h3>
            <p className="mt-3 text-white/70">
              Imprimimos tus fotografías con cuidado y calidad para que tus
              recuerdos estén siempre contigo, también fuera de la pantalla.
            </p>
          </div>
        </div>
      </section>
      {/* CONTACTO / CTA FINAL */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          {/* glow decorativo */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-foxOrange/20 blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-foxOrange font-semibold tracking-[0.22em] uppercase text-sm">
                Contacto
              </p>

              <h2
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="mt-3 text-3xl md:text-5xl font-bold"
              >
                Reserva tu fecha con ARTE FOX
              </h2>

              <p className="mt-4 text-white/75 max-w-xl">
                Si estás buscando fotografía, video o impresión de recuerdos
                para un evento especial, estaremos felices de ayudarte.
                Escríbenos por WhatsApp y cuéntanos la fecha, el tipo de evento
                y el lugar.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <WhatsAppButton />

                <a
                  href="/contact"
                  className="px-6 py-3 rounded-2xl border border-white/20 bg-white/5 hover:border-white/40 transition"
                >
                  Ir a contacto
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-foxOrange text-sm font-semibold uppercase tracking-wider">
                  Ubicación
                </p>
                <p className="mt-2 text-white/80">Cochabamba, Bolivia</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-foxOrange text-sm font-semibold uppercase tracking-wider">
                  Atención
                </p>
                <p className="mt-2 text-white/80">
                  Consultas por WhatsApp para reservas, cotizaciones e impresión
                  de fotografías.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-foxOrange text-sm font-semibold uppercase tracking-wider">
                  Experiencia
                </p>
                <p className="mt-2 text-white/80">
                  Más de 20 años acompañando momentos importantes con una mirada
                  profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
