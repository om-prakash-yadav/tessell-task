import type { ColorKeys } from "../../../theme/types/theme-colors/theme-colors";

export interface HeaderTitleProps {
  title: string;
  backgroundColor?: ColorKeys;
  onDismiss?: () => void;
  trailingItem?: React.ReactNode;
}
