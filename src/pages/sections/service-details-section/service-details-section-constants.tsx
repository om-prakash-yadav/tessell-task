import { DropdownItemProps } from "../../../components/organisms/dropdown";


export const SOFTWARE_RELEASE_OPTIONS: DropdownItemProps[] = [
  { label: "Oracle 21c", value: "oracle-21c", $isSelected: true },
  { label: "Oracle 19c", value: "oracle-19c" },
  { label: "Oracle 18c", value: "oracle-18c" }
];

export const VERSION_OPTIONS: DropdownItemProps[] = [
  { label: "23.0.0.0.0", value: "23.0.0.0.0", $isSelected: true },
  { label: "21.3.0.0.0", value: "21.3.0.0.0" },
  { label: "19.15.0.0.0", value: "19.15.0.0.0" },
  { label: "18.14.0.0.0", value: "18.14.0.0.0" },
  { label: "12.2.0.1.0", value: "12.2.0.1.0" }
];
