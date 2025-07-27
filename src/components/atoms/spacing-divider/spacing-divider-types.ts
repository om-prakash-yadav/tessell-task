import type React from "react";
import type { ThemeColors } from "../../../theme/theme";

export interface SpacingDividerProps {
  backgroundTone?: keyof typeof ThemeColors;
  verticalSizeMultiplier?: number; // Multiplier for the Gutter value
  horizontalSizeMultiplier?: number;
  dividerHeight?: React.CSSProperties["height"];
  dividerWidth?: React.CSSProperties["width"];
  spacing?: string;
}
