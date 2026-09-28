// Tudo que é texto "seu" fica aqui. Mude este arquivo e o site inteiro atualiza.

export const site = {
  nome: 'Francis Avila',
  apelido: 'Ávila', // como o pessoal te chama (aparece no "Olá, eu sou...")
  descricao: 'Fotografia de paisagem, retrato e rua.',
  cidade: 'Maceió, Brasil',
  // Frase grande da capa. "destaque" ganha o marca-texto roxo.
  frase: {
    inicio: 'Fotografias que guardam',
    destaque: 'o que o olho sente.',
  },
  bio: [
    'Tô começando na fotografia e pronto pra tirar os melhores cliques: registrar o seu lifestyle, os seus rolês, as pessoas que você ama e muito mais.',
    'Entre uma linha de código e outra, eu fotografo. Esse site é onde as coisas que eu mais amo se encontram: programação, fotografia e arte. Todas as fotos aqui são minhas, e o site em si também é parte do projeto.',
    'Ainda tô no começo, mas é exatamente isso que eu quero mostrar: evolução. Se curtiu, chega junto.',
  ],
  equipamento: ['Câmera: Nikon D3200'],
  contato: {
    instagram: '_avila.jf', // só o @, sem o "@"
    whatsapp: '5582993327581', // DDI + DDD + número, só dígitos
  },
};

// Foto grande do topo da home. Formato: 'categoria/nome-do-arquivo' (sem o .jpg).
export const capaPrincipal = 'paisagem/01-sol-sobre-a-baia';

// Fotos do slider principal da home, na ordem em que aparecem (da mais escura para a mais clara;
// a primeira também aparece no display da câmera 3D).
// Formato: 'categoria/nome-do-arquivo' (sem o .jpg). Lista vazia = escolha automática.
export const destaques: string[] = [
  'rua/02-noite-de-festa',
  'rua/03-luzes-da-praca',
  'retrato/09-wonder-why',
  'retrato/02-olhando-a-cidade',
  'retrato/10-perfil-na-noite',
  'rua/06-bolsa-na-pedra',
  'paisagem/03-fim-de-tarde-nas-pedras',
  'rua/08-buggy-e-bandeira',
  'rua/11-bar-da-praia',
  'rua/07-escola-de-surf',
  'paisagem/06-ceu-amarelo-e-coqueiros',
  'rua/12-kit-de-praia',
  'retrato/05-sorriso',
  'rua/01-capa-mortal-no-barco',
  'paisagem/04-navio-ao-entardecer',
  'paisagem/05-barcos-no-azul',
  'rua/09-ambulante-na-areia',
  'retrato/07-amigos-no-mar',
];

// Divulgação: você também cria sites de portfólio para outras pessoas.
// Aparece como uma seção na home (não é o foco do site) e na página de contato.
export const criacaoDeSites = {
  titulo: 'Quer um site como este?',
  texto:
    'Além de fotografar, eu crio portfólios para fotógrafos, artistas e criadores. Rápidos, bonitos no celular e prontos para o link da bio.',
  vantagens: [
    'Galeria que se monta sozinha com suas fotos',
    'Visual feito do seu jeito',
    'Pronto para o link da bio do Instagram',
  ],
  mensagemWhatsApp: 'Olá! Vi seu portfólio e quero um site assim para mim.',
};

// Cada categoria vira uma página (/paisagem, /retrato, /rua)
// e lê as fotos de src/assets/fotos/<slug>/
// "capa" (opcional) = nome do arquivo sem .jpg: aparece no cartão da home, no menu e primeiro na galeria.
export const categorias: { slug: string; titulo: string; descricao: string; capa?: string }[] = [
  {
    slug: 'paisagem',
    titulo: 'Paisagem',
    descricao: 'Horizontes, luz de fim de tarde e lugares que pedem silêncio.',
  },
  {
    slug: 'retrato',
    titulo: 'Retrato',
    descricao: 'Pessoas, olhares e a luz certa no rosto certo.',
    capa: '10-perfil-na-noite',
  },
  {
    slug: 'rua',
    titulo: 'Rua',
    descricao: 'O acaso da cidade: sombras, pressa e momentos que não se repetem.',
    capa: '03-luzes-da-praca',
  },
];
