import {
  backend,
  web,
  ringa,
  kenzie,
  dogs,
  bracket,
  game,
  fit,
  filmpire,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Sobre',
  },
  {
    id: 'work',
    title: 'Experiência',
  },
  {
    id: 'contact',
    title: 'Contato',
  },
];

const services = [
  {
    title: 'Desenvolvedor Frontend',
    icon: web,
  },

  {
    title: 'Desenvolvedor backend',
    icon: backend,
  },
];

const experiences = [
  {
    title: 'Monitor de ensino',
    company_name: 'Kenzie Academy Brasil',
    icon: kenzie,
    iconBg: '#383E56',
    date: 'Jun 2022 - Fev 2023',
    points: [
      'Monitoria e orientação prática de HTML, CSS e JavaScript.',
      'Ajudar alunos iniciantes em dúvidas de avaliações, projetos e atividades.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Correção de avaliações e atividades dos alunos do primeiro módulo.',
    ],
  },
  {
    title: 'Desenvolvedor React Jr',
    company_name: 'Ringa',
    icon: ringa,
    iconBg: '#E6DEDD',
    date: 'Mar 2023 - Presente',
    points: [
      'Desenvolver e manter aplicações web para clientes utilizando React.js.',
      'Trabalhar de forma colaborativa com outros times como designers, POs e outros dev para criação de sistemas.',
      'Implementação de design responsivo.',
      'Pesquisa e implementação de novas tecnologias e libs para os projetos.',
    ],
  },
];

const projects = [
  {
    name: 'Dogs',
    description:
      'Rede social para cachorros! O projeto foi desenvolvido durante o curso de React.js da Origamid e permite que os usuários realizem as principais operações de CRUD, tanto para gerenciar seu perfil quanto para publicar conteúdo.',
    tags: [
      {
        name: 'Reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'ContextApi',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS modules',
        color: 'pink-text-gradient',
      },
    ],
    image: dogs,
    source_code_link: 'https://github.com/Pedrosilvacwb/Dogs',
    page: 'https://dogs-seven-drab.vercel.app/',
  },
  {
    name: 'Filmpire',
    description:
      'Aplicação online que utiliza a API do TMDB para fornecer informações sobre filmes. Com ela, é possível explorar uma ampla lista de títulos em diversas categorias, além de obter detalhes sobre um filme ou ator específico.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'Material UI',
        color: 'pink-text-gradient',
      },
    ],
    image: filmpire,
    source_code_link: 'https://github.com/Pedrosilvacwb/Filmpire',
    page: 'https://filmpire-pedro-silva.netlify.app/',
  },
  {
    name: 'EzBracket',
    description:
      'Projeto realizado em grupo na finalização do módulo front-end na Kenzie Academy brasil. Trata-se de uma aplicação para gerenciamento de torneios de forma automatizada.',
    tags: [
      {
        name: 'Reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Chakra UI',
        color: 'green-text-gradient',
      },
      {
        name: 'Express',
        color: 'pink-text-gradient',
      },
      {
        name: 'Postgres',
        color: 'blue-text-gradient',
      },
    ],
    image: bracket,
    source_code_link: 'https://github.com/ez-Bracket/ez-bracket',
    page: 'https://ez-bracket.vercel.app/',
  },
  {
    name: 'Fit App',
    description:
      'Aplicação com informações e gifs animados sobre exercícios físicos, utilizando a plataforma Rapid API.',
    tags: [
      {
        name: 'Reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Material UI',
        color: 'green-text-gradient',
      },
      {
        name: 'API',
        color: 'pink-text-gradient',
      },
    ],
    image: fit,
    source_code_link: 'https://github.com/Pedrosilvacwb/fit-app',
    page: 'https://fit-app-smoky.vercel.app/',
  },
  {
    name: 'Memory Game',
    description:
      'Jogo da memória animado com os personagens de Rick and Morty.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: game,
    source_code_link: 'https://github.com/Pedrosilvacwb/Memory-Game',
    page: 'https://pedrosilvacwb.github.io/Memory-Game/',
  },
];

export { services, experiences, projects };
