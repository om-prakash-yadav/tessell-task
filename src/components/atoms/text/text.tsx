import React from "react";
import type { TextProps } from "./text-types";
import { ThemeColors, ThemeText } from "../../../theme/theme";

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  (
    { 
      as: elementType = "span", 
      children, 
      $renderAs: textVariant, 
      $color: textColor, 
      $displayAs: displayMode = "block",
      $textAlign: textAlignment,
      $userSelect: userSelection = "text",
      $marginHorizontal: horizontalMargin,
      $marginVertical: verticalMargin,
      $textDecoration: textDecor,
      ...restProps 
    },
    ref
  ) => {
    const getColorValue = () => {
      if (textColor === "inherit") return "inherit";
      if (textColor && textColor in ThemeColors) return ThemeColors[textColor as keyof typeof ThemeColors];
      return ThemeColors.primary;
    };

    const getMarginValue = () => {
      return `${verticalMargin || "0"} ${horizontalMargin || "0"}`;
    };

    const getTextAlignment = () => {
      return displayMode === "inline" ? "inherit" : (textAlignment || "left");
    };

    const getTextClass = () => {
      if (textVariant && textVariant in ThemeText.classes) {
        return ThemeText.classes[textVariant as keyof typeof ThemeText.classes];
      }
      return '';
    };

    const Element = elementType;

    const dynamicStyles = {
      color: getColorValue(),
      display: displayMode,
      userSelect: userSelection,
      margin: getMarginValue(),
      textAlign: getTextAlignment(),
      textDecoration: textDecor || "none",
    };

    return (
      <Element 
        ref={ref}
        {...restProps} 
        className={getTextClass()}
        style={dynamicStyles}
      >
        {children}
      </Element>
    );
  }
);

Text.displayName = "Text";
