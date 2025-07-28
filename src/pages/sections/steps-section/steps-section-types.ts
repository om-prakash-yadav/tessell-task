import type { StepperItem } from "../../../components/molecules/stepper/stepper.types";
import type { AppIconKeys } from "../../../resources/icons";

export interface StepButton {
  icon?: AppIconKeys;
  label: string;
  onClick: () => void;
  isLoading?: boolean;
}

export interface ExtendedStepperItem extends StepperItem {
  button?: StepButton;
}

export interface StepsSectionProps {
  currentStepIndex: number;
  steps: ExtendedStepperItem[];
}
