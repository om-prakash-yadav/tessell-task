import type { ThemeColors } from "../../../theme/theme";

export interface TitleProps {
  title: string;
  backgroundColor?: keyof typeof ThemeColors;
  onDismiss?: () => void;
  trailingItem?: React.ReactNode;
}
