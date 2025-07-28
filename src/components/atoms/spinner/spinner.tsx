import React from "react";
import type { SpinnerProps } from "./spinner-types";
import { ThemeColors } from "../../../theme/theme";

const DEFAULT_SPINNER_SIZE = 50;
const DEFAULT_COLOR_VARIANT = "primary-200";
const BORDER_THICKNESS = 8;

const Spinner: React.FC<SpinnerProps> = ({ 
  size = DEFAULT_SPINNER_SIZE, 
  variant = DEFAULT_COLOR_VARIANT 
}) => {
  const spinnerDimensions = `${size}px`;
  const colorValue = ThemeColors[variant];
  
  const createSpinnerStyles = (): React.CSSProperties => ({
    display: "inline-block",
    width: spinnerDimensions,
    height: spinnerDimensions,
    aspectRatio: "1",
    borderRadius: "50%",
    border: `${BORDER_THICKNESS}px solid ${colorValue}`,
    borderColor: `${colorValue} transparent`,
    animation: "spinner-rotation 1s infinite linear",
  });

  const animationKeyframes = `
    @keyframes spinner-rotation {
      to {
        transform: rotate(0.5turn);
      }
    }
  `;

  return (
    <>
      <style jsx>{animationKeyframes}</style>
      <div style={createSpinnerStyles()} className="spinner" />
    </>
  );
};

export default Spinner;
