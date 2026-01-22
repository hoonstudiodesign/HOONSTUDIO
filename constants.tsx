
import { Project, NewsItem } from './types';

const generateMockProjects = (count: number): Project[] => {
  const categories = ['Medical Device', 'Industrial', 'Consumer Electronics', 'POS / Retail', 'Home Appliance'];
  const titles = ['Smart Monitor', 'Precision Tool', 'H1 Audio', 'Retail Hub', 'Kitchen Pro', 'Secure Lock', 'Bio Sensor', 'Robot Grip', 'Power Unit', 'Eco Filter'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: (i + 1).toString(),
    title: `${titles[i % titles.length]} Gen ${Math.floor(i / 10) + 1}`,
    category: categories[i % categories.length],
    imageUrl: `https://picsum.photos/seed/project${i + 1}/440/220`,
    description: 'A professional industrial design project focused on usability and manufacturing excellence.'
  }));
};

export const INITIAL_PROJECTS: Project[] = generateMockProjects(36);

export const INITIAL_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'HOONSTUDIO Wins Red Dot Design Award 2024',
    date: '2024.03.15',
    imageUrl: 'https://picsum.photos/seed/news1/600/400'
  },
  {
    id: '2',
    title: 'The Future of Medical Device Design',
    date: '2024.02.10',
    imageUrl: 'https://picsum.photos/seed/news2/600/400'
  },
  {
    id: '3',
    title: 'Integrating Sustainable Materials into Consumer Tech',
    date: '2024.01.05',
    imageUrl: 'https://picsum.photos/seed/news3/600/400'
  }
];
