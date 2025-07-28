import React from "react";
import { AppIcons } from "../../../assets/icons";
import SpacingDivider from "../spacing-divider/spacing-divider";
import { Text } from "../text/text";
import FlexContainer from "../flex-container/flex-container";
import type { CheckboxProps } from "./checkbox-types";
import { ThemeColors } from "../../../theme/theme";

export const Checkbox: React.FC<CheckboxProps> = ({
  $label,
  $variant = "primary",
  $size = "default",
  $disabled,
  $checked,
  $indeterminate,
  ...props
}) => {
  // Size configurations
  const sizeConfig = {
    small: { size: 14, checkIconSize: 8 },
    default: { size: 16, checkIconSize: 10 },
    large: { size: 20, checkIconSize: 14 }
  } as const;

  // Variant configurations - using keyof ThemeColors for type safety
  const variantConfig = {
    primary: {
      unchecked: {
        default: { backgroundColor: 'surface-0' as keyof typeof ThemeColors, borderColor: 'surface-300' as keyof typeof ThemeColors, iconColor: null },
        hover: { backgroundColor: 'surface-50' as keyof typeof ThemeColors, borderColor: 'primary-200' as keyof typeof ThemeColors, iconColor: null },
        active: { backgroundColor: 'surface-100' as keyof typeof ThemeColors, borderColor: 'primary-300' as keyof typeof ThemeColors, iconColor: null },
        disabled: { backgroundColor: 'surface-secondary' as keyof typeof ThemeColors, borderColor: 'surface-300' as keyof typeof ThemeColors, iconColor: null }
      },
      active: {
        default: { backgroundColor: 'primary-200' as keyof typeof ThemeColors, borderColor: 'primary-200' as keyof typeof ThemeColors, iconColor: 'inverse' as keyof typeof ThemeColors },
        hover: { backgroundColor: 'primary-300' as keyof typeof ThemeColors, borderColor: 'primary-300' as keyof typeof ThemeColors, iconColor: 'inverse' as keyof typeof ThemeColors },
        active: { backgroundColor: 'primary-400' as keyof typeof ThemeColors, borderColor: 'primary-400' as keyof typeof ThemeColors, iconColor: 'inverse' as keyof typeof ThemeColors },
        disabled: { backgroundColor: 'surface-secondary' as keyof typeof ThemeColors, borderColor: 'surface-300' as keyof typeof ThemeColors, iconColor: 'disabled' as keyof typeof ThemeColors }
      },
      intermediate: {
        default: { backgroundColor: 'primary-200' as keyof typeof ThemeColors, borderColor: 'primary-200' as keyof typeof ThemeColors, iconColor: 'inverse' as keyof typeof ThemeColors },
        hover: { backgroundColor: 'primary-300' as keyof typeof ThemeColors, borderColor: 'primary-300' as keyof typeof ThemeColors, iconColor: 'inverse' as keyof typeof ThemeColors },
        active: { backgroundColor: 'primary-400' as keyof typeof ThemeColors, borderColor: 'primary-400' as keyof typeof ThemeColors, iconColor: 'inverse' as keyof typeof ThemeColors },
        disabled: { backgroundColor: 'surface-secondary' as keyof typeof ThemeColors, borderColor: 'surface-300' as keyof typeof ThemeColors, iconColor: 'disabled' as keyof typeof ThemeColors }
      }
    }
  } as const;

  const currentSize = sizeConfig[$size as keyof typeof sizeConfig] || sizeConfig.default;
  const currentVariant = variantConfig[$variant as keyof typeof variantConfig] || variantConfig.primary;

  let variantStateKey: keyof typeof currentVariant = "unchecked";
  if ($indeterminate) {
    variantStateKey = "intermediate";
  } else if ($checked) {
    variantStateKey = "active";
  }

  let interactionKey: keyof typeof currentVariant.unchecked = "default";
  if ($disabled) {
    interactionKey = "disabled";
  }

  const currentStyle = currentVariant[variantStateKey][interactionKey];

  // Helper function for color handling
  const getColorValue = (iconColor: keyof typeof ThemeColors | null) => {
    return iconColor ? ThemeColors[iconColor] : 'inherit';
  };

  // Hidden input styles
  const hiddenInputStyles: React.CSSProperties = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    width: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute'
  };

  // Label styles
  const labelStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: $disabled ? 'not-allowed' : 'pointer'
  };

  // Checkbox box styles
  const boxStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: '1px',
    borderStyle: 'solid',
    transition: 'all 0.2s',
    width: `${currentSize.size}px`,
    height: `${currentSize.size}px`,
    borderRadius: '4px',
    backgroundColor: ThemeColors[currentStyle.backgroundColor],
    borderColor: ThemeColors[currentStyle.borderColor],
    color: getColorValue(currentStyle.iconColor),
    position: 'relative'
  };

  // Icon styles
  const iconStyles: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: `${currentSize.checkIconSize}px`,
    height: `${currentSize.checkIconSize}px`,
    pointerEvents: 'none'
  };

  const checkIconStyles: React.CSSProperties = {
    ...iconStyles,
    opacity: $checked && !$indeterminate ? 1 : 0,
    transition: 'opacity 0.2s ease'
  };

  const minusIconStyles: React.CSSProperties = {
    ...iconStyles,
    opacity: $indeterminate ? 1 : 0,
    transition: 'opacity 0.2s ease'
  };

  // Hover and active states
  const hoverStyles: React.CSSProperties = !$disabled ? {
    backgroundColor: ThemeColors[currentVariant[variantStateKey].hover.backgroundColor],
    borderColor: ThemeColors[currentVariant[variantStateKey].hover.borderColor],
    color: getColorValue(currentVariant[variantStateKey].hover.iconColor)
  } : {};

  const activeStyles: React.CSSProperties = !$disabled ? {
    backgroundColor: ThemeColors[currentVariant[variantStateKey].active.backgroundColor],
    borderColor: ThemeColors[currentVariant[variantStateKey].active.borderColor],
    color: getColorValue(currentVariant[variantStateKey].active.iconColor),
    outline: `4px solid ${ThemeColors["border-focus"]}`
  } : {};

  return (
    <FlexContainer alignChildren="center" horizontalSpacing={0}>
      <label style={labelStyles}>
        <input
          type="checkbox"
          disabled={$disabled}
          checked={$checked}
          style={hiddenInputStyles}
          {...props}
        />

        <span 
          style={boxStyles}
          onMouseEnter={(e) => {
            if (!$disabled) {
              Object.assign(e.currentTarget.style, hoverStyles);
            }
          }}
          onMouseLeave={(e) => {
            if (!$disabled) {
              Object.assign(e.currentTarget.style, boxStyles);
            }
          }}
          onMouseDown={(e) => {
            if (!$disabled) {
              Object.assign(e.currentTarget.style, { ...boxStyles, ...activeStyles });
            }
          }}
          onMouseUp={(e) => {
            if (!$disabled) {
              Object.assign(e.currentTarget.style, hoverStyles);
            }
          }}
        >
            <AppIcons.CheckboxCheck  style={checkIconStyles} />
            <AppIcons.CheckboxMinus style={minusIconStyles} />
        </span>
        
        {$label && (
          <>
            <SpacingDivider horizontalSizeMultiplier={0.5} />
            <Text $renderAs="Text-body/primary/primary">{$label}</Text>
          </>
        )}
      </label>
    </FlexContainer>
  );
};
