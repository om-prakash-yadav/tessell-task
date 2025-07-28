import { ColorKeys } from "../../../theme/types/theme-colors/theme-colors";
import { BreadcrumbItem } from "../../molecules/breadcrumbs/breadcrumbs-types";


export interface HeaderProps {
  breadcrumbs: BreadcrumbItem[];
  credits: number;
  userAvatarSrc: string;
  backgroundColor?: ColorKeys;
}
