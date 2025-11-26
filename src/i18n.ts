import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      hero_title: "Accurate Construction Costs—Instantly",
      hero_desc: "Budzilla aggregates live prices and standardised taxonomies so Polish builders, architects and investors can estimate with confidence.",
      get_started: "Get Started",
      learn_more: "Learn More",
      why_budzilla: "Why Budzilla?",
      step_title: "3 Easy Steps",
      step1: "Select a taxonomy item",
      step2: "Review current market prices",
      step3: "Add to your budget and export",
      cta_title: "Ready to build smarter budgets?",
      cta_button: "Create Free Account",
      footer_note: "Cennik ma charakter poglądowy i nie stanowi oferty handlowej w rozumieniu Kodeksu Cywilnego.",
      footer_copyright: "© {{year}} Budzilla.pl — All rights reserved.",
      feature1_title: "Standardised Taxonomies",
      feature1_desc: "PKOB‑aligned categories ensure reliable cost breakdowns and easy integration with Polish standards.",
      feature2_title: "Real‑Time Prices",
      feature2_desc: "Actual prices from 100+ retailers are aggregated and updated daily, so you can always rely on the latest data.",
      feature3_title: "AI‑Smart Matching",
      feature3_desc: "Our AI engine links retailer articles to taxonomy items automatically, saving hours of manual work.",
    },
  },
  pl: {
    translation: {
      hero_title: "Dokładne koszty budowy — natychmiast",
      hero_desc: "Budzilla agreguje aktualne ceny i standaryzowane taksonomie, aby polscy wykonawcy, architekci i inwestorzy mogli szacować z pewnością.",
      get_started: "Rozpocznij",
      learn_more: "Dowiedz się więcej",
      why_budzilla: "Dlaczego Budzilla?",
      step_title: "3 proste kroki",
      step1: "Wybierz pozycję z taksonomii",
      step2: "Sprawdź aktualne ceny rynkowe",
      step3: "Dodaj do budżetu i eksportuj",
      cta_title: "Gotowy na mądrzejsze budżetowanie?",
      cta_button: "Załóż darmowe konto",
      footer_note: "Cennik ma charakter poglądowy i nie stanowi oferty handlowej w rozumieniu Kodeksu Cywilnego.",
      footer_copyright: "© {{year}} Budzilla.pl — Wszelkie prawa zastrzeżone.",
      feature1_title: "Standaryzowane taksonomie",
      feature1_desc: "Kategorie zgodne z PKOB zapewniają rzetelny podział kosztów i łatwą integrację z polskimi standardami.",
      feature2_title: "Ceny w czasie rzeczywistym",
      feature2_desc: "Aktualne ceny od 100+ sprzedawców są agregowane i codziennie aktualizowane, więc zawsze możesz polegać na najnowszych danych.",
      feature3_title: "Inteligentne dopasowanie AI",
      feature3_desc: "Nasz silnik AI automatycznie łączy artykuły sprzedawców z pozycjami taksonomii, oszczędzając godziny ręcznej pracy.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;