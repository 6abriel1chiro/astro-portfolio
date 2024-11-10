// src/types/i18n.d.ts
export type Translations = {
  SEO_TITLE: string;
  SEO_DESCRIPTION: string;
  EXPERIENCE_TITLE: string;
  PROJECTS_TITLE: string;
  ABOUT_ME_TITLE: string;
  ABOUT_ME: {
    INTRO: string;
    ACHIEVEMENTS: string;
  };
  NAV_ITEMS:
    | {
        EXPERIENCE: string;
        PROJECTS: string;
        ABOUT_ME: string;
        BLOG: string;
      }
    | {
        EXPERIENCIA: string;
        PROYECTOS: string;
        SOBRE_MI: string;
        BLOG: string;
      };
  HERO: {
    GREETING: string;
    DESCRIPTION: string;
    AVAILABLE: string;
    CONTACT_ME: string;
    LINKEDIN: string;
  };
  BLOG_PAGE: {
    TITLE: string;
    DESCRIPTION: string;
  };
};
