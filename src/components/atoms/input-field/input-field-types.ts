import type React from "react";
import type { ColorKeys } from "../../../theme/types/theme-colors/theme-colors";

interface BaseInputFieldProps {
  $variant?: "primary";
  $size?: "small" | "default";
  $isSelected?: boolean;
  $label?: string;
  $helpText?: {
    message: string;
    color: ColorKeys;
  };
  $leadingItem?: React.ReactNode;
  $trailingItem?: React.ReactNode;
  $isDisabled?: boolean;
  $marginBottomX?: number;
  $cursor?: React.CSSProperties["cursor"];
  $maxWidth?: React.CSSProperties["maxWidth"];
  $multiline?: boolean;
}

export type InputFieldProps = BaseInputFieldProps & 
  (React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>);
