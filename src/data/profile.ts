export interface SocialLink {
  label: string;
  url: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  workMode: string;
  email: string;
  tagline: string;
  secondaryStatement: string;
  availability: string;
  positioning: string;
  languages: Language[];
  socials: SocialLink[];
  resumeUrl: string;
  resumeFileName: string;
  ogImage: string;
}

export const profile: Profile = {
  name: 'Camilo Aponte',
  role: 'AI Automation Engineer',
  location: 'Bogotá, Colombia',
  workMode: 'Open to remote global opportunities',
  email: 'camilo.aponte.ai@gmail.com',
  tagline:
    'I design and build production AI systems that connect enterprise software, structured knowledge, and intelligent automation.',
  secondaryStatement:
    'I build AI systems that reason over information, interact with live services, and automate complex operational workflows.',
  availability: 'Open to remote global AI engineering opportunities.',
  positioning: 'Production AI Systems · Agentic AI · Conversational AI · Knowledge Engineering',
  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'C2 — Advanced' },
    { name: 'Polish', level: 'B2 — Intermediate' },
  ],
  socials: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/camiloapontelara' }],  // [DETAIL TO ADD: resume PDF export] — place the file at public/resume/ using this exact name.
  resumeFileName: 'camilo-aponte-ai-automation-engineer-resume.pdf',
  resumeUrl: '/resume/camilo-aponte-ai-automation-engineer-resume.pdf',
  // [DETAIL TO ADD: final Open Graph image, 1200x630]
  ogImage: '/og-image.png',
};
