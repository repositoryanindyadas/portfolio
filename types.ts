export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  date: string;
  description: string;
  bullets: string[];
  techStack?: string[];
  link?: string;
  status?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  date: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export interface Certification {
  name: string;
  year: string;
  provider: string;
}

export interface Achievement {
  title: string;
  event: string;
  date: string;
  result: string;
  description: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
}