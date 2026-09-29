import { forwardRef, useEffect, useState, type ReactNode } from "react";
import { captureCampaign, goToThanks, trackLead, trackedWa } from "@/lib/ads";
import { SITE, waLink } from "@/lib/site";

export const LeadLink = forwardRef<
  HTMLAnchorElement,
  {
    channel: "whatsapp" | "phone";
    text?: string;
    className?: string;
    children: ReactNode;
  }
>(function LeadLink({ channel, text, className, children }, ref) {
  const message = text ?? "Olá, gostaria de informações da Disco Laser";
  const plain = channel === "phone" ? SITE.phoneHref : waLink(message);
  const [href, setHref] = useState(plain);

  useEffect(() => {
    captureCampaign();
    if (channel === "whatsapp") setHref(trackedWa(message));
  }, [channel, message]);

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