import React from "react";
import SpacingDivider from "../../atoms/spacing-divider/spacing-divider";
import { Text } from "../../atoms/text/text";
import type { RadioProps } from "./radio-types";
import { ThemeColors, AppDefaultTheme } from "../../../theme/theme";

export const Radio: React.FC<RadioProps> = ({
  $label,
  $variant = "primary",
  $size = "regular",
  $checked,
  disabled,
  ...props
}) => {
  const themeConfig = AppDefaultTheme.radio;
  const sizeConfig = themeConfig.sizes[$size];
  const variantConfig = themeConfig.variants[$variant];
  
  // Get the appropriate states based on checked status
  const currentStates = $checked ? variantConfig.selected : variantConfig.unselected;

  // Hidden radio input styles
  const hiddenRadioStyles = {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    width: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute" as const,
  };

  // Label container styles
  const labelStyles = {
    display: "inline-flex",
    alignItems: "center",
    cursor: disabled ? "not-allowed" : "pointer",
  };

  // Custom radio styles
  const customRadioStyles = {
    position: "relative" as const,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: `${sizeConfig.size}px`,
    height: `${sizeConfig.size}px`,
    borderRadius: "50%",
    border: `1px solid ${disabled 
      ? ThemeColors[currentStates.disabled.borderColor as keyof typeof ThemeColors]
      : ThemeColors[currentStates.default.borderColor as keyof typeof ThemeColors]}`,
    background: disabled
      ? ThemeColors[currentStates.disabled.backgroundColor as keyof typeof ThemeColors]
      : ThemeColors[currentStates.default.backgroundColor as keyof typeof ThemeColors],
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 0.2s ease",
  };

  // Dot styles for checked state - only show if checked
  const dotStyles = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: `${sizeConfig.dotSize}px`,
    height: `${sizeConfig.dotSize}px`,
    borderRadius: "50%",
    background: $checked 
      ? (disabled 
          ? ThemeColors.disabled 
          : ThemeColors[variantConfig.selected.default.dotColor as keyof typeof ThemeColors])
      : "transparent",
    display: $checked ? "block" : "none",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!disabled) {
      e.currentTarget.style.borderColor = ThemeColors[currentStates.hover.borderColor as keyof typeof ThemeColors];
      e.currentTarget.style.background = ThemeColors[currentStates.hover.backgroundColor as keyof typeof ThemeColors];
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!disabled) {
      e.currentTarget.style.borderColor = ThemeColors[currentStates.default.borderColor as keyof typeof ThemeColors];
      e.currentTarget.style.background = ThemeColors[currentStates.default.backgroundColor as keyof typeof ThemeColors];
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      const customRadio = e.currentTarget.nextElementSibling as HTMLElement;
      if (customRadio) {
        customRadio.style.outline = `4px solid ${ThemeColors["border-focus"]}`;
      }
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const customRadio = e.currentTarget.nextElementSibling as HTMLElement;
    if (customRadio) {
      customRadio.style.outline = "none";
    }
  };

  return (
    <label style={labelStyles}>
      <input
        type="radio"
        checked={$checked}
        onChange={props.onChange}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={hiddenRadioStyles}
        {...props}
      />
      <span
        style={customRadioStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {$checked && <div style={dotStyles} />}
      </span>
      <SpacingDivider horizontalSizeMultiplier={0.5} />
      <Text $renderAs="Text-body/primary/primary">{$label}</Text>
    </label>
  );
};
