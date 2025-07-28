import type { InputHTMLAttributes } from "react";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  $label: string;
  $variant?: "primary" | "secondary" | "danger" | "success" | "warning";
  $size?: "small" | "regular" | "large";
  $checked?: boolean;
}
