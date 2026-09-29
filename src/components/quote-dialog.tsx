import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QuoteForm } from "@/components/quote-form";

export function QuoteDialog({
  trigger,
  defaultService,
}: {
  trigger: ReactNode;
  defaultService?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pedir orçamento</DialogTitle>
          <DialogDescription>
            Preencha e a gente continua no WhatsApp — resposta rápida, sem
            cadastro.
          </DialogDescription>
        </DialogHeader>
        <QuoteForm
          defaultService={defaultService}
          onSent={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
