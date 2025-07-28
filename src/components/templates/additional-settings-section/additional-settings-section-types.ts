export interface AdditionalSettingsSectionRef {
  submit: () => Promise<boolean>; // True if resolved, false if any error
  scrollIntoView: (position?: ScrollLogicalPosition) => void;
}
