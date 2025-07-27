import type { AppIconKeys } from "../../../assets/icons";
import type { ColorKeys } from "../../../theme/types/theme-colors/theme-colors";

export type NotificationVariant = "success" | "error" | "warning" | "info";

export interface NotificationProps {
  content: string;
  variant?: NotificationVariant;
  canDismiss?: boolean;
  onDismiss?: () => void;
}

export type NotificationVariantMappingType = Record<
  NotificationVariant,
  {
    iconType: AppIconKeys;
    iconTint: ColorKeys;
    backgroundTint: ColorKeys;
  }
>;
