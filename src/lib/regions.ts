export type Region = {
  slug: string;
  name: string;
  area: string;
  lead: string;
  delivery: string;
  karaoke: string;
  commerce: string;
  image: string;
};

export const REGIONS: Region[] = [
  {
    slug: "camboriu",
    name: "Camboriú",
    area: "Sede",
    lead: "A Disco Laser fica no Centro de Camboriú. Karaokê, jukebox, TV e som saem daqui para a festa, o bar e o evento.",
    delivery: "No Centro e nos bairros a montagem costuma caber no mesmo dia, quando a agenda abre. É a base de toda a operação.",
    karaoke: "Aniversário em casa, salão de igreja e confraternização de empresa no município: o kit chega com TV, caixa, dois microfones e repertório com pontuação.",
    commerce: "Bares e lanchonetes de Camboriú podem ficar com jukebox em comodato ou comissão, modelo de chão ou de parede.",
    image: "/images/servico-karaoke.jpg",
  },
  {
    slug: "balneario-camboriu",
    name: "Balneário Camboriú",
    area: "Litoral Norte",
    lead: "Aluguel de karaokê, TV e som em Balneário Camboriú para apartamento, cobertura, salão e casa de temporada.",
    delivery: "Combinamos o horário com a portaria e o elevador de serviço. Atendemos da Barra Sul à Barra Norte e bairros como Pioneiros e Estados.",
    karaoke: "O kit entra pronto: tela, som e microfones sem fio. Mais de 10 mil músicas, nacional e internacional, para a noite não parar na escolha da faixa.",
    commerce: "Bares e pubs de BC usam a jukebox da Disco Laser no ponto, com repertório que o cliente escolhe sozinho.",
    image: "/images/karaoke-festa.jpg",
  },
  {
    slug: "itajai",
    name: "Itajaí",
    area: "Litoral Norte",
    lead: "Aluguel de karaokê em Itajaí para festa em casa, clube, salão e evento de empresa, com entrega e montagem.",
    delivery: "Saímos de Camboriú e cobrimos Centro, São Vicente, Cordeiros, Fazenda e praias de Itajaí. TV e som seguem no mesmo frete.",
    karaoke: "Pedido típico: aniversário e confraternização. Levamos máquina com pontuação, TV, caixa e pedestais. Você só recebe o pessoal.",
    commerce: "Para bar e lanchonete em Itajaí, a máquina de música fica no estabelecimento em comodato ou comissão.",
    image: "/images/hero-festa.jpg",
  },
  {
    slug: "itapema",
    name: "Itapema",
    area: "Litoral Norte",
    lead: "Locação de karaokê e equipamentos em Itapema, da Meia Praia ao centro, inclusive casa de temporada.",
    delivery: "A rota sai de Camboriú. Em temporada pedimos a data com antecedência — fim de semana de verão esgota a frota.",
    karaoke: "Kit completo para varanda, salão de prédio e chácara. Microfones sem fio e repertório atualizado, com lista em PDF para consultar antes.",
    commerce: "Quiosque, bar e restaurante em Itapema: jukebox de chão ou parede, conforme o espaço do salão.",
    image: "/images/karaoke-mics.jpg",
  },
  {
    slug: "navegantes",
    name: "Navegantes",
    area: "Litoral Norte",
    lead: "Aluguel de karaokê em Navegantes para festa, salão e evento, do lado de cá da ponte em relação a Itajaí.",
    delivery: "Entrega e montagem inclusas na região. Gravatá, Centro e bairros próximos entram na mesma rota do Litoral Norte.",
    karaoke: "O conjunto chega com TV, som e dois microfones. Serve aniversário, formatura pequena e confraternização.",
    commerce: "Comércio de Navegantes pode operar a jukebox em comodato, sem comprar equipamento.",
    image: "/images/servico-karaoke.jpg",
  },
  {
    slug: "brusque",
    name: "Brusque",
    area: "Vale do Itajaí",
    lead: "Aluguel de karaokê e som em Brusque. A Disco Laser sobe o Vale a partir da sede em Camboriú.",
    delivery: "Centro, Azambuja, Santa Terezinha e limítrofes. Para sábado à noite, reserve com antecedência — a viagem entra na logística do dia.",
    karaoke: "Festas de família e eventos de empresa no município. Máquina com pontuação, TV e caixa no mesmo pedido.",
    commerce: "Bares de Brusque: máquina de música em comodato ou comissão, com modelos de chão e de parede.",
    image: "/images/servico-som.jpg",
  },
  {
    slug: "blumenau",
    name: "Blumenau",
    area: "Vale do Itajaí",
    lead: "Aluguel de karaokê em Blumenau, além de TV e PA para evento. Atendimento a partir de Camboriú.",
    delivery: "Centro, Velha, Vila Nova, Itoupava e região. Datas de Oktoberfest e fim de ano pedem reserva antecipada.",
    karaoke: "Salão, clube e casa. O kit inclui entrega, montagem e repertório com mais de 10 mil faixas.",
    commerce: "Jukebox para bar e casa noturna em Blumenau, em contrato de comodato ou comissão.",
    image: "/images/servico-jukebox.jpg",
  },
  {
    slug: "tijucas",
    name: "Tijucas",
    area: "Grande Florianópolis",
    lead: "Locação de karaokê em Tijucas, no caminho entre o Litoral Norte e a Grande Florianópolis.",
    delivery: "Centro e bairros. O frete sai de Camboriú junto com a rota de Porto Belo e Governador Celso Ramos, quando a agenda fecha.",
    karaoke: "Festa em salão e em casa, com TV, som e microfones sem fio. Montagem no local.",
    commerce: "Bar e lanchonete em Tijucas podem receber jukebox sem comprar a máquina.",
    image: "/images/servico-karaoke.jpg",
  },
  {
    slug: "barra-velha",
    name: "Barra Velha",
    area: "Litoral Norte",
    lead: "Aluguel de karaokê em Barra Velha para casa, condomínio e evento de praia.",
    delivery: "Centro, Itajuba e região. No verão a antecedência faz diferença: a mesma equipe cobre Itajaí, BC e Barra Velha.",
    karaoke: "Kit de festa com pontuação na tela. Serve aniversário e réveillon em casa de temporada.",
    commerce: "Estabelecimento comercial na cidade: jukebox em comodato, chão ou parede.",
    image: "/images/hero-festa.jpg",
  },
  {
    slug: "sao-jose",
    name: "São José",
    area: "Grande Florianópolis",
    lead: "Aluguel de karaokê e equipamentos em São José, na Grande Florianópolis.",
    delivery: "Kobrasol, Campinas, Barreiros e Centro. A saída é de Camboriú; confirmamos a janela de montagem no WhatsApp.",
    karaoke: "Evento em salão e confraternização de empresa. TV, caixa, microfones e repertório nacional e internacional.",
    commerce: "Jukebox para bar em São José, no mesmo modelo de comodato usado no Litoral Norte.",
    image: "/images/servico-tv.jpg",
  },
  {
    slug: "florianopolis",
    name: "Florianópolis",
    area: "Grande Florianópolis",
    lead: "Aluguel de karaokê em Florianópolis, na ilha e no continente, com entrega e montagem.",
    delivery: "Atendemos a capital sob consulta de rota e horário. Continente e norte da ilha são os trechos mais diretos a partir de Camboriú.",
    karaoke: "Apartamento, cobertura e salão. O kit não exige que alguém da festa saiba ligar mesa de som.",
    commerce: "Bar e casa na Grande Florianópolis: máquina de música em comodato ou comissão.",
    image: "/images/karaoke-festa.jpg",
  },
];

export function regionBySlug(slug: string) {
  return REGIONS.find((r) => r.slug === slug);
}
