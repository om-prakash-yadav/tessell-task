import type { ColorKeys } from "../theme-colors/theme-colors";

export interface ThemeIconActionVariant {
  iconColor: ColorKeys;
}

export interface ThemeIconActionVariantStates {
  default: ThemeIconActionVariant;
  hover: ThemeIconActionVariant;
  active: ThemeIconActionVariant;
  focus: {
    iconColor: ColorKeys;
    outlineColor: ColorKeys;
    outlineWidth: number;
  };
  disabled: ThemeIconActionVariant;
}

export interface ThemeIconActionSize {
  iconSize: number;
  buttonRadius: number;
}

export interface ThemeIconActionType {
  variants: {
    primary: ThemeIconActionVariantStates;
    secondary: ThemeIconActionVariantStates;
    danger: ThemeIconActionVariantStates;
    success: ThemeIconActionVariantStates;
    warning: ThemeIconActionVariantStates;
  };
  sizes: {
    small: ThemeIconActionSize;
    medium: ThemeIconActionSize;
    large: ThemeIconActionSize;
  };
}
