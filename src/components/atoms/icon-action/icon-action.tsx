import React from "react";
import { AppIcons } from "../../../assets/icons";
import type { IconActionProps } from "./icon-action-types";
import { ThemeColors, AppDefaultTheme } from "../../../theme/theme";

const IconAction: React.FC<IconActionProps> = (props) => {
  const { 
    iconKey, 
    iconTint, 
    spacing = 0, 
    noBorder = true, 
    buttonStyle, 
    buttonScale, 
    isCircular = false, 
    accessibilityLabel,
    disabled,
    ...restProps 
  } = props;
  
  const IconComponent = AppIcons[iconKey];
  const themeConfig = AppDefaultTheme.iconButton;
  const variantData = themeConfig.variants[buttonStyle];
  const scaleData = themeConfig.sizes[buttonScale];
  
  const getIconTint = () => {
    if (disabled) {
      return ThemeColors[variantData.disabled.iconColor];
    }
    if (iconTint) {
      return ThemeColors[iconTint];
    }
    return ThemeColors[variantData.default.iconColor];
  };

  const getHoverTint = () => {
    return disabled ? ThemeColors[variantData.disabled.iconColor] : ThemeColors[variantData.hover.iconColor];
  };

  const getActiveTint = () => {
    return disabled ? ThemeColors[variantData.disabled.iconColor] : ThemeColors[variantData.active.iconColor];
  };

  const getBorderRadius = () => {
    return isCircular ? "50%" : `${scaleData.buttonRadius}px`;
  };

  const getBorderStyle = () => {
    return noBorder ? "none" : `1px solid ${ThemeColors["border-icon-button"]}`;
  };

  return (
    <button 
      aria-label={accessibilityLabel} 
      disabled={disabled}
      {...restProps} 
      className="icon-action-button"
    >
      <span className="icon-container">
        <IconComponent />
      </span>
      <style jsx>{`
        .icon-action-button {
          height: ${scaleData.iconSize}px;
          width: ${scaleData.iconSize}px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: ${getBorderRadius()};
          background: transparent;
          transition: color 0.2s ease;
          border: ${getBorderStyle()};
          padding: 0;
          margin: ${spacing}px;
          color: ${getIconTint()};
          cursor: ${disabled ? "not-allowed" : "pointer"};
          pointer-events: ${disabled ? "none" : "auto"};
        }

        .icon-action-button:hover:not(:disabled) {
          color: ${getHoverTint()};
        }

        .icon-action-button:focus:not(:disabled) {
          outline: ${variantData.focus.outlineWidth}px solid ${ThemeColors[variantData.focus.outlineColor]};
          outline-offset: 2px;
          animation-delay: 70ms;
          animation-timing-function: cubic-bezier(0.3, 0, 0.2, 1);
          animation-duration: 70ms;
        }

        .icon-action-button:active:not(:disabled) {
          color: ${getActiveTint()};
        }

        .icon-container svg {
          height: ${scaleData.iconSize}px;
          width: ${scaleData.iconSize}px;
          display: block;
        }
      `}</style>
    </button>
  );
};

// Export both as default and named export for compatibility
export default IconAction;
export { IconAction };
