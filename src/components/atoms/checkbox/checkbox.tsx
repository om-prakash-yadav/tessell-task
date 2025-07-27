import React from "react";
import { AppIcons } from "../../../assets/icons";
import SpacingDivider from "../spacing-divider/spacing-divider";
import { Text } from "../text/text";
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
  // Define sizes based on variants
  const sizeConfig = {
    small: { size: 14, checkIconSize: 10 },
    default: { size: 16, checkIconSize: 12 },
    large: { size: 20, checkIconSize: 16 }
  };

  const currentSize = sizeConfig[$size as keyof typeof sizeConfig] || sizeConfig.default;

  return (
    <>
      <label className="checkbox-label">
        <input
          type="checkbox"
          className="checkbox-input"
          disabled={$disabled}
          checked={$checked}
          {...props}
        />

        <span className="checkbox-box">
          <span className={`checkbox-icon check ${$checked && !$indeterminate ? 'visible' : ''}`}>
            <AppIcons.CheckboxCheck />
          </span>
          <span className={`checkbox-icon minus ${$indeterminate ? 'visible' : ''}`}>
            <AppIcons.CheckboxMinus />
          </span>
        </span>
        
        <SpacingDivider horizontalSizeMultiplier={0.5} />
        
        {$label && <Text $renderAs="Text-body/primary/primary">{$label}</Text>}
      </label>

      <style jsx>{`
        .checkbox-label {
          display: inline-flex;
          align-items: center;
          cursor: ${$disabled ? 'not-allowed' : 'pointer'};
        }

        .checkbox-input {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          width: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
        }

        .checkbox-box {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          width: ${currentSize.size}px;
          height: ${currentSize.size}px;
          border-width: 1px;
          border-style: solid;
          border-radius: 4px;
          transition: all 0.2s;
          position: relative;
          background-color: ${$checked || $indeterminate ? ThemeColors['primary-200'] : ThemeColors['surface-0']};
          border-color: ${$checked || $indeterminate ? ThemeColors['primary-200'] : ThemeColors['surface-300']};
          color: ${$checked || $indeterminate ? ThemeColors['inverse'] : 'inherit'};
        }

        .checkbox-box:hover {
          background-color: ${!$disabled ? (
            $checked || $indeterminate ? ThemeColors['primary-300'] : ThemeColors['surface-50']
          ) : ($checked || $indeterminate ? ThemeColors['surface-secondary'] : ThemeColors['surface-secondary'])};
          border-color: ${!$disabled ? (
            $checked || $indeterminate ? ThemeColors['primary-300'] : ThemeColors['surface-400']
          ) : ThemeColors['surface-300']};
        }

        .checkbox-input:active + .checkbox-box {
          background-color: ${!$disabled ? (
            $checked || $indeterminate ? ThemeColors['primary-400'] : ThemeColors['surface-100']
          ) : ($checked || $indeterminate ? ThemeColors['surface-secondary'] : ThemeColors['surface-secondary'])};
          border-color: ${!$disabled ? (
            $checked || $indeterminate ? ThemeColors['primary-400'] : ThemeColors['surface-400']
          ) : ThemeColors['surface-300']};
          outline-width: ${!$disabled ? '4px' : '0'};
          outline-style: solid;
          outline-color: ${!$disabled ? ThemeColors['border-focus'] : 'transparent'};
        }

        .checkbox-label:hover .checkbox-box {
          background-color: ${!$disabled ? (
            $checked || $indeterminate ? ThemeColors['primary-300'] : ThemeColors['surface-50']
          ) : ($checked || $indeterminate ? ThemeColors['surface-secondary'] : ThemeColors['surface-secondary'])};
          border-color: ${!$disabled ? (
            $checked || $indeterminate ? ThemeColors['primary-300'] : ThemeColors['surface-400']
          ) : ThemeColors['surface-300']};
        }

        .checkbox-box[disabled] {
          background-color: ${ThemeColors['surface-secondary']};
          border-color: ${ThemeColors['surface-300']};
          color: ${ThemeColors['disabled']};
        }

        .checkbox-box :global(svg) {
          width: ${currentSize.checkIconSize}px;
          height: ${currentSize.checkIconSize}px;
        }

        .checkbox-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.2s;
        }

        .checkbox-icon.visible {
          opacity: 1;
        }
      `}</style>
    </>
  );
};
