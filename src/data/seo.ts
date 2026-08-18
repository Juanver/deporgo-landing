import { logoPath } from "@/data/logo";

export const siteConfig = {
  name: "Deporgo",
  legalName: "Deporgo",
  url: "https://deporgo.com",
  locale: "es_PE",
  description:
    "Automatización deportiva por WhatsApp para clubes, academias y pichangas. Gestiona pagos, asistencia y cupos en un solo flujo.",
  contactPhone: "+51 979 765 191",
  contactWhatsApp: "https://wa.me/51979765191",
  logo: logoPath,
};

export const targetKeywords = [
  "automatización deportiva",
  "software de gestión deportiva",
  "gestión de clubes deportivos",
  "automatización por WhatsApp",
  "organización de pichangas",
  "control de asistencia deportiva",
  "cobros para academias deportivas",
];

export const homeSeo = {
  title: "Deporgo | Automatización deportiva con WhatsApp",
  description:
    "Automatiza pagos, asistencia y comunicación para clubes y pichangas con Deporgo integrado a WhatsApp.",
  canonical: `${siteConfig.url}/`,
  keywords: targetKeywords,
};

export const automationLandingSeo = {
  title: "Automatización deportiva: software para clubes y pichangas | Deporgo",
  description:
    "Conoce cómo Deporgo mejora ocupación, reduce ausencias y ordena cobros con automatización deportiva por WhatsApp.",
  canonical: `${siteConfig.url}/automatizacion-deportiva/`,
  keywords: targetKeywords,
};

export const faqItems = [
  {
    question: "¿Qué es la automatización deportiva en Deporgo?",
    answer:
      "Es la gestión automática de tareas operativas como convocatorias, confirmaciones, recordatorios y cobros desde WhatsApp para reducir trabajo manual.",
  },
  {
    question: "¿Deporgo sirve para clubes y academias?",
    answer:
      "Sí. Permite controlar membresías, asistencia, cupos por sesión y seguimiento de pagos en una sola plataforma web.",
  },
  {
    question: "¿También funciona para pichangas?",
    answer:
      "Sí. Puedes abrir cupos, administrar suplentes, cerrar listas automáticamente y enviar avisos en tiempo real por WhatsApp.",
  },
  {
    question: "¿Necesito instalar una app para usar Deporgo?",
    answer:
      "No. Deporgo funciona como plataforma web y se integra con WhatsApp para la comunicación con tus jugadores o alumnos.",
  },
];

export const homeStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Deporgo",
    legalName: siteConfig.legalName,
    url: "https://deporgo.com",
    logo: "https://deporgo.com/images/logo-oficial.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contactPhone,
      contactType: "customer support",
      areaServed: "PE",
      availableLanguage: ["es"],
    },
    sameAs: [siteConfig.contactWhatsApp],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "es",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: siteConfig.description,
    url: siteConfig.url,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];
