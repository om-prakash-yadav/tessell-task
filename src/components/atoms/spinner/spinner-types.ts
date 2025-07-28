import type { ThemeColors } from "../../../theme/theme";

export interface SpinnerProps {
  size?: number;
  variant?: keyof typeof ThemeColors;
}
