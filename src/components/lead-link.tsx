import { forwardRef, useEffect, useState, type ReactNode } from "react";
import { captureCampaign, goToThanks, trackLead, withCampaign } from "@/lib/ads";
import { SITE, waLink } from "@/lib/site";

export const LeadLink = forwardRef<
  HTMLAnchorElement,
  {
    channel: "whatsapp" | "phone";
    text?: string;
    className?: string;
    children: ReactNode;
    whatsappE164?: string;
    phoneHref?: string;
  }
>(function LeadLink(
  { channel, text, className, children, whatsappE164, phoneHref },
  ref,
) {
  const message = text ?? "Olá, gostaria de informações da Disco Laser";
  const phone = whatsappE164 ?? SITE.whatsappE164;
  const plain =
    channel === "phone" ? (phoneHref ?? SITE.phoneHref) : waLink(message, phone);
  const [href, setHref] = useState(plain);

  useEffect(() => {
    captureCampaign();
    if (channel === "whatsapp") setHref(waLink(withCampaign(message), phone));
  }, [channel, message, phone]);

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      onClick={() => {
        if (channel === "phone") {
          trackLead("phone", { conversion: true });
          return;
        }
        trackLead("whatsapp");
        goToThanks();
      }}
      {...(channel === "whatsapp"
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
});