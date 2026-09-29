import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { CITIES } from "@/lib/site";
import { captureCampaign, goToThanks, trackLead, trackedWa } from "@/lib/ads";
import { Link } from "@tanstack/react-router";

const SERVICE_OPTIONS = [
  "Karaokê",
  "Jukebox para bar",
  "Aluguel de TV",
  "Equipamentos de som",
  "Outro",
] as const;

type QuoteFormProps = {
  defaultService?: string;
  defaultCity?: string;
  onSent?: () => void;
};

export function QuoteForm({
  defaultService = "",
  defaultCity = "",
  onSent,
}: QuoteFormProps) {
  const [name, setName] = useState("");
  const [city, setCity] = useState(defaultCity);
  const [service, setService] = useState(defaultService);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    captureCampaign();
    const lines = [
      "Olá, gostaria de um orçamento da Disco Laser.",
      name ? `Nome: ${name}` : null,
      service ? `Serviço: ${service}` : null,
      city ? `Cidade: ${city}` : null,
      date ? `Data: ${date}` : null,
      message ? `Detalhes: ${message}` : null,
    ].filter(Boolean);
    trackLead("form");
    window.open(trackedWa(lines.join("\n")), "_blank", "noopener,noreferrer");
    goToThanks();
    onSent?.();
  }

  const fieldClass =
    "w-full h-11 rounded-md bg-elevated px-3 text-sm text-foreground shadow-[0_0_0_1px_rgba(244,237,228,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="quote-name">Nome</Label>
        <Input
          id="quote-name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome"
          autoComplete="name"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="quote-service">Serviço</Label>
          <select
            id="quote-service"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={fieldClass}
          >
            <option value="" disabled>
              Selecione
            </option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="quote-city">Cidade</Label>
          <input
            id="quote-city"
            required
            list="quote-cities"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Itajaí, Camboriú…"
            className={fieldClass}
          />
          <datalist id="quote-cities">
            {CITIES.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="quote-date">Data do evento</Label>
        <Input
          id="quote-date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="quote-msg">Mensagem</Label>
        <Textarea
          id="quote-msg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Quantidade de pessoas, local, horário…"
        />
      </div>
      <Button type="submit" variant="whatsapp" size="lg" className="w-full">
        <WhatsAppIcon className="size-4" />
        Enviar no WhatsApp
      </Button>
      <p className="text-xs leading-relaxed text-subtle">
        Ao enviar, você concorda com o uso desses dados para o orçamento.{" "}
        <Link to="/privacidade" className="underline hover:text-foreground">
          Política de Privacidade
        </Link>
        .
      </p>
    </form>
  );
}
