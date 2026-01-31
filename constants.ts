import { NavLink, Project, Service, Stat } from './types';

export const COMPANY_NAME = "GF Instalações e Reparos";

export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'A GF', href: '#sobre' },
  { label: 'Obras', href: '#obras' },
  { label: 'Acervo Técnico', href: '#acervo' },
  { label: 'Contato', href: '#contato' },
];

export const STATS: Stat[] = [
  { value: '5', label: 'Anos de Mercado' },
  { value: '+180', label: 'Projetos Realizados' },
  { value: 'SC', label: 'Atuação no Estado' },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Portas de Alto Padrão',
    description: 'Instalação técnica especializada, desde a abertura da embalagem, ajuste de marcos até a entrega técnica com regulagem fina.',
    iconName: 'Building',
  },
  {
    id: 's2',
    title: 'Pisos de Madeira',
    description: 'Instalação colada ou flutuante com rigoroso preparo de contrapiso e nivelamento para durabilidade máxima.',
    iconName: 'Zap',
  },
  {
    id: 's3',
    title: 'Rodapés e Acabamentos',
    description: 'Cortes precisos em 45º, tratamento de juntas e acabamentos perfeitos em cantos, escadas e requadros.',
    iconName: 'Ruler',
  },
  {
    id: 's4',
    title: 'Forros e Revestimentos',
    description: 'Estruturação de base metálica ou madeira com fixação segura e alinhamento a laser para painéis e forros.',
    iconName: 'Wrench',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Le Visage Divinité',
    category: 'Rosecon',
    // Porta/Interior Moderno
    imageUrl: 'https://images.unsplash.com/photo-1628143875508-b7eb4634f388?q=80&w=800&auto=format&fit=crop',
    size: 'Balneário Camboriú',
    description: 'Instalação de portas com acabamento premium, alinhando estética e funcionalidade.',
  },
  {
    id: 'p2',
    title: 'Bay House',
    category: 'Brava Beach',
    // Piso de Madeira/Living
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    size: 'Praia Brava',
    description: 'Execução completa de forros, pisos e rodapés em madeira nobre à beira-mar.',
  },
  {
    id: 'p3',
    title: 'Copenhagen',
    category: 'Cechinel',
    // Detalhe Arquitetônico Escuro
    imageUrl: 'https://images.unsplash.com/photo-1596238618721-a4726eb45266?q=80&w=800&auto=format&fit=crop',
    size: 'Balneário Camboriú',
    description: 'O detalhe invisível. Cortes em 45º e precisão milimétrica em cada ambiente.',
  },
  {
    id: 'p4',
    title: 'Icon',
    category: 'Axia Joinville',
    // Hall/Corredor
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
    size: 'Joinville',
    description: 'Pisos de madeira instalados com técnica de climatização para durabilidade eterna.',
  },
];