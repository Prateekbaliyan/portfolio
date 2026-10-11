export type ZoneId =
  | "city"
  | "ai"
  | "forensics"
  | "quant"
  | "builder"
  | "ml"
  | "academy"
  | "achievements"
  | "connect";

export interface ZoneDefinition {
  id: ZoneId;
  name: string;
  tagline: string;
  color: string;
  position: [number, number, number];
  radius: number;
  description: string;
  landmark: string;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  zoneId: ZoneId;
  completed: boolean;
  requiredInteraction?: string;
}

export interface Collectible {
  id: string;
  title: string;
  fact: string;
  position: [number, number, number];
  collected: boolean;
  icon?: string;
}

export interface InteractiveObject {
  id: string;
  title: string;
  zoneId: ZoneId;
  position: [number, number, number];
  radius: number;
  prompt: string;
  type:
    | "profile"
    | "photo_card"
    | "veristream"
    | "docuaudit"
    | "liquiditypulse"
    | "tracker"
    | "location"
    | "ml_lab"
    | "ai_core"
    | "academy"
    | "achievements"
    | "github"
    | "linkedin"
    | "leetcode"
    | "contact"
    | "resume"
    | "portal";
  data?: any;
}

export interface GameState {
  screen: "start" | "loading" | "playing" | "recruiter";
  activeZone: ZoneId;
  discoveredZones: ZoneId[];
  quests: Quest[];
  collectibles: Collectible[];
  collectedCount: number;
  totalCollectibles: number;
  activeInteraction: InteractiveObject | null;
  mapOpen: boolean;
  questOpen: boolean;
  pauseOpen: boolean;
  recruiterOpen: boolean;
  resumeModalOpen: boolean;
  audioEnabled: boolean;
  reducedMotion: boolean;
}
