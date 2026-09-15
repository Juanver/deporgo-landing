import type { Feature } from "@/types/iconFeatures";
import {
  Trophy,
  ChartColumn,
  Users,
  Calendar,
  Share2,
  Palette,
  Lock,
  Zap,
} from "@lucide/astro";

export const platformFeatures: Feature[] = [
  {
    Icon: Trophy,
    title: "Gestión integral de ligas, torneos y campeonatos",
    description:
      "Organiza competencias completas con jornadas, formatos y reglas adaptadas a tu realidad deportiva.",
    points: [
      "Creación de torneos personalizados",
      "Gestión de equipos y participantes",
      "Configuración flexible de reglas y puntuación",
    ],
  },
  {
    Icon: ChartColumn,
    title: "Tabla de posiciones automática",
    description:
      "Actualización en tiempo real con estadísticas claras para equipos, organizadores y aficionados.",
    points: [
      "Tabla recalculada automáticamente",
      "Ranking de goleadores",
      "Historial de rendimiento por equipo",
    ],
  },
  {
    Icon: Calendar,
    title: "Fixture y resultados en minutos",
    description:
      "Publica fechas, registra marcadores y mantiene el calendario siempre al día.",
    points: [
      "Fixture interactivo por jornada",
      "Carga rápida de resultados",
      "Historial completo de partidos",
    ],
  },
  {
    Icon: Palette,
    title: "Marca y personalización",
    description:
      "Refuerza la identidad de tu club o competencia con colores, logo y espacios para patrocinadores.",
    points: [
      "Tema visual personalizado",
      "Subida de logo y banners",
      "Gestión de sponsors",
    ],
  },
  {
    Icon: Share2,
    title: "Sitio público compartible",
    description:
      "Tu competencia cuenta con una página oficial para compartir resultados y tablas en redes.",
    points: [
      "URL única de la competencia",
      "Botón de compartir en WhatsApp y redes",
      "Acceso público a tabla, fixture y goleadores",
    ],
  },
  {
    Icon: Users,
    title: "Control multi-admin",
    description:
      "Asigna roles con seguridad para delegar tareas sin perder control operativo.",
    points: [
      "Múltiples perfiles y permisos",
      "Administrador de competencia dedicado",
      "Superadmin con control global",
    ],
  },
  {
    Icon: Lock,
    title: "Seguridad empresarial",
    description:
      "Protección avanzada de datos con autenticación robusta y políticas de acceso por competencia.",
    points: [
      "Autenticación segura",
      "Datos aislados por organización",
      "Buenas prácticas de privacidad",
    ],
  },
  {
    Icon: Zap,
    title: "Escalabilidad y rendimiento",
    description:
      "Infraestructura preparada para crecer desde torneos locales hasta operaciones masivas.",
    points: [
      "Carga veloz de información",
      "Sincronización en tiempo real",
      "Infraestructura global con Vercel",
    ],
  },
];

export const platformPricingPlans = [
  {
    name: "Starter",
    price: "S/ 19",
    period: "/mes",
    description: "Ideal para competencias en etapa inicial",
    features: [
      "1 torneo activo",
      "Hasta 10 equipos",
      "Hasta 50 partidos por mes",
      "Personalización básica",
      "Soporte por email",
    ],
    cta: "Comenzar",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "S/ 29",
    period: "/mes",
    description: "La mejor opción para competencias en crecimiento",
    features: [
      "5 torneos simultáneos",
      "Hasta 30 equipos",
      "Hasta 200 partidos por mes",
      "Personalización completa",
      "Gestión de sponsors",
      "Soporte prioritario",
    ],
    cta: "Probar gratis",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    period: "",
    description: "Diseñado para federaciones y grandes competiciones",
    features: [
      "Torneos ilimitados",
      "Equipos y partidos ilimitados",
      "Personalización avanzada",
      "API de integración",
      "Soporte dedicado 24/7",
      "SLA garantizado",
    ],
    cta: "Contactar ventas",
    highlighted: false,
  },
];
