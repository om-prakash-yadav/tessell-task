import React from "react";
import type { FlexContainerProps } from "./flex-container-types";
import { ThemeColors, ThemeSpacing } from "../../../theme/theme";

const FlexContainer: React.FC<FlexContainerProps> = ({ 
  children, 
  spacing = 0,
  horizontalSpacing = 0,
  bottomMarginMultiplier = 0,
  flexValue = "none",
  containerHeight = "auto",
  containerWidth = "auto",
  horizontalPadding = 0,
  verticalPadding = 0,
  flexDirection = "row",
  justifyItems = "flex-start",
  alignChildren = "stretch",
  flexWrap = "nowrap",
  backgroundColor = "opacity-transparent",
  cornerRadius = 0,
  topBorderWidth = 0,
  ...restProps 
}) => {
  const getGapValue = () => {
    if (spacing !== 0) {
      return `${spacing}px`;
    }
    if (horizontalSpacing !== 0) {
      return `calc(${horizontalSpacing} * ${ThemeSpacing.variables.GAP})`;
    }
    return "0px";
  };

  const getMarginBottom = () => {
    return bottomMarginMultiplier ? `calc(${bottomMarginMultiplier} * ${ThemeSpacing.variables.GUTTER})` : "0px";
  };

  const getHeightValue = () => {
    return typeof containerHeight === "number" ? `${containerHeight}px` : containerHeight;
  };

  const getWidthValue = () => {
    return typeof containerWidth === "number" ? `${containerWidth}px` : containerWidth;
  };

  return (
    <div {...restProps} className="flex-container">
      {children}
      <style jsx>{`
        .flex-container {
          display: flex;
          background-color: ${ThemeColors[backgroundColor]};
          flex-direction: ${flexDirection};
          justify-content: ${justifyItems};
          align-items: ${alignChildren};
          flex-wrap: ${flexWrap};
          flex: ${flexValue};
          border-radius: ${cornerRadius}px;
          height: ${getHeightValue()};
          width: ${getWidthValue()};
          padding: ${verticalPadding}px ${horizontalPadding}px;
          border-top: ${topBorderWidth}px solid ${ThemeColors["surface-100"]};
          gap: ${getGapValue()};
          margin-bottom: ${getMarginBottom()};
        }
      `}</style>
    </div>
  );
};

export default FlexContainer;
