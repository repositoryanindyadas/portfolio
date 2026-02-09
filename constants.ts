import { Profile, SkillCategory, Project, Experience, Education, Certification, Achievement, Publication } from './types';
import { 
  Terminal, 
  Database, 
  Cloud, 
  Settings, 
  Server, 
  Code 
} from 'lucide-react';

export const PROFILE: Profile = {
  name: "Anindya Das",
  title: "Learning, Building, Experimenting ..",
  location: "Krishnanagar, West Bengal, India",
  email: "contactanindyadas@gmail.com",
  phone: "+91 7047933601",
  linkedin: "contactanindyadas",
  summary: "🙏 নমস্কার, আমি অনিন্দ্য দাস। I'm a Results-driven Computer Science Engineering graduate specializing in Cloud Infrastructure and Microsoft 365 Administration. Comfortable supporting users, handling basic administration tasks, and working in structured, team-based environments. Keen to be proactive in driving collective success.",
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming & Scripting Languages",
    skills: ["Python", "Shell"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "ANSI SQL", "Cloud-native Databases"],
  },
  {
    title: "Cloud Platforms",
    skills: ["Microsoft 365", "AWS", "Entra ID", "Exchange Online"],
  },
  {
    title: "CI/CD Tools",
    skills: ["GitLab", "Docker", "Kubernetes", "Apache", "YAML", "Jenkins", "Sonarqube"],
  },
  {
    title: "OS & Networking",
    skills: ["Linux", "File System", "Process Management", "CIDR", "IP Addressing", "Raspberry Pi"],
  },
  {
    title: "Basic Development",
    skills: ["HTML/CSS/JS", "REST API"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Microsoft 365 Administration – Practical Assessment",
    date: "Jan 2026",
    description: "Set up and administered a Microsoft 365 tenant simulating a 50-user organization. Focused on identity provisioning, Exchange Online configuration, policy enforcement, and controlled troubleshooting.",
    bullets: [
      "Provisioned users and licenses, designed security groups and RBAC in Entra ID.",
      "Configured Exchange Online shared mailboxes, mailbox permissions, mail flow rules, and spam/quarantine policies.",
      "Practiced Conditional Access and automated bulk administrative tasks using PowerShell.",
    ],
    techStack: ["Microsoft 365", "PowerShell", "Entra ID", "Exchange Online"],
  },
  {
    title: "Control Puc",
    date: "Jan 2026 - Ongoing",
    status: "In Progress",
    description: "Ongoing Industrial Project for Master's degree final semester. A foundational prototype focusing on scalable, centralized IoT automation for small to mid-scale institutions.",
    bullets: [
      "Designing 'Pucs' using Raspberry Pi Pico-based nodes to handle wireless scripts on host machines in a resilient mesh network.",
      "Developing a centralized admin server and dashboard with serviceability in mind.",
      "Upcoming Publication: 'Automation Using IoT: An application of Wireless Payload Delivery, Control Puc'.",
    ],
    techStack: ["IoT", "Raspberry Pi Pico", "Mesh Networking", "Python"],
  },
  {
    title: "PetCare Manager",
    date: "April 2025 - June 2025",
    description: "Introductory DevOps Project implemented on an open source Spring-Boot Java web app.",
    bullets: [
      "Designed CI Phase containing Jenkins Pipeline with Test Phase & Code analysis (Sonarqube), improving on triggering methods.",
      "Set up Dev and QA environments using Tomcat server.",
      "Designed CD Phase on AWS Architecture focusing on deploying a cloud-native database and adding app rollback features.",
    ],
    techStack: ["AWS", "Jenkins", "Spring Boot", "Sonarqube", "Tomcat"],
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Automation Using IoT: An application of Wireless Payload Delivery, Control Puc",
    date: "2026",
    type: "Research Paper",
    description: "Upcoming research paper focusing on scalable, centralized IoT automation for small to mid-scale institutions, featuring Raspberry Pi Pico-based nodes in a resilient mesh network.",
    status: "Upcoming"
  }
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

export const CERTIFICATIONS_FIRST_PARTY: Certification[] = [];

export const CERTIFICATIONS_THIRD_PARTY: Certification[] = [
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

// Centralized Section IDs to ensure consistency across components
export const SECTION_IDS = {
  SKILLS: 'skills',
  VOLUNTARY: 'voluntary',
  PROJECTS: 'projects',
  PUBLICATIONS: 'publications',
  EDUCATION: 'education',
  CERTIFICATES: 'certificates',
  ACHIEVEMENTS: 'achievements',
} as const;

export const NAV_LINKS = [
  { name: 'Skills', href: `#${SECTION_IDS.SKILLS}` },
  { name: 'Voluntary', href: `#${SECTION_IDS.VOLUNTARY}` },
  { name: 'Projects', href: `#${SECTION_IDS.PROJECTS}` },
  { name: 'Publications', href: `#${SECTION_IDS.PUBLICATIONS}` },
  { name: 'Academics', href: `#${SECTION_IDS.EDUCATION}` },
  { name: 'Certificates', href: `#${SECTION_IDS.CERTIFICATES}` },
  { name: 'Achievements', href: `#${SECTION_IDS.ACHIEVEMENTS}` },
];

// Mapping icons for skill categories
export const SKILL_ICONS: Record<string, any> = {
  "Cloud Platforms": Cloud,
  "CI/CD Tools": Settings,
  "Programming & Scripting Languages": Terminal,
  "Databases": Database,
  "OS & Networking": Server,
  "Basic Development": Code,
};