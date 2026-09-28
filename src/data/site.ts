// Tudo que é texto "seu" fica aqui. Mude este arquivo e o site inteiro atualiza.

export const site = {
  nome: 'Seu Nome',
  descricao: 'Fotografia de paisagem, retrato e rua.',
  cidade: 'Sua cidade, Brasil',
  bio: [
    'Sou fotógrafo e estudante. Gosto de luz baixa, lugares abertos e de gente de verdade.',
    'Este site reúne os ensaios que mais me representam: paisagens, retratos e cenas de rua.',
  ],
  equipamento: ['Câmera: —', 'Lentes: —', 'Edição: Lightroom'],
  contato: {
    instagram: 'seu.usuario', // só o @, sem o "@"
    whatsapp: '5500000000000', // DDI + DDD + número, só dígitos
    email: 'voce@exemplo.com',
  },
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
