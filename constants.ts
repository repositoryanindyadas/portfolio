import { Profile, SkillCategory, Project, Experience, Education, Certification, Achievement } from './types';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Terminal, 
  Database, 
  Cloud, 
  Settings, 
  Server, 
  Code 
} from 'lucide-react';

export const PROFILE: Profile = {
  name: "Anindya Das",
  title: "Cloud Infrastructure & M365 Administrator",
  location: "Krishnanagar, West Bengal, India",
  email: "contactanindyadas@gmail.com",
  phone: "+91 7047933601",
  linkedin: "contactanindyadas",
  summary: "Results-driven Computer Science Engineering graduate specializing in Cloud Infrastructure and Microsoft 365 Administration. Comfortable supporting users, handling basic administration tasks, and working in structured, team-based environments. Keen to be proactive in driving collective success.",
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Cloud Platforms",
    skills: ["Microsoft 365", "AWS (Amazon Web Services)", "Entra ID", "Exchange Online"],
  },
  {
    title: "CI/CD & DevOps",
    skills: ["GitLab", "Docker", "Kubernetes", "Apache", "YAML", "Jenkins", "Sonarqube"],
  },
  {
    title: "Programming",
    skills: ["Python", "Shell Scripting", "HTML/CSS/JS", "REST API"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "ANSI SQL", "Cloud-native Databases"],
  },
  {
    title: "OS & Networking",
    skills: ["Linux (RHEL)", "File System Management", "Process Management", "CIDR", "IP Addressing", "Raspberry Pi"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Microsoft 365 Administration",
    date: "Jan 2026",
    description: "Hands-on learning assessment simulating a 50-user organization setup.",
    bullets: [
      "Provisioned users and licenses, designed security groups and RBAC in Entra ID.",
      "Configured Exchange Online shared mailboxes, permissions, mail flow rules, and spam/quarantine policies.",
      "Practiced Conditional Access and automated bulk administrative tasks using PowerShell.",
    ],
    techStack: ["Microsoft 365", "PowerShell", "Entra ID", "Exchange Online"],
  },
  {
    title: "Control Puc",
    date: "Jan 2026 - Ongoing",
    status: "In Progress",
    description: "Industrial Project for Master's degree focusing on scalable, centralized IoT automation.",
    bullets: [
      "Designing 'Pucs' using Raspberry Pi Pico nodes to handle wireless scripts.",
      "Developing a resilient mesh network with centralized admin dashboard.",
      "Upcoming Publication: 'Automation Using IoT: An application of Wireless Payload Delivery, Control Puc'.",
    ],
    techStack: ["IoT", "Raspberry Pi", "Mesh Networking", "Python"],
  },
  {
    title: "PetCare Manager",
    date: "April 2025 - June 2025",
    description: "Introductory DevOps Project implemented on an open source Spring-Boot Java web app.",
    bullets: [
      "Designed CI Phase with Jenkins Pipeline including Test Phase & Code analysis (Sonarqube).",
      "Set up Dev/QA environments using Tomcat server.",
      "Designed CD Phase on AWS Architecture focusing on cloud-native database deployment and app rollback features.",
    ],
    techStack: ["AWS", "Jenkins", "Spring Boot", "Sonarqube", "Tomcat"],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Remote Contributor",
    company: "Cloudain",
    location: "Fontana, California (Remote)",
    date: "Dec 2024",
    description: "Worked on AWS stack deployment to minimize resource consumption & restructured QNA ChatBot integration. Designed WordPress header extension for their website regarding the widget UI.",
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "JIS College of Engineering",
    degree: "M.Tech in Computer Science Engineering",
    duration: "Oct 2024 - Ongoing",
  },
  {
    institution: "JIS College of Engineering",
    degree: "B.Tech in Computer Science Engineering",
    duration: "Aug 2020 - May 2024",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "MERN Ecommerce Course (+ Fintech Digital Wallet)",
    provider: "Udemy",
    year: "2025",
  },
  {
    name: "Red Hat Enterprise Linux 9, RHCSA and RHCE",
    provider: "Udemy",
    year: "2025",
  },
  {
    name: "Networks and Communications Security ISC2",
    provider: "Coursera",
    year: "2025",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Weekend Dev Challenge 16",
    event: "Codechef",
    date: "Sep 20, 2025",
    result: "600/600 Points",
    description: "Solved six different GenAI projects using LLM, including a Smart Office Assistant, an email reply generator, and a News Brief Generator.",
  },
  {
    title: "CXO's Round Table Competition",
    event: "IIT Kharagpur (GES)",
    date: "Feb 12, 2023",
    result: "1st Position",
    description: "Led team of 4, presented effective Marketing Strategies for a Drone Startup against 17 other teams.",
  },
];

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
];

// Mapping icons for skill categories
export const SKILL_ICONS: Record<string, any> = {
  "Cloud Platforms": Cloud,
  "CI/CD & DevOps": Settings,
  "Programming": Terminal,
  "Databases": Database,
  "OS & Networking": Server,
};
