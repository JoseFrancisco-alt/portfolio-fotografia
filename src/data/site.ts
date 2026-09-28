// Tudo que é texto "seu" fica aqui. Mude este arquivo e o site inteiro atualiza.

export const site = {
  nome: 'Francis Avila',
  apelido: 'Ávila', // como o pessoal te chama (aparece no "Olá, eu sou...")
  descricao: 'Fotografia de paisagem, retrato e rua.',
  cidade: 'Sua cidade, Brasil',
  // Frase grande da capa. "destaque" ganha o marca-texto roxo.
  frase: {
    inicio: 'Fotografias que guardam',
    destaque: 'o que o olho sente.',
  },
  bio: [
    'Sou fotógrafo e estudante. Gosto de luz baixa, lugares abertos e de gente de verdade.',
    'Este site reúne os ensaios que mais me representam: paisagens, retratos e cenas de rua.',
  ],
  equipamento: ['Câmera: Nikon D3200'],
  contato: {
    instagram: 'seu.usuario', // só o @, sem o "@"
    whatsapp: '5500000000000', // DDI + DDD + número, só dígitos
    email: 'voce@exemplo.com',
  },
};

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
export const categorias = [
  {
    slug: 'paisagem',
    titulo: 'Paisagem',
    descricao: 'Horizontes, luz de fim de tarde e lugares que pedem silêncio.',
  },
  {
    slug: 'retrato',
    titulo: 'Retrato',
    descricao: 'Pessoas, olhares e a luz certa no rosto certo.',
  },
  {
    slug: 'rua',
    titulo: 'Rua',
    descricao: 'O acaso da cidade: sombras, pressa e momentos que não se repetem.',
  },
];
