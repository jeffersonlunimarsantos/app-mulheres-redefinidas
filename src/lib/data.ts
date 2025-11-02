import { DailyWord, Challenge, CommunityPost, ForumTopic } from './types';

// ===== INFORMAÇÕES DA MENTORA (EDITÁVEL) =====
export const mentorInfo = {
  name: "Dra. Ana Carolina Silva",
  title: "Mentora Espiritual e Psicóloga Cristã",
  specialties: [
    "Psicologia Cristã",
    "Terapia de Casais",
    "Desenvolvimento Pessoal",
    "Liderança Feminina",
    "Cura Interior"
  ],
  bio: "Há mais de 15 anos dedico minha vida a ajudar mulheres a descobrirem seu verdadeiro valor e propósito em Deus. Sou psicóloga clínica, especialista em terapia cristã e apaixonada por ver vidas sendo transformadas através do amor de Cristo.",
  story: "Minha jornada começou quando eu mesma passei por um período de profunda crise pessoal. Foi através da fé e do autoconhecimento que encontrei meu caminho de volta à paz e ao propósito. Hoje, uso minha experiência e formação para guiar outras mulheres nesta mesma jornada de redescoberta e cura.",
  credentials: [
    "Doutora em Psicologia Clínica - USP",
    "Especialização em Terapia Cristã - Mackenzie",
    "Certificação em Coaching de Vida",
    "Membro da Associação Brasileira de Psicologia Cristã",
    "Autora do livro 'Mulheres Redefinidas por Deus'"
  ],
  experience: "15+ anos de experiência",
  clientsHelped: "5000+ mulheres atendidas",
  approach: "Minha abordagem combina princípios bíblicos sólidos com técnicas psicológicas comprovadas, sempre respeitando a individualidade e o tempo de cada pessoa. Acredito que cada mulher carrega dentro de si um potencial único que Deus deseja revelar.",
  
  // Fotos da mentora (URLs de exemplo - substitua pelas reais)
  photos: {
    profile: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    about: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
    office: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&h=400&fit=crop",
    testimonial: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop"
  },
  
  // Redes sociais
  socialMedia: {
    instagram: "https://instagram.com/draanacarolina",
    facebook: "https://facebook.com/draanacarolinasilva",
    youtube: "https://youtube.com/@draanacarolina",
    linkedin: "https://linkedin.com/in/anacarolinasilva",
    website: "https://draanacarolina.com.br"
  },
  
  // Links de mentoria
  mentoringLinks: {
    individual: "https://pay.kiwify.com.br/CqFVum7",
    monthly: "https://pay.kiwify.com.br/vJLMIS9",
    biannual: "https://pay.kiwify.com.br/RBc9URa",
    annual: "https://pay.kiwify.com.br/4SqbpPK",
    premium: "https://pay.kiwify.com.br/1GbiFej"
  },
  
  // Depoimentos
  testimonials: [
    {
      name: "Maria Santos",
      text: "A Dra. Ana mudou minha vida! Através das sessões, encontrei meu propósito e hoje sou uma mulher completamente transformada.",
      rating: 5
    },
    {
      name: "Priscila Lima",
      text: "Profissional incrível! Combina conhecimento técnico com sabedoria espiritual de forma única. Recomendo de coração!",
      rating: 5
    },
    {
      name: "Juliana Costa",
      text: "Depois de anos lutando com baixa autoestima, finalmente encontrei meu valor através do trabalho da Dra. Ana. Gratidão eterna!",
      rating: 5
    }
  ]
};

// Dados mock para demonstração
export const mockDailyWords: DailyWord[] = [
  {
    id: '1',
    date: new Date().toISOString().split('T')[0],
    verse: "Ela é vestida de força e dignidade; sorri diante do futuro.",
    reference: "Provérbios 31:25",
    message: "Hoje, lembre-se de que você é uma mulher redefinida por Deus. Sua força vem Dele, e seu futuro está seguro em Suas mãos. Sorria, pois você é amada e escolhida!",
    category: 'strength'
  },
  {
    id: '2',
    date: new Date(Date.now() - 86400000).toISOString().split('T')[0],
    verse: "O Senhor, teu Deus, está no meio de ti, poderoso para te salvar; ele se deleitará em ti com alegria; renovar-te-á no seu amor, regozijar-se-á em ti com júbilo.",
    reference: "Sofonias 3:17",
    message: "Deus se alegra em você! Ele não apenas te ama, mas se deleita na sua existência. Você traz alegria ao coração do Pai.",
    category: 'love'
  }
];

export const mockChallenges: Challenge[] = [
  {
    id: '1',
    title: "Semana do Autocuidado",
    description: "Dedique tempo para cuidar de si mesma esta semana",
    startDate: new Date(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    category: 'selfcare',
    participants: 234,
    isActive: true,
    tasks: [
      { id: '1', task: "Ore por 15 minutos", completed: true },
      { id: '2', task: "Faça uma caminhada", completed: true },
      { id: '3', task: "Leia um capítulo da Bíblia", completed: false },
      { id: '4', task: "Pratique gratidão", completed: false },
      { id: '5', task: "Conecte-se com uma amiga", completed: false }
    ]
  },
  {
    id: '2',
    title: "21 Dias de Gratidão",
    description: "Transforme sua perspectiva através da gratidão diária",
    startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    endDate: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000),
    category: 'faith',
    participants: 189,
    isActive: false,
    tasks: []
  }
];

export const mockCommunityPosts: CommunityPost[] = [
  {
    id: '1',
    authorId: 'user1',
    author: {
      name: "Ana Silva",
      avatar: undefined
    },
    content: "Hoje acordei com o coração cheio de gratidão! Deus tem sido tão fiel em minha vida. 🙏✨",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    likes: 24,
    comments: [],
    tags: ["gratidão", "fé", "testemunho"]
  },
  {
    id: '2',
    authorId: 'user2',
    author: {
      name: "Maria Santos",
      avatar: undefined
    },
    content: "Compartilhando meu versículo favorito hoje: 'Tudo posso naquele que me fortalece' - Filipenses 4:13 💪❤️",
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
    likes: 31,
    comments: [],
    tags: ["versículo", "força", "fé"]
  },
  {
    id: '3',
    authorId: 'user3',
    author: {
      name: "Priscila Lima",
      avatar: undefined
    },
    content: "Meninas, quero compartilhar uma vitória! Depois de meses orando, consegui o emprego dos meus sonhos. Deus é fiel! 🎉",
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    likes: 45,
    comments: [],
    tags: ["vitória", "oração", "trabalho"]
  }
];

export const mockForumTopics: ForumTopic[] = [
  {
    id: '1',
    title: "Como encontrar propósito em meio às dificuldades da vida?",
    content: "Hoje quero conversar sobre algo que todas nós enfrentamos: encontrar nosso propósito quando a vida parece difícil. Como vocês têm lidado com isso?",
    authorId: 'mod1',
    author: {
      name: "Moderadora Ana",
      avatar: undefined
    },
    category: 'purpose',
    tags: ["propósito", "dificuldades", "fé"],
    replies: [],
    likes: 67,
    views: 234,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    lastActivity: new Date(Date.now() - 1 * 60 * 60 * 1000),
    isSticky: true
  },
  {
    id: '2',
    title: "Superando a ansiedade com fé - minha jornada",
    content: "Quero compartilhar como Deus tem me ajudado a superar crises de ansiedade. Talvez minha experiência possa ajudar alguém...",
    authorId: 'user4',
    author: {
      name: "Maria Silva",
      avatar: undefined
    },
    category: 'mental-health',
    tags: ["ansiedade", "fé", "testemunho"],
    replies: [],
    likes: 45,
    views: 189,
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
    lastActivity: new Date(Date.now() - 2 * 60 * 60 * 1000)
  }
];

// Funções utilitárias
export const formatTimeAgo = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'agora';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}min`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d`;
  
  return date.toLocaleDateString('pt-BR');
};

export const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    'purpose': 'bg-purple-100 text-purple-800',
    'mental-health': 'bg-green-100 text-green-800',
    'motherhood': 'bg-pink-100 text-pink-800',
    'self-esteem': 'bg-blue-100 text-blue-800',
    'relationships': 'bg-yellow-100 text-yellow-800',
    'forgiveness': 'bg-indigo-100 text-indigo-800',
    'faith': 'bg-orange-100 text-orange-800',
    'career': 'bg-teal-100 text-teal-800',
    'selfcare': 'bg-rose-100 text-rose-800',
    'healing': 'bg-emerald-100 text-emerald-800'
  };
  
  return colors[category] || 'bg-gray-100 text-gray-800';
};

export const getTemperamentColor = (temperament: string): string => {
  const colors: Record<string, string> = {
    'sanguineo': 'from-yellow-400 to-orange-500',
    'colerico': 'from-red-400 to-pink-500',
    'melancolico': 'from-blue-400 to-purple-500',
    'fleumatico': 'from-green-400 to-teal-500'
  };
  
  return colors[temperament] || 'from-gray-400 to-gray-500';
};

// Dados para os testes
export const temperamentQuestions = [
  {
    id: 1,
    question: "Em uma festa, você geralmente:",
    options: [
      { text: "É o centro das atenções e conversa com todos", temperament: 'sanguineo' },
      { text: "Toma a iniciativa de organizar atividades", temperament: 'colerico' },
      { text: "Prefere conversas profundas com poucas pessoas", temperament: 'melancolico' },
      { text: "Observa mais do que participa ativamente", temperament: 'fleumatico' }
    ]
  },
  // Adicione mais perguntas conforme necessário
];

export const emotionalQuestions = [
  {
    id: 1,
    question: "Quando alguém cancela um compromisso comigo no último minuto, eu:",
    options: [
      { text: "Sinto que não sou importante para a pessoa", category: 'abandono' },
      { text: "Penso que a pessoa não gosta realmente de mim", category: 'rejeicao' },
      { text: "Fico desconfiada se há outros motivos", category: 'traicao' },
      { text: "Entendo que imprevistos acontecem", category: 'equilibrio' }
    ]
  },
  // Adicione mais perguntas conforme necessário
];

// Mensagens inspiradoras para diferentes situações
export const inspirationalMessages = {
  welcome: [
    "Bem-vinda à nossa comunidade! Você é amada e valorizada aqui. 💕",
    "Que alegria ter você conosco! Juntas somos mais fortes. 🌸",
    "Sua jornada de crescimento começa agora. Deus tem planos maravilhosos para você! ✨"
  ],
  encouragement: [
    "Você é mais forte do que imagina. Deus te deu força para superar qualquer desafio! 💪",
    "Lembre-se: você é filha do Rei dos reis. Sua identidade está segura Nele. 👑",
    "Cada dia é uma nova oportunidade de crescer e brilhar. Você consegue! 🌟"
  ],
  comfort: [
    "Nos momentos difíceis, lembre-se de que Deus está ao seu lado. Você não está sozinha. 🤗",
    "Suas lágrimas são vistas por Deus. Ele cuida de cada detalhe da sua vida. 💙",
    "A tempestade vai passar. Deus tem um propósito em tudo. Confie Nele. 🌈"
  ]
};

// Configurações de segurança e moderação
export const communityGuidelines = {
  rules: [
    "Seja respeitosa e acolhedora com todas as participantes",
    "Compartilhe experiências que possam edificar outras mulheres",
    "Mantenha o foco em crescimento espiritual e emocional",
    "Evite julgamentos e ofereça apoio genuíno",
    "Respeite a privacidade e confidencialidade das outras",
    "Não compartilhe conteúdo inadequado ou ofensivo",
    "Use linguagem edificante e construtiva",
    "Busque sempre o bem-estar da comunidade"
  ],
  reportReasons: [
    "Conteúdo inadequado",
    "Spam ou propaganda",
    "Assédio ou bullying",
    "Informação falsa",
    "Violação de privacidade",
    "Outro motivo"
  ]
};

export default {
  mentorInfo,
  mockDailyWords,
  mockChallenges,
  mockCommunityPosts,
  mockForumTopics,
  formatTimeAgo,
  getCategoryColor,
  getTemperamentColor,
  temperamentQuestions,
  emotionalQuestions,
  inspirationalMessages,
  communityGuidelines
};