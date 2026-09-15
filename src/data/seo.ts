import { logoPath } from "@/data/logo";

export const siteConfig = {
  name: "Deporgo",
  legalName: "Deporgo",
  url: "https://www.deporgo.com",
  locale: "es_PE",
  description:
    "Automatización y gestión deportiva para clubes, ligas, torneos y campeonatos. Centraliza pagos, asistencia, fixture y resultados en un solo flujo.",
  contactPhone: "+51 979 765 191",
  contactWhatsApp: "https://wa.me/51928936489",
  logo: logoPath,
};

export const targetKeywords = [
  "automatización deportiva",
  "software de gestión deportiva",
  "gestión de clubes deportivos",
  "software para torneos y campeonatos",
  "automatización por WhatsApp",
  "organización de pichangas",
  "control de asistencia deportiva",
  "cobros para academias deportivas",
  "plataforma de ligas torneos y campeonatos",
  "software para ligas deportivas",
  "tabla de posiciones automática",
];

export const platformKeywords = [
  "plataforma para ligas torneos y campeonatos",
  "gestión de torneos",
  "gestión de campeonatos",
  "tabla de posiciones automática",
  "software para campeonatos",
  "fixture deportivo online",
  "ranking de goleadores",
];

export const homeSeo = {
  title: "Deporgo | Solución para clubes, ligas, torneos y campeonatos",
  description:
    "Automatiza pagos y asistencia por WhatsApp para clubes, y gestiona ligas, torneos y campeonatos con tabla y fixture en tiempo real.",
  canonical: `${siteConfig.url}/`,
  keywords: targetKeywords,
};

export const automationLandingSeo = {
  title: "Automatización deportiva para clubes y organizaciones deportivas | Deporgo",
  description:
    "Conoce cómo Deporgo mejora ocupación, reduce ausencias y ordena cobros con automatización deportiva por WhatsApp para clubes, ligas, torneos y campeonatos.",
  canonical: `${siteConfig.url}/automatizacion-deportiva/`,
  keywords: targetKeywords,
};

export const platformPageSeo = {
  title: "Plataforma de Gestión para Ligas, Torneos y Campeonatos | Deporgo",
  description:
    "Centraliza la operación de tus ligas, torneos y campeonatos con una plataforma profesional: fixture, tabla automática, goleadores y sitio público en tiempo real.",
  canonical: `${siteConfig.url}/plataforma-competencias/`,
  keywords: platformKeywords,
};

export const notFoundSeo = {
  title: "Página no encontrada | Deporgo",
  description:
    "La URL que intentas visitar no existe. Vuelve al inicio de Deporgo para continuar navegando.",
  canonical: `${siteConfig.url}/404/`,
  keywords: ["deporgo", "página no encontrada", "404"],
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
    question: "¿Deporgo también sirve para ligas, torneos y campeonatos?",
    answer:
      "Sí. Incluye módulos para gestionar equipos, fixture, tabla de posiciones, goleadores y publicación de resultados en páginas públicas.",
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
    url: "https://www.deporgo.com",
    logo: "https://www.deporgo.com/images/logo-oficial.png",
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

export const automationStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automatización deportiva por WhatsApp",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "PE",
    serviceType: "Automatización para clubes, ligas, torneos y campeonatos",
    url: automationLandingSeo.canonical,
    description: automationLandingSeo.description,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: `${siteConfig.url}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Automatización deportiva",
        item: automationLandingSeo.canonical,
      },
    ],
  },
];

const platformFaqItems = [
  {
    question: "¿Puedo gestionar varias ligas, torneos o campeonatos al mismo tiempo?",
    answer:
      "Sí. El plan Professional permite gestionar ligas, torneos y campeonatos simultáneos; el plan Enterprise escala a operación ilimitada.",
  },
  {
    question: "¿Qué ocurre con mis datos si pauso el servicio?",
    answer:
      "Conservamos tus datos por 90 días para que puedas reactivar sin perder historial. También puedes solicitar eliminación definitiva.",
  },
  {
    question: "¿Se pueden asignar varios administradores?",
    answer:
      "Sí. Puedes delegar gestión con distintos permisos según tu plan.",
  },
  {
    question: "¿Incluye prueba gratuita?",
    answer:
      "Sí. Puedes comenzar con prueba sin tarjeta para validar la plataforma en tu operación real.",
  },
];

export const platformStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Deporgo Plataforma de Competencias",
    applicationCategory: "SportsApplication",
    operatingSystem: "Web",
    description: platformPageSeo.description,
    url: platformPageSeo.canonical,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: `${siteConfig.url}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Plataforma de competencias",
        item: platformPageSeo.canonical,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: platformFaqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];
