import type { AppIconKeys } from "../../../assets/icons";
import type { ColorKeys } from "../../../theme/types/theme-colors/theme-colors";
import type { ThemeIconActionType } from "../../../theme/types/theme-icon-action/theme-icon-action-types";

export interface IconActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconKey: AppIconKeys;
  iconTint?: ColorKeys; // Overrides the default icon color
  spacing?: number;
  noBorder?: boolean;
  buttonStyle: keyof ThemeIconActionType["variants"];
  buttonScale: keyof ThemeIconActionType["sizes"];
  isCircular?: boolean;
  accessibilityLabel: string;
}
