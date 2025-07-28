import React from "react";
import { Button } from "../../../components/atoms/button/button";
import FlexContainer from "../../../components/atoms/flex-container/flex-container";
import SpacingDivider from "../../../components/atoms/spacing-divider/spacing-divider";
import Stepper from "../../../components/molecules/stepper/stepper";
import { Text } from "../../../components/atoms/text/text";
import { ThemeSpacing } from "../../../theme/theme";
import type { StepsSectionProps } from "./steps-section-types";

const StepsSection: React.FC<StepsSectionProps> = ({
  currentStepIndex,
  steps,
}) => {
  const { button } = steps[currentStepIndex] || {};

  // Container styles using CSS-in-JS approach
  const containerStyles = {
    padding: `var(--gutter) calc(var(--gutter) * 1.5)`,
    paddingBottom: `calc(var(--gutter) * 0.5)`,
  };

  return (
    <FlexContainer flexDirection="column">
      <div style={containerStyles}>
        <Stepper currentStepIndex={currentStepIndex} steps={steps} />
      </div>
      <FlexContainer
        flexDirection="column"
        horizontalPadding={16} // GUTTER value from theme.css
        verticalPadding={16}
        topBorderWidth={1}
        spacing={16}
      >
        <FlexContainer justifyItems="space-between" alignChildren="flex-start">
          <FlexContainer flexDirection="column">
            <Text $renderAs="Text-body/primary/primary" $color="text-100">
              Estimated Monthly Price*
            </Text>
            <Text
              as={"a"}
              href="/"
              $renderAs="Text-body/secondary/secondary"
              $color="primary-200"
            >
              View Details
            </Text>
          </FlexContainer>
          <Text $renderAs="Text-body/primary/primary" $color="primary">
            $99.99
          </Text>
        </FlexContainer>
        {button && (
          <Button
            $icon={button.icon}
            $size="large"
            $type="primary"
            $isFullWidth
            onClick={button.onClick}
            $isLoading={button.isLoading}
          >
            <Text $renderAs="button/large" $color="surface-0">
              {button.label}
            </Text>
          </Button>
        )}
      </FlexContainer>
      <SpacingDivider dividerHeight="0.5px" backgroundTone="surface-100" />
    </FlexContainer>
  );
};

export default StepsSection;
