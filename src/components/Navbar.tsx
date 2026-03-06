import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/brand/artefox_white_on_black.png";
import { useState } from "react";

const baseLink =
  "relative px-3 py-2 text-sm text-white/80 transition hover:text-white";

const activeLink =
  "text-white after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-foxOrange";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
          <NavLink to="/" className="flex items-center gap-3 min-w-0">
            <img
              src={logo}
              alt="ARTE FOX"
              className="h-12 w-auto object-contain"
            />
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : ""}`
              }
            >
              {t("nav.home")}
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : ""}`
              }
            >
              {t("nav.services")}
            </NavLink>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : ""}`
              }
            >
              {t("nav.gallery")}
            </NavLink>

            <NavLink
              to="/prints"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : ""}`
              }
            >
              {t("nav.prints")}
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : ""}`
              }
            >
              {t("nav.about")}
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : ""}`
              }
            >
              {t("nav.contact")}
            </NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/85 transition hover:border-white/30 hover:text-white"
            >
              {i18n.language === "es" ? "EN" : "ES"}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white"
            >
              ☰
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-3 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-md p-4 space-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5"
            >
              {t("nav.home")}
            </NavLink>

            <NavLink
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5"
            >
              {t("nav.services")}
            </NavLink>

            <NavLink
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5"
            >
              {t("nav.gallery")}
            </NavLink>

            <NavLink
              to="/prints"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5"
            >
              {t("nav.prints")}
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5"
            >
              {t("nav.about")}
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5"
            >
              {t("nav.contact")}
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
