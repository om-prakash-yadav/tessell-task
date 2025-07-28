import type { InputFieldProps } from "../../atoms/input-field/input-field-types";

export interface DropdownItemProps {
  label: string;
  value: string | number;
  $isSelected?: boolean;
  $leadingItem?: React.ReactNode;
  $trailingItem?: React.ReactNode;
  onClick?: () => void;
}

export interface DropdownProps {
  $label?: string;
  $size?: InputFieldProps["$size"];
  $placeholder: string;
  $options: DropdownItemProps[];
  $isDisabled?: boolean;
  $value: string | number | undefined;
  $helpText?: InputFieldProps["$helpText"];
  onChange: (value: string | number) => void;
  $trailingItem?: React.ReactNode;
}

