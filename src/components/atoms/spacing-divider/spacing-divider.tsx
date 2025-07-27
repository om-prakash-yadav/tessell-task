import React from "react";
import type { SpacingDividerProps } from "./spacing-divider-types";
import { ThemeColors, ThemeSpacing } from "../../../theme/theme";

const SpacingDivider: React.FC<SpacingDividerProps> = ({
  backgroundTone = "opacity-transparent",
  verticalSizeMultiplier = 0,
  horizontalSizeMultiplier = 0,
  dividerHeight,
  dividerWidth,
  spacing,
  ...restProps
}) => {
  const getElementHeight = () => {
    if (typeof dividerHeight === "number") return `${dividerHeight}px`;
    if (typeof dividerHeight === "string") return dividerHeight;
    return `calc(${verticalSizeMultiplier} * ${ThemeSpacing.variables.GUTTER})`;
  };

  const getElementWidth = () => {
    if (typeof dividerWidth === "number") return `${dividerWidth}px`;
    if (typeof dividerWidth === "string") return dividerWidth;
    return `calc(${horizontalSizeMultiplier} * ${ThemeSpacing.variables.GUTTER})`;
  };

  return (
    <div aria-hidden="true" {...restProps} className="spacing-divider">
      <style jsx>{`
        .spacing-divider {
          background-color: ${ThemeColors[backgroundTone]};
          width: ${getElementWidth()};
          height: ${getElementHeight()};
          margin: ${spacing || '0'};
        }
      `}</style>
    </div>
  );
};

export default SpacingDivider;
