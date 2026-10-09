import { Link } from "react-router-dom";
import { Clock, Mail, MapPin, Phone, Wallet } from "lucide-react";
import { occasionCategories, occasionPath } from "@/data/occasions";
import { site } from "@/data/site";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./SocialIcons";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night-950 text-moon-100/65">
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-bloom-500/[0.07] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bloom-500/25 to-transparent"
        aria-hidden="true"
      />
      <div className="container-x relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo-mark.png" alt="" width={203} height={232} className="h-20 w-auto" />
            <span className="font-display text-2xl leading-none font-semibold text-moon-50">
              {site.name}
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            {site.tagline} Locally owned florist on South Meridian, delivering across the Oklahoma
            City metro.
          </p>
          <div className="mt-5 flex gap-2">
            <Social href={site.social.instagram} label="Instagram">
              <InstagramIcon className="h-4 w-4" />
            </Social>
            <Social href={site.social.facebook} label="Facebook">
              <FacebookIcon className="h-4 w-4" />
            </Social>
            <Social href={site.social.tiktok} label="TikTok">
              <TikTokIcon className="h-4 w-4" />
            </Social>
          </div>
        </div>

        <FooterCol title="Occasions">
          {occasionCategories.map((c) => (
            <FooterLink key={c.slug} to={occasionPath(c)}>
              {c.name}
            </FooterLink>
          ))}
          <FooterLink to="/occasions">View all occasions</FooterLink>
        </FooterCol>

        <FooterCol title="Shop">
          <FooterLink to="/sympathy">Funeral & sympathy</FooterLink>
          <FooterLink to="/occasions/wedding">Wedding</FooterLink>
          <FooterLink to="/occasions/quinceanera">Quinceañera</FooterLink>
          <FooterLink to="/occasions/baptisms">Baptisms</FooterLink>
          <FooterLink to="/about">About us</FooterLink>
        </FooterCol>

        <div>
          <h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-moon-50 uppercase">
            Visit us
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bloom-400" />
              <a href={site.mapLink} target="_blank" rel="noreferrer" className="hover:text-moon-50">
                {site.address.line1}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-bloom-400" />
              <a href={`tel:+${site.phoneRaw}`} className="hover:text-moon-50">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-bloom-400" />
              <a href={`mailto:${site.email}`} className="hover:text-moon-50">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-bloom-400" />
              <span>
                Zelle {site.zelle.display}
                <span className="mt-0.5 block text-night-100/40">
                  or cash at pickup / delivery
                </span>
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-bloom-400" />
              <span>
                {site.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/[0.06]">
        <div className="container-x flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link to="/faq" className="hover:text-moon-50">
              FAQ
            </Link>
            <Link to="/contact" className="hover:text-moon-50">
              Contact
            </Link>
            <a href={site.mapLink} target="_blank" rel="noreferrer" className="hover:text-moon-50">
              Get directions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="rounded-full border border-white/15 p-2.5 text-moon-100/70 transition-colors hover:border-bloom-400/50 hover:text-bloom-400"
    >
      {children}
    </a>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-moon-50 uppercase">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="transition-colors hover:text-moon-50">
        {children}
      </Link>
    </li>
  );
}
