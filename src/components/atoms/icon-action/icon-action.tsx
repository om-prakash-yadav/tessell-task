import React from "react";
import { AppIcons } from "../../../resources/icons";
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

  const dynamicStyles = {
    height: `${scaleData.iconSize}px`,
    width: `${scaleData.iconSize}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: getBorderRadius(),
    background: 'transparent',
    transition: 'color 0.2s ease',
    border: getBorderStyle(),
    padding: 0,
    margin: `${spacing}px`,
    color: getIconTint(),
    cursor: disabled ? "not-allowed" : "pointer",
    pointerEvents: disabled ? "none" as const : "auto" as const,
  };

  const iconStyles = {
    height: `${scaleData.iconSize}px`,
    width: `${scaleData.iconSize}px`,
    display: 'block',
  };

  return (
    <button 
      aria-label={accessibilityLabel} 
      disabled={disabled}
      {...restProps} 
      className="icon-action-button"
      style={dynamicStyles}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.color = getHoverTint();
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.color = getIconTint();
        }
      }}
      onMouseDown={(e) => {
        if (!disabled) {
          e.currentTarget.style.color = getActiveTint();
        }
      }}
      onMouseUp={(e) => {
        if (!disabled) {
          e.currentTarget.style.color = getHoverTint();
        }
      }}
      onFocus={(e) => {
        if (!disabled) {
          e.currentTarget.style.outline = `${variantData.focus.outlineWidth}px solid ${ThemeColors[variantData.focus.outlineColor]}`;
          e.currentTarget.style.outlineOffset = '2px';
        }
      }}
      onBlur={(e) => {
        if (!disabled) {
          e.currentTarget.style.outline = 'none';
        }
      }}
    >
      <span className="icon-container">
        <IconComponent style={iconStyles} />
      </span>
    </button>
  );
};

// Export both as default and named export for compatibility
export default IconAction;
export { IconAction };
