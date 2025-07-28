import type { ButtonProps } from "../../atoms/button/button-types";

export type DrawerBtnProps = Pick<
  ButtonProps,
  "$icon" | "$trailingIcon" | "$isSelected" | "onClick"
> & {
  label: string;
};

export interface DrawerProps {
  menuOptions: DrawerBtnProps[];
  footerOptions: DrawerBtnProps[];
}
