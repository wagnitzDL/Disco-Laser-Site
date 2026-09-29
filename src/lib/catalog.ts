export type SongList = "nacional" | "internacional";

export type Song = {
  code: string;
  artist: string;
  title: string;
  list: SongList;
};

const N: [string, string, string][] = [
  ["03755", "14 Bis", "Linda Juventude"],
  ["06074", "14 Bis", "Planeta Sonho"],
  ["01039", "14 Bis", "Bola de Meia Bola de Gude"],
  ["06197", "14 Bis", "Todo Azul do Mar"],
  ["03078", "14 Bis", "Espanhola"],
  ["30306", "1Kilo", "Deixe-me Ir"],
  ["02748", "A Banda Mais Bonita da Cidade", "Oração"],
  ["07480", "A Cor do Som", "Zanzibar"],
  ["07175", "A Cor do Som", "Menino Deus"],
  ["06402", "A Cor do Som", "Abri a Porta"],
  ["07505", "A Turma do Balão Mágico", "A Galinha Magricela"],
  ["01066", "A Turma do Balão Mágico", "Superfantástico"],
  ["03129", "A Turma do Balão Mágico", "Lindo Balão Azul"],
  ["03729", "Adoniran Barbosa", "Tiro ao Álvaro"],
  ["03273", "Adoniran Barbosa", "Trem das Onze"],
  ["03251", "Adoniran Barbosa", "Saudosa Maloca"],
  ["04161", "Adriana Calcanhotto", "Mentiras"],
  ["04160", "Adriana Calcanhotto", "Mais Feliz"],
  ["04138", "Adriana Calcanhotto", "Vambora"],
  ["06126", "Adriana Calcanhotto", "Devolva-me"],
  ["06822", "Adriana Calcanhotto", "Fico Assim Sem Você"],
  ["04458", "Adryana e a Rapaziada", "Só Faltava Você"],
  ["06752", "Alceu Valença", "Táxi Lunar"],
  ["03277", "Alceu Valença", "Tropicana"],
  ["03880", "Alceu Valença", "La Belle de Jour"],
  ["03903", "Alceu Valença", "Anunciação"],
  ["01604", "Alcione", "Faz Uma Loucura Por Mim"],
  ["09527", "Aline Barros", "Recomeçar"],
  ["01809", "Aline Barros", "Ressuscita-me"],
  ["02403", "Aline Barros", "A Mensagem da Cruz"],
  ["05622", "Aline Barros", "Não Há Deus Maior"],
  ["01486", "Almir Sater", "Beijinho"],
  ["02792", "Agridoce", "Dançando"],
  ["30876", "Alanzim Coreano", "Pega o Guanabara"],
  ["00001", "Ana Carolina", "Garganta"],
  ["00002", "Ana Carolina", "Elevador"],
  ["00003", "Anitta", "Show das Poderosas"],
  ["00004", "Anitta", "Envolver"],
  ["00005", "Belo", "Tudo de Novo"],
  ["00006", "Bruno & Marrone", "Dormi na Praça"],
  ["00007", "Capital Inicial", "Primeiros Erros"],
  ["00008", "Cazuza", "Exagerado"],
  ["00009", "Cazuza", "O Tempo Não Para"],
  ["00010", "Charlie Brown Jr.", "Céu Azul"],
  ["00011", "Chitãozinho & Xororó", "Evidências"],
  ["00012", "Cássia Eller", "Malandragem"],
  ["00013", "Djavan", "Sina"],
  ["00014", "Djavan", "Oceano"],
  ["00015", "Engenheiros do Hawaii", "Infinita Highway"],
  ["00016", "Fundo de Quintal", "Cheiro de Amor"],
  ["00017", "Gusttavo Lima", "Balada Boa"],
  ["00018", "Ivete Sangalo", "Sorte Grande"],
  ["00019", "Jorge Aragão", "Moleque"],
  ["00020", "Jorge & Mateus", "Amo Noite e Dia"],
  ["00021", "Legião Urbana", "Tempo Perdido"],
  ["00022", "Legião Urbana", "Pais e Filhos"],
  ["00023", "Luan Santana", "Meteoro"],
  ["00024", "Lulu Santos", "Tempos Modernos"],
  ["00025", "Marisa Monte", "Ainda Lembro"],
  ["00026", "Marília Mendonça", "Infiel"],
  ["00027", "Nando Reis", "All Star"],
  ["00028", "Os Paralamas do Sucesso", "A Novidade"],
  ["00029", "Pitty", "Equalize"],
  ["00030", "Raça Negra", "Cheia de Manias"],
  ["00031", "Roberto Carlos", "Detalhes"],
  ["00032", "Roberto Carlos", "Amigo"],
  ["00033", "Sandy & Junior", "A Lenda"],
  ["00034", "Skank", "Vou Deixar"],
  ["00035", "Skank", "Sutilmente"],
  ["00036", "Thiaguinho", "Buquê de Flor"],
  ["00037", "Titãs", "Epitáfio"],
  ["00038", "Tribalistas", "Velha Infância"],
  ["00039", "Zezé Di Camargo & Luciano", "É o Amor"],
  ["00040", "Zeca Pagodinho", "Deixa a Vida Me Levar"],
];

const I: [string, string, string][] = [
  ["02533", "ABBA", "Mamma Mia"],
  ["04574", "ABBA", "Dancing Queen"],
  ["04787", "ABBA", "The Winner Takes It All"],
  ["04877", "ABBA", "Chiquitita"],
  ["02569", "Adele", "Rolling in the Deep"],
  ["02600", "Adele", "Someone Like You"],
  ["24376", "Adele", "Hello"],
  ["24002", "Adele", "Set Fire to the Rain"],
  ["24003", "Adele", "Skyfall"],
  ["26383", "Adele", "Easy On Me"],
  ["09072", "4 Non Blondes", "What's Up"],
  ["09033", "3 Doors Down", "Here Without You"],
  ["18221", "50 Cent", "In Da Club"],
  ["04938", "A Teens", "Mamma Mia"],
  ["04678", "Aerosmith", "I Don't Want to Miss a Thing"],
  ["18939", "Ace of Base", "The Sign"],
  ["24603", "Alan Walker", "Faded"],
  ["04922", "Alanis Morissette", "Ironic"],
  ["04850", "Alanis Morissette", "You Oughta Know"],
  ["05000", "The Cranberries", "Zombie"],
  ["09040", "The Cranberries", "Linger"],
  ["09010", "The Cure", "Boys Don't Cry"],
  ["18494", "The Cure", "Friday I'm In Love"],
  ["04733", "The Doors", "Light My Fire"],
  ["04576", "The Police", "Every Breath You Take"],
  ["04763", "The Police", "Roxanne"],
  ["02628", "The White Stripes", "Seven Nation Army"],
  ["24370", "Sia", "Elastic Heart"],
  ["24097", "Sia", "Chandelier"],
  ["24091", "Sam Smith", "Stay With Me"],
  ["04840", "Rod Stewart", "Sailing"],
  ["04908", "Rolling Stones", "(I Can't Get No) Satisfaction"],
  ["18902", "Rolling Stones", "Paint It Black"],
  ["26585", "Rosalía", "Despechá"],
  ["9122", "Toto", "I'll Be Over You"],
  ["9202", "Toto", "Africa"],
  ["18504", "Toto", "Rosanna"],
  ["4813", "Tracy Chapman", "Baby Can I Hold You"],
  ["18981", "Tracy Chapman", "Fast Car"],
  ["24398", "The Weeknd", "The Hills"],
  ["00041", "Beyoncé", "Halo"],
  ["00042", "Billie Eilish", "Bad Guy"],
  ["00043", "Bon Jovi", "It's My Life"],
  ["00044", "Coldplay", "Yellow"],
  ["00045", "Coldplay", "Viva La Vida"],
  ["00046", "Ed Sheeran", "Perfect"],
  ["00047", "Ed Sheeran", "Shape of You"],
  ["00048", "Elvis Presley", "Can't Help Falling in Love"],
  ["00049", "Elton John", "Your Song"],
  ["00050", "Lady Gaga", "Shallow"],
  ["00051", "Madonna", "Like a Prayer"],
  ["00052", "Metallica", "Nothing Else Matters"],
  ["00053", "Nirvana", "Smells Like Teen Spirit"],
  ["00054", "Queen", "Bohemian Rhapsody"],
  ["00055", "Queen", "Don't Stop Me Now"],
  ["00056", "Shakira", "Hips Don't Lie"],
  ["00057", "Taylor Swift", "Love Story"],
  ["00058", "The Beatles", "Hey Jude"],
  ["00059", "U2", "With or Without You"],
  ["00060", "Whitney Houston", "I Will Always Love You"],
];

function mapList(rows: [string, string, string][], list: SongList): Song[] {
  return rows.map(([code, artist, title]) => ({ code, artist, title, list }));
}

export const SONGS: Song[] = [
  ...mapList(N, "nacional"),
  ...mapList(I, "internacional"),
];

export function searchSongs(query: string, list: "todas" | SongList = "todas") {
  const q = query.trim().toLowerCase();
  return SONGS.filter((s) => {
    if (list !== "todas" && s.list !== list) return false;
    if (!q) return true;
    return (
      s.title.toLowerCase().includes(q) ||
      s.artist.toLowerCase().includes(q) ||
      s.code.includes(q)
    );
  });
}
