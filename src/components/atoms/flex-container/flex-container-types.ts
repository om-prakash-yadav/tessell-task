import type { ThemeColors } from "../../../theme/theme";

export interface FlexContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: number;
  horizontalSpacing?: number;
  bottomMarginMultiplier?: number;
  flexValue?: React.CSSProperties["flex"];
  containerHeight?: React.CSSProperties["height"];
  containerWidth?: React.CSSProperties["width"];
  horizontalPadding?: number;
  verticalPadding?: number;
  flexDirection?: React.CSSProperties["flexDirection"];
  justifyItems?: React.CSSProperties["justifyContent"];
  alignChildren?: React.CSSProperties["alignItems"];
  flexWrap?: React.CSSProperties["flexWrap"];
  backgroundColor?: keyof typeof ThemeColors;
  cornerRadius?: number;
  topBorderWidth?: number;
}
