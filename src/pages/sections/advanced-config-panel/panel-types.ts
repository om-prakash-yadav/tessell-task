export interface AdvancedConfigPanelRef {
  submitForm: () => Promise<boolean>; // Returns true if successful, false on error
  navigateToView: (scrollPosition?: ScrollLogicalPosition) => void;
}
