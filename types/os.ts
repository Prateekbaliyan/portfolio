export type AppId =
  | "profile"
  | "projects"
  | "veristream"
  | "docuaudit"
  | "liquiditypulse"
  | "ailab"
  | "skills"
  | "education"
  | "achievements"
  | "network"
  | "terminal"
  | "game"
  | "help";

export interface WindowState {
  id: AppId;
  title: string;
  iconName: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  data?: any;
}

export interface DesktopIconDef {
  id: AppId;
  title: string;
  subtitle: string;
  icon: string;
  badge?: string;
  color: string;
}
