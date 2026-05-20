import { BUSINESS } from "@/lib/config";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

/**
 * Google Maps iframe. No rounded corners. Hairline smoke border.
 * Uses the simple `?q=` search URL — no API key required.
 * Owner can override `mapEmbedUrl` in lib/config.ts for a custom embed.
 */
export function MapEmbed({ className }: Props) {
  const q = encodeURIComponent(
    `${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}`,
  );
  const src = `https://www.google.com/maps?q=${q}&output=embed`;
  return (
    <div className={cn("relative w-full border border-smoke", className)}>
      <iframe
        title={`Map to ${BUSINESS.name}`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block w-full h-full grayscale contrast-125"
        style={{ minHeight: 360 }}
      />
    </div>
  );
}
