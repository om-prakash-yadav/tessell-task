import React from "react";
import { AppIcons } from "../../../assets/icons";
import SpacingDivider from "../spacing-divider/spacing-divider";
import type { ButtonProps } from "./button-types";
import FlexContainer from "../flex-container/flex-container";
import { AppDefaultTheme } from "../../../theme/theme";

export const Button: React.FC<ButtonProps> = ({
  children,
  $icon,
  $type,
  $size,
  $iconSize = $size,
  $isFullWidth = false,
  $iconOnly = false,
  $isLoading = false,
  $isSelected = false,
  $marginBottom = 0,
  $trailingIcon,
  $isHorizontallyCentered = true,
  ...rest
}) => {
  const PrimaryIcon = AppIcons[$icon as keyof typeof AppIcons];
  const SecondaryIcon = $trailingIcon ? AppIcons[$trailingIcon as keyof typeof AppIcons] : null;

  // Configuration mapping for different button configurations
  const getButtonConfiguration = () => {
    const sizeConfig = {
      small: { 
        height: 32, 
        minWidth: 104, 
        padding: "0 12px", 
        radius: 4, 
        iconSize: 16, 
        iconMarginRight: 8,
        textClass: AppDefaultTheme.text.classes.bodySecondary,
      },
      regular: { 
        height: 36, 
        minWidth: 119, 
        padding: "0 12px", 
        radius: 4, 
        iconSize: 16, 
        iconMarginRight: 8,
        textClass: AppDefaultTheme.text.classes.bodyPrimary,
      },
      large: { 
        height: 40, 
        minWidth: 119, 
        padding: "0 12px", 
        radius: 4, 
        iconSize: 18, 
        iconMarginRight: 8,
        textClass: AppDefaultTheme.text.classes.bodyPrimary,
      },
    } as const;

    const variantConfig = {
      primary: {
        defaultBg: "primary-200",
        defaultColor: "inverse",
        selectedColor: "inverse",
        hoverBg: "primary-300",
        hoverColor: "inverse",
        focusOutlineColor: "border-focus",
        focusOutlineWidth: 4,
        disabledBg: "surface-secondary",
        disabledColor: "disabled",
      },
      tertiary: {
        defaultBg: "inverse",
        defaultColor: "subtler",
        selectedColor: "primary-200",
        hoverBg: "inverse",
        hoverColor: "primary-200",
        focusOutlineColor: "border-focus",
        focusOutlineWidth: 4,
        disabledBg: "inverse",
        disabledColor: "subtlest",
      },
    } as const;

    return {
      size: sizeConfig[$size as keyof typeof sizeConfig] || sizeConfig.regular,
      variant: variantConfig[$type as keyof typeof variantConfig] || variantConfig.primary,
    };
  };

  const configuration = getButtonConfiguration();
  const buttonDisabled = rest.disabled || $isLoading;

  // Compute final styles based on state
  const getActiveStyles = () => {
    const currentBgColor = $isSelected 
      ? configuration.variant.hoverBg 
      : configuration.variant.defaultBg;
    
    const currentTextColor = $isSelected 
      ? configuration.variant.selectedColor 
      : configuration.variant.defaultColor;

    return { currentBgColor, currentTextColor };
  };

  const { currentBgColor, currentTextColor } = getActiveStyles();

  return (
    <button
      className="enhanced-button-component"
      disabled={buttonDisabled}
      {...rest}
    >
      {$isLoading ? (
        <div className="loading-animation" />
      ) : (
        <>
          <PrimaryIcon 
            height={configuration.size.iconSize} 
            width={configuration.size.iconSize} 
          />
          {!$iconOnly && <SpacingDivider dividerWidth={configuration.size.iconMarginRight} />}
          {children}
        </>
      )}
      {SecondaryIcon && (
        <FlexContainer 
          alignChildren="center" 
          justifyItems="flex-end" 
          flexValue={1}
        >
          <SpacingDivider dividerWidth={configuration.size.iconMarginRight} />
          <SecondaryIcon 
            height={configuration.size.iconSize} 
            width={configuration.size.iconSize} 
          />
        </FlexContainer>
      )}
      
      <style jsx>{`
        .enhanced-button-component {
          display: inline-flex;
          align-items: center;
          justify-content: ${$isHorizontallyCentered ? "center" : "flex-start"};
          
          height: ${$iconOnly ? configuration.size.iconSize : configuration.size.height}px;
          width: ${$isFullWidth 
            ? "100%" 
            : $iconOnly 
            ? `${configuration.size.iconSize}px` 
            : "auto"};
          min-width: ${$iconOnly ? "0" : `${configuration.size.minWidth}px`};
          padding: ${$iconOnly ? "0" : configuration.size.padding};
          border: none;
          border-radius: ${configuration.size.radius}px;
          
          background-color: ${buttonDisabled 
            ? `var(--${configuration.variant.disabledBg})` 
            : `var(--${currentBgColor})`};
          color: ${buttonDisabled 
            ? `var(--${configuration.variant.disabledColor})` 
            : `var(--${currentTextColor})`};
          cursor: ${buttonDisabled ? "not-allowed" : "pointer"};
          pointer-events: ${buttonDisabled ? "none" : "auto"};
          
          margin-bottom: ${$marginBottom}px;
          
          transition: all 0.2s ease-in-out;
          box-sizing: border-box;
        }
        
        .enhanced-button-component:hover:not(:disabled) {
          background-color: var(--${configuration.variant.hoverBg});
          color: var(--${configuration.variant.hoverColor});
        }
        
        .enhanced-button-component:focus {
          outline: none;
          box-shadow: 0 0 0 ${configuration.variant.focusOutlineWidth}px var(--${configuration.variant.focusOutlineColor});
          border-radius: ${configuration.size.radius}px;
        }
        
        .enhanced-button-component:disabled {
          background-color: var(--${configuration.variant.disabledBg});
          color: var(--${configuration.variant.disabledColor});
          cursor: not-allowed;
          pointer-events: none;
        }
        
        .loading-animation {
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-right: 2px solid currentColor;
          border-radius: 50%;
          width: 1em;
          height: 1em;
          animation: spin-loader 0.5s linear infinite;
        }
        
        @keyframes spin-loader {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </button>
  );
};
