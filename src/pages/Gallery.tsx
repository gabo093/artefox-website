import wedding1 from "../assets/images/gallery/wedding-1.jpg";
import wedding2 from "../assets/images/gallery/wedding-2.jpg";
import birthday1 from "../assets/images/gallery/birthday-1.jpg";
import graduation1 from "../assets/images/gallery/graduation-1.jpg";
import baptism1 from "../assets/images/gallery/baptism-1.jpg";
import event1 from "../assets/images/gallery/event-1.jpg";

const galleryItems = [
  {
    image: wedding1,
    title: "Matrimonios",
    subtitle: "Momentos únicos llenos de emoción",
    size: "large",
  },
  {
    image: wedding2,
    title: "Retratos de pareja",
    subtitle: "Detalles que cuentan historias",
    size: "medium",
  },
  {
    image: birthday1,
    title: "Cumpleaños",
    subtitle: "Alegría, familia y celebración",
    size: "medium",
  },
  {
    image: graduation1,
    title: "Graduaciones",
    subtitle: "Logros que merecen recordarse",
    size: "small",
  },
  {
    image: baptism1,
    title: "Bautizos",
    subtitle: "Recuerdos llenos de ternura",
    size: "small",
  },
  {
    image: event1,
    title: "Eventos especiales",
    subtitle: "Cobertura profesional para cada ocasión",
    size: "large",
  },
];

export default function Gallery() {
  return (
    <main className="bg-foxBlack text-white min-h-screen">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 pt-24 pb-14">
        <p className="text-foxOrange font-semibold tracking-[0.22em] uppercase text-sm">
          Galería
        </p>

        <h1
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight"
        >
          Historias capturadas
        </h1>

        <p className="mt-5 max-w-2xl text-white/70 text-lg">
          Explora una selección de momentos especiales que hemos documentado con
          una mirada artística, profesional y cercana.
        </p>
      </section>

      {/* GRID MODERNO */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-12 gap-6 auto-rows-[220px]">
          {galleryItems.map((item, index) => {
            let sizeClasses = "md:col-span-4 md:row-span-1";

            if (item.size === "large") {
              sizeClasses = "md:col-span-8 md:row-span-2";
            } else if (item.size === "medium") {
              sizeClasses = "md:col-span-4 md:row-span-2";
            } else if (item.size === "small") {
              sizeClasses = "md:col-span-4 md:row-span-1";
            }

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 ${sizeClasses}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <p className="text-foxOrange text-xs md:text-sm uppercase tracking-[0.2em] font-semibold">
                    ARTE FOX
                  </p>
                  <h2
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    className="mt-2 text-xl md:text-2xl font-bold"
                  >
                    {item.title}
                  </h2>
                  <p className="mt-2 text-white/75 text-sm md:text-base max-w-md">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
