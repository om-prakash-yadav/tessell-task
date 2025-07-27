import React, { useEffect, useRef, useState } from "react";
import type { StepperProps, StepperItem } from "./stepper.types";
import { Text } from "../../atoms/text/text";
import SpacingDivider from "../../atoms/spacing-divider/spacing-divider";
import FlexContainer from "../../atoms/flex-container/flex-container";
import { ThemeColors } from "../../../theme/theme";

const Stepper: React.FC<StepperProps> = ({
  onStepChange,
  steps,
  currentStepIndex,
}) => {
  const [heights, setHeights] = useState<number[]>([]);

  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const newHeights = refs.current.map((ref) => ref?.offsetHeight || 0);
    setHeights(newHeights);
  }, [steps]);

  return (
    <FlexContainer flexDirection="column">
      {steps.map((step: StepperItem, index: number) => {
        const isLast = index === steps.length - 1;
        const isFirst = index === 0;
        const contentHeight = heights[index] || 0;

        // Mark step as completed if it's before or equal to current step
        const isCompleted = index <= currentStepIndex;

        // The line below should be completed if the next step is also completed
        const isLineCompleted = index + 1 <= currentStepIndex;

        return (
          <div
            key={index}
            ref={(el) => {
              refs.current[index] = el;
            }}
          >
            <div
              className={`step-item ${onStepChange ? 'clickable' : ''}`}
              onClick={() => onStepChange?.(index)}
            >
              <div
                className={`dot ${isCompleted ? 'completed' : ''} ${isFirst ? 'first' : ''} ${isLast ? 'last' : ''} ${isLineCompleted ? 'line-completed' : ''}`}
              />
              <Text
                $renderAs="bodySecondary"
                $color={isCompleted ? "primary-200" : "primary"}
              >
                {step.label}
              </Text>
            </div>
            {step.children && (
              <div className="step-content">
                {step.children}
              </div>
            )}
            <SpacingDivider dividerHeight={16} />

            <style jsx>{`
              .step-item {
                display: flex;
                align-items: flex-start;
                cursor: ${onStepChange ? 'pointer' : 'default'};
                position: relative;
              }

              .dot {
                position: relative;
                width: 5px;
                height: 5px;
                border-radius: 3px;
                background-color: ${ThemeColors["surface-200"]};
                margin-right: 12px;
                margin-top: 8px;
                box-sizing: border-box;
              }

              .dot.completed {
                background-color: ${ThemeColors["primary-200"]};
              }

              .dot::after {
                content: "";
                position: absolute;
                top: ${isFirst ? '7px' : '100%'};
                border-top-left-radius: ${isFirst ? '1px' : '0'};
                border-top-right-radius: ${isFirst ? '1px' : '0'};
                left: 50%;
                width: 1px;
                transform: translateX(-50%);
                height: ${isLast ? '0px' : `${contentHeight - 2.5}px`};
                background-color: ${isLineCompleted ? ThemeColors["primary-200"] : ThemeColors["surface-200"]};
                display: ${isLast ? 'none' : 'block'};
              }

              .step-content {
                margin-left: 17px;
                margin-top: 8px;
              }
            `}</style>
          </div>
        );
      })}
    </FlexContainer>
  );
};

export default Stepper;
