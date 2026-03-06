export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-foxBlack text-white/70">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm">
        <p className="text-white font-semibold">ARTE FOX</p>
        <p className="mt-2">
          Cochabamba, Bolivia · Fotografía & Video · Impresiones
        </p>
        <p className="mt-6 text-white/50">
          © {new Date().getFullYear()} ARTE FOX. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
