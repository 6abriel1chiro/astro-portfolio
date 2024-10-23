// src/i18n.d.ts
export type Translations = {
  SEO_TITLE: string;
  SEO_DESCRIPTION: string;
  EXPERIENCE_TITLE: string;
  PROJECTS_TITLE: string;
  ABOUT_ME_TITLE: string;
  "NAV-ITEMS":
    | {
        EXPERIENCE: string;
        PROJECTS: string;
        "ABOUT-ME": string;
        BLOG: string;
      }
    | {
        EXPERIENCIA: string;
        PROYECTOS: string;
        "SOBRE-MI": string;
        BLOG: string;
      };
  "BLOG-PAGE": {
    TITLE: string;
    DESCRIPTION: string;
  };
};
