export interface ThemeCheckboxType {
  variants: {
    primary: {
      unchecked: {
        default: { backgroundColor: string; borderColor: string; iconColor: string | null };
        hover: { backgroundColor: string; borderColor: string; iconColor: string | null };
        active: { backgroundColor: string; borderColor: string; iconColor: string | null };
        disabled: { backgroundColor: string; borderColor: string; iconColor: string | null };
      };
      active: {
        default: { backgroundColor: string; borderColor: string; iconColor: string };
        hover: { backgroundColor: string; borderColor: string; iconColor: string };
        active: { backgroundColor: string; borderColor: string; iconColor: string };
        disabled: { backgroundColor: string; borderColor: string; iconColor: string };
      };
      intermediate: {
        default: { backgroundColor: string; borderColor: string; iconColor: string };
        hover: { backgroundColor: string; borderColor: string; iconColor: string };
        active: { backgroundColor: string; borderColor: string; iconColor: string };
        disabled: { backgroundColor: string; borderColor: string; iconColor: string };
      };
    };
  };
  sizes: {
    small: { size: number; checkIconSize: number };
    default: { size: number; checkIconSize: number };
    large: { size: number; checkIconSize: number };
  };
}
