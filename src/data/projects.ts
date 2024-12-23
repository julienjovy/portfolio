export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  externalUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Projet 1",
    slug: "projet-1",
    description: "Description du projet 1",
    image: "/images/projet1.jpg",
    externalUrl: "https://example.com/projet-1"
  }
]; 