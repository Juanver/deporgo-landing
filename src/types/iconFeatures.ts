import { Flame, ClipboardList, HandCoins } from "@lucide/astro";

type FlameIcon = typeof Flame;
type ClipboardListIcon = typeof ClipboardList;
type HandCoinsIcon = typeof HandCoins;
type iconFeatures = FlameIcon | ClipboardListIcon | HandCoinsIcon | string;

type Feature = {
  Icon: iconFeatures;
  title: string;
  description: string;
  points: string[];
};

export type { Feature, iconFeatures };
