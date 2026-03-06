const WHATSAPP_NUMBER = "59179386830"; // cámbialo luego por el real
const DEFAULT_MESSAGE =
  "Hola, estoy interesado en los servicios de ARTE FOX. Quisiera cotizar un evento.";

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="px-6 py-3 rounded-2xl bg-foxOrange text-black font-semibold shadow-[0_0_45px_rgba(255,106,0,0.25)] hover:opacity-90 transition"
    >
      Cotizar por WhatsApp
    </a>
  );
}
