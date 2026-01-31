export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'Building' | 'Wrench' | 'Zap' | 'Ruler';
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  size?: string;
  description: string;
}