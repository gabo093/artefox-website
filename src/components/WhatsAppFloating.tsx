const WHATSAPP_NUMBER = "59179386830"; // <-- cambia a tu número real
const DEFAULT_MESSAGE =
  "Hola, quiero información sobre los servicios de ARTE FOX. Quisiera cotizar un evento.";

export default function WhatsAppFloating() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-foxOrange text-black font-semibold shadow-lg px-5 py-3 hover:opacity-90 transition"
      aria-label="Cotizar por WhatsApp"
    >
      WhatsApp
    </a>
  );
}
