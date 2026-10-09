import { Link } from "react-router-dom";
import { site, telLink } from "@/data/site";

export default function NotFoundPage() {
  return (
    <section className="bg-night-950 py-28 text-center text-moon-50 sm:py-40">
      <div className="container-x">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">This page wilted away</h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-moon-100/65">
          The link is broken or the arrangement moved. Try the catalog, or call us and we will find
          it for you.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-accent">
            Back home
          </Link>
          <Link
            to="/occasions"
            className="btn border border-moon-50/25 text-moon-50 hover:bg-moon-50/10"
          >
            Shop gifts
          </Link>
        </div>
        <p className="mt-8 text-xs text-moon-100/45">
          Or call{" "}
          <a href={telLink()} className="underline underline-offset-4">
            {site.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
