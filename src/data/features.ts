import type { Feature } from "@/types/iconFeatures";
import { Flame, ClipboardList, HandCoins, MessageCircleMore, Wallet, BotMessageSquare } from "@lucide/astro";

export const clubFeatures: Feature[] = [
  {
    Icon: Flame,
    title: "Membresías y planes",
    description:
      "Controla socios activos, vencimientos y renovaciones desde un solo panel.",
    points: [
      "Estados de membresía en tiempo real",
      "Recordatorios automáticos por WhatsApp",
      "Segmentación por categoría o sede",
    ],
  },
  {
    Icon: ClipboardList,
    title: "Asistencia y aforos",
    description:
      "Gestiona cupos por entrenamiento o clase evitando sobrecarga operativa.",
    points: [
      "Registro rápido de asistencia",
      "Límites por sesión y lista de espera",
      "Alertas automáticas a ausentes",
    ],
  },
  {
    Icon: HandCoins,
    title: "Cobros simplificados",
    description:
      "Reduce morosidad con flujos de pago claros y confirmación automática.",
    points: [
      "Seguimiento de pagos pendientes",
      "Notificaciones previas al vencimiento",
      "Historial centralizado por cliente",
    ],
  },
];

export const pichangaFeatures = [
  {
    Icon: ClipboardList,
    title: "Listas en segundos",
    description:
      "Publica partido, abre cupos y confirma jugadores en tiempo récord.",
    points: [
      "Convocatorias instantáneas",
      "Confirmación por orden de llegada",
      "Control de suplentes y reemplazos",
    ],
  },
  {
    Icon: BotMessageSquare,
    title: "WhatsApp automatizado",
    description:
      "Cuando se llenan los cupos, Deporgo cierra la lista y avisa a todos automáticamente.",
    points: [
      "Mensajes de cierre sin intervención manual",
      "Avisos de última hora para suplentes",
      "Menos spam y más claridad",
    ],
  },
  {
    Icon: Wallet,
    title: "Pagos ordenados",
    description:
      "Controla quién pagó, quién falta y evita discusiones antes del partido.",
    points: [
      "Estado de pago por jugador",
      "Recordatorios antes del evento",
      "Resumen rápido para el organizador",
    ],
  },
];