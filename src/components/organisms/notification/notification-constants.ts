import type { NotificationVariantMappingType } from "./notification-types";

export const NotificationVariantMapping: NotificationVariantMappingType = {
  info: {
    iconType: "InfoIcon",
    iconTint: "primary-300",
    backgroundTint: "secondary-0",
  },
  success: {
    iconType: "CheckboxCheck",
    iconTint: "success-300",
    backgroundTint: "success-0",
  },
  error: {
    iconType: "InfoIcon",
    iconTint: "danger-300",
    backgroundTint: "danger-0",
  },
  warning: {
    iconType: "Announcement",
    iconTint: "warning-300",
    backgroundTint: "warning-0",
  },
};
