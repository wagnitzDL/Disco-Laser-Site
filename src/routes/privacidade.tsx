import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker, Section } from "@/components/section";
import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacidade")({
  head: () =>
    pageMeta(
      "Política de Privacidade | Disco Laser Locações",
      "Política de Privacidade da Disco Laser Locações, Camboriú/SC. Como tratamos nome, contato, orçamento e dados de anúncio, nos termos da LGPD.",
    ),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main>
      <Section className="pt-14 sm:pt-20">
        <Kicker>Disco Laser Locações</Kicker>
        <h1 className="font-display mt-2 max-w-3xl text-display">
          Política de Privacidade
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          Vigente a partir de 29 de setembro de 2026. Esta página descreve como
          a {SITE.name}, com sede em {SITE.address.full}, trata dados pessoais
          de quem pede orçamento, fala conosco ou visita este site.
        </p>

        <article className="mt-12 max-w-3xl space-y-10 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="text-lg font-medium text-foreground">
              Quem é o responsável
            </h2>
            <p className="mt-3">
              O controlador dos dados é a {SITE.name} (Disco Laser Jukebox),
              {` ${SITE.address.full}`}, CEP {SITE.address.cep}. Contato para
              privacidade e para o exercício de direitos:{" "}
              <a className="text-gold hover:underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              , telefone{" "}
              <a className="text-gold hover:underline" href={SITE.phoneHref}>
                {SITE.phone}
              </a>{" "}
              e WhatsApp {SITE.whatsappDisplay}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground">
              Quais dados coletamos
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                Dados que você envia no pedido de orçamento ou no WhatsApp:
                nome, cidade, serviço de interesse, data do evento e a mensagem
                que escrever.
              </li>
              <li>
                Número de telefone, quando você liga ou inicia a conversa pelo
                WhatsApp.
              </li>
              <li>
                Dados técnicos de visita: páginas acessadas, data e hora,
                identificador de clique de anúncio (gclid) e parâmetros de
                campanha (utm), quando a visita vem do Google Ads ou de outro
                anúncio.
              </li>
              <li>
                Cookies e identificadores usados pela tag do Google Ads para
                medir se um anúncio gerou um contato. Não vendemos lista de
                clientes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground">
              Para que usamos
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Responder orçamento de karaokê, jukebox, TV ou som.</li>
              <li>Combinar entrega, montagem e execução do contrato de locação.</li>
              <li>Atender pelo WhatsApp e pelo telefone.</li>
              <li>
                Medir o resultado dos anúncios da Disco Laser e melhorar as
                páginas de destino. A base é o legítimo interesse e, quando
                exigido, o consentimento do navegador para cookies de
                publicidade.
              </li>
              <li>Cumprir obrigação legal ou pedido de autoridade.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground">
              Com quem compartilhamos
            </h2>
            <p className="mt-3">
              O formulário deste site abre uma conversa no WhatsApp da empresa.
              A mensagem fica no aplicativo da Meta (WhatsApp) e com a equipe
              da Disco Laser. A medição de anúncio usa o Google (Google Ads,
              tag {`AW-955191577`}). Não compartilhamos seus dados com outras
              locadoras nem os vendemos. Só repassamos dados se a lei exigir ou
              se um prestador precisar deles para operar o site ou o anúncio,
              sob contrato de tratamento.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground">
              Por quanto tempo
            </h2>
            <p className="mt-3">
              Conversas de orçamento ficam enquanto forem úteis para o
              atendimento e para a defesa de contratos, e pelo prazo que a
              legislação fiscal e civil exigir depois de uma locação. Cookies
              de anúncio seguem o prazo definido pelo Google no seu navegador.
              Você pode apagá-los nas configurações do navegador.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground">
              Seus direitos (LGPD)
            </h2>
            <p className="mt-3">
              Você pode pedir confirmação de tratamento, acesso, correção,
              anonimização, portabilidade, eliminação de dados desnecessários
              ou oposição a um uso, nos termos da Lei nº 13.709/2018. Envie o
              pedido para {SITE.email} ou pelo WhatsApp {SITE.whatsappDisplay},
              com seu nome e a cidade do orçamento, para a gente localizar a
              conversa. Também é possível apresentar reclamação à Autoridade
              Nacional de Proteção de Dados (ANPD).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground">
              Crianças e decisões automatizadas
            </h2>
            <p className="mt-3">
              Este site é destinado a quem contrata locação para festa, bar ou
              evento. Não coletamos dados de criança de propósito. Não usamos
              decisão automatizada que produza efeito jurídico sobre você.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground">
              Atualizações
            </h2>
            <p className="mt-3">
              Se esta política mudar, a versão nova vale a partir da data
              publicada nesta página. O uso do site depois da atualização
              indica ciência do texto vigente.
            </p>
            <p className="mt-6">
              <Link to="/" className="text-gold hover:underline">
                Voltar ao início
              </Link>
            </p>
          </section>
        </article>
      </Section>
    </main>
  );
}
