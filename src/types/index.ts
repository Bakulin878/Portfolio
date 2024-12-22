export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  livePreviewUrl: string;
  codeUrl: string;
}

export interface Technology {
  id: number;
  name: number;
  icon: string;
}
export interface contacts {
  id: number;
  name: number;
  description: string;
  livePreviewUrl: string;
  icon: string;
}