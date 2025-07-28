import type { ButtonProps } from "../../atoms/button/button-types";
import type { DropdownItemProps } from "../dropdown/dropdown-types";

export type DrawerBtnProps = Pick<
  ButtonProps,
  "$icon" | "$trailingIcon" | "$isSelected" | "onClick"
> & {
  label: string;
};

export interface DrawerDropdownProps {
  options: DropdownItemProps[];
  selected: string | number | undefined;
  handleChange: (value: string | number) => void;
}

export interface DrawerProps {
  dropdown?: DrawerDropdownProps;
  menuOptions: DrawerBtnProps[];
  footerOptions: DrawerBtnProps[];
}
