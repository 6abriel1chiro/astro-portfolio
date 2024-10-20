// src/i18n/index.ts
import spanish from "./es.json";
import english from "./en.json";
import type { Translations } from "../types/i18n.d";
export type { Translations };
const LANGUAGES = {
  ENGLISH: "en",
  SPANISH: "es",
};

export const getTranslations = ({
  currentLocale,
}: {
  currentLocale: string;
}): Translations => {
  switch (currentLocale) {
    case LANGUAGES.ENGLISH:
      return english;
    case LANGUAGES.SPANISH:
      return spanish;
    default:
      return spanish;
  }
};
