
export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
}

export type ViewType = 'HOME' | 'ABOUT' | 'SERVICES' | 'PROJECTS' | 'NEWS' | 'CONTACT';

export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  SERVICES = 'services',
  PROJECTS = 'projects',
  NEWS = 'news',
  CONTACT = 'contact',
  ADMIN = 'admin'
}
