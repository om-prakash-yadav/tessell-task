import type React from "react";
import type { AppIconKeys } from "../../../assets/icons";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $icon: AppIconKeys;
  $trailingIcon?: AppIconKeys;
  $type: "primary" | "tertiary";
  $size: "small" | "regular" | "large";
  $iconSize?: "small" | "regular" | "large";
  $isFullWidth?: boolean;
  $iconOnly?: boolean;
  $isLoading?: boolean;
  $isSelected?: boolean;
  $isHorizontallyCentered?: boolean;
  $marginBottom?: number;
  children?: React.ReactNode;
}
