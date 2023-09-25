import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./resources";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources,
  debug: false,
  keySeparator: false,
  react: {
    useSuspense: false
  },
  interpolation: {
    escapeValue: false,
    formatSeparator: ","
  }
});

export default i18n;
