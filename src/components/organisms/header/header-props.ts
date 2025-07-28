import type { ColorKeys } from "../../../theme/types/theme-colors/theme-colors";
import type { BreadcrumbItem } from "../../molecules/breadcrumbs/breadcrumbs-types";

export interface HeaderProps {
  breadcrumbs: BreadcrumbItem[];
  credits: number;
  userAvatarSrc: string;
  backgroundColor?: ColorKeys;
}
