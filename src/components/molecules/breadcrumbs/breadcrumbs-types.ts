export interface BreadcrumbItem {
  label: string;
  onPress?: () => void; // If required in future, can be used for navigation
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}
