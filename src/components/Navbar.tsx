import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { occasionCategories, occasionPath } from "@/data/occasions";
import { site } from "@/data/site";

const links = [
  { to: "/occasions", label: "Occasions", children: occasionCategories },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
];

const CLOSE_DELAY = 140;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);
  const { pathname } = useLocation();
  const [lastPath, setLastPath] = useState(pathname);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setMenuOpen(false);
    setMobileOpen(null);
  }

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenuOpen(false), CLOSE_DELAY);
  };

  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled
          ? "bg-night-950/95 shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur"
          : "bg-night-950"
      }`}
    >
      <div className="container-x">
        <div className="flex h-16 items-center justify-between gap-4 md:h-20">
          <Link to="/" className="flex items-center gap-2.5" aria-label={site.name}>
            <img
              src="/logo-mark.png"
              alt=""
              width={203}
              height={232}
              className="h-12 w-auto md:h-14"
            />
            <span className="font-display text-2xl leading-none font-semibold text-moon-50 md:text-[1.7rem]">
              {site.shortName}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => {
              if (l.children) {
                const isActive =
                  pathname === l.to || l.children.some((c) => pathname === occasionPath(c));
                return (
                  <div
                    key={l.to}
                    className="relative"
                    onMouseEnter={() => {
                      cancelClose();
                      setMenuOpen(true);
                    }}
                    onMouseLeave={scheduleClose}
                  >
                    <Link
                      to={l.to}
                      aria-expanded={menuOpen}
                      aria-haspopup="true"
                      onFocus={() => setMenuOpen(true)}
                      className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        isActive || menuOpen
                          ? "text-bloom-400"
                          : "text-moon-100/75 hover:text-moon-50"
                      }`}
                    >
                      {l.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          menuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {menuOpen && (
                      <div className="absolute top-full left-1/2 w-64 -translate-x-1/2 pt-3">
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-night-900/98 p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                          {l.children.map((c) => {
                            const to = occasionPath(c);
                            return (
                              <Link
                                key={c.slug}
                                to={to}
                                onFocus={() => {
                                  cancelClose();
                                  setMenuOpen(true);
                                }}
                                className={`flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                                  pathname === to
                                    ? "bg-bloom-500/15 text-bloom-400"
                                    : "text-moon-100/75 hover:bg-white/5 hover:text-moon-50"
                                }`}
                              >
                                <span>{c.name}</span>
                                <ChevronDown className="h-3.5 w-3.5 -rotate-90 opacity-40" />
                              </Link>
                            );
                          })}
                          <div className="mt-2 border-t border-white/10 px-3 pt-2 pb-1">
                            <Link
                              to="/occasions"
                              className="text-xs font-semibold tracking-wide text-bloom-400 hover:text-bloom-500"
                            >
                              View all occasions →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-bloom-400" : "text-moon-100/75 hover:text-moon-50"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={`tel:+${site.phoneRaw}`}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-moon-100/80 transition-colors hover:text-moon-50"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
            <Link to="/occasions" className="btn-accent">
              Order now
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-moon-50 transition-colors hover:bg-white/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-night-950 lg:hidden">
          <nav className="container-x flex flex-col py-4">
            {links.map((l) => {
              if (l.children) {
                const expanded = mobileOpen === l.to;
                return (
                  <div key={l.to} className="border-b border-white/5">
                    <div className="flex items-center">
                      <Link
                        to={l.to}
                        className={`flex-1 py-3 text-base font-medium ${
                          pathname === l.to ? "text-bloom-400" : "text-moon-100/80"
                        }`}
                      >
                        {l.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileOpen(expanded ? null : l.to)}
                        aria-expanded={expanded}
                        aria-label={expanded ? `Collapse ${l.label}` : `Expand ${l.label}`}
                        className="rounded-lg p-2 text-moon-100/70 hover:bg-white/10"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            expanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {expanded && (
                      <div className="pb-2 pl-4">
                        {l.children.map((c) => {
                          const to = occasionPath(c);
                          return (
                            <Link
                              key={c.slug}
                              to={to}
                              className={`block rounded-lg py-2 pl-3 text-sm ${
                                pathname === to
                                  ? "text-bloom-400"
                                  : "text-moon-100/60 hover:text-moon-50"
                              }`}
                            >
                              {c.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-white/5 py-3 text-base font-medium ${
                      isActive ? "text-bloom-400" : "text-moon-100/80"
                    }`
                  }
                >
                  {l.label}
                  <ChevronDown className="h-4 w-4 -rotate-90 opacity-50" />
                </NavLink>
              );
            })}
            <div className="mt-4 flex flex-col gap-2">
              <Link to="/occasions" className="btn-accent w-full">
                Order now
              </Link>
              <a href={`tel:+${site.phoneRaw}`} className="btn-outline w-full border-white/20 text-moon-50">
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
