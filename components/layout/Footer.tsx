import Link from "next/link";
import { BUSINESS, NAV_LINKS } from "@/lib/config";
import { Stamp } from "@/components/type/Stamp";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-smoke bg-ink text-bone">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 border-b border-smoke pb-12">
          <div>
            <p className="font-display uppercase text-5xl md:text-7xl leading-[0.85]">
              B2T<span className="text-blood">·</span>BOXING
            </p>
            <p className="font-editorial italic text-bone/70 mt-4 max-w-md text-lg">
              {BUSINESS.mission}
            </p>
          </div>
          <Link
            href="/contact"
            className="stamp text-bone hover:text-blood transition-colors self-start md:self-end"
          >
            Book a free trial →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-12">
          <div className="space-y-3">
            <Stamp className="text-bone/40">Visit</Stamp>
            <p className="font-display uppercase text-2xl leading-tight">
              {BUSINESS.address.street}
              <br />
              {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
              {BUSINESS.address.zip}
            </p>
          </div>
          <div className="space-y-3">
            <Stamp className="text-bone/40">Hours</Stamp>
            <p className="font-display uppercase text-2xl leading-tight">
              {BUSINESS.hours.display}
            </p>
          </div>
          <div className="space-y-3">
            <Stamp className="text-bone/40">Contact</Stamp>
            <p className="font-display uppercase text-2xl leading-tight">
              <a
                href={`tel:${BUSINESS.phone.href}`}
                className="hover:text-blood transition-colors block"
              >
                {BUSINESS.phone.display}
              </a>
              <a
                href={`sms:${BUSINESS.phone.href}`}
                className="hover:text-blood transition-colors block mt-1"
              >
                Text us
              </a>
            </p>
          </div>
          <div className="space-y-3">
            <Stamp className="text-bone/40">Site</Stamp>
            <ul className="space-y-1">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-display uppercase text-xl hover:text-blood transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/waiver"
                  className="font-display uppercase text-xl hover:text-blood transition-colors"
                >
                  Waiver
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-smoke flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Stamp className="text-bone/40">
            © {year} {BUSINESS.name}. All rights reserved.
          </Stamp>
          <div className="flex gap-6">
            {BUSINESS.social.instagram ? (
              <a
                href={BUSINESS.social.instagram}
                className="stamp hover:text-blood"
              >
                Instagram
              </a>
            ) : null}
            {BUSINESS.social.facebook ? (
              <a
                href={BUSINESS.social.facebook}
                className="stamp hover:text-blood"
              >
                Facebook
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
