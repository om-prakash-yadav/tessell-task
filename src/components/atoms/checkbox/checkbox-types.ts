export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  $label?: string;
  $variant?: "primary" | "secondary" | "success" | "danger" | "warning";
  $size?: "small" | "default" | "large";
  $disabled?: boolean;
  $checked?: boolean;
  $indeterminate?: boolean;
}
