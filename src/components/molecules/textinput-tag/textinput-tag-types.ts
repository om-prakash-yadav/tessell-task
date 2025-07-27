import type React from "react";
import type { InputFieldProps } from "../../atoms/input-field/input-field-types";

export interface Tag {
  id: string;
  label: string;
}

export interface TextInputTagRef {
  getTags: () => Tag[];
  focus: () => void;
  clear: () => void;
  removeAllTags: () => void;
}

export interface TextInputTagProps {
  name?: string;
  label?: string;
  placeholder?: string;
  maxWidth?: React.CSSProperties["maxWidth"];
  marginBottomX?: number;
  $helpText?: InputFieldProps["$helpText"];
  onChange?: () => void;
}
