export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  preview?: string;
  date?: string;
  event?: string;
}

export interface Achievement {
  id: number;
  title: string;
  date: string;
  description: string;
  icon: string;
}

export interface Conference {
  id: number;
  name: string;
  date: string;
  location: string;
  role: string;
  image: string;
}

export interface Leadership {
  id: number;
  title: string;
  organization: string;
  description: string;
  image: string;
  link: string;
  period: string;
}