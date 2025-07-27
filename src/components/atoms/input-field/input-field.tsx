import { forwardRef, useState, type FocusEvent } from "react";
import SpacingDivider from "../spacing-divider/spacing-divider";
import { Text } from "../text/text";
import FlexContainer from "../flex-container/flex-container";
import type { InputFieldProps } from "./input-field-types";
import { ThemeColors, ThemeTextInput, ThemeSpacing } from "../../../theme/theme";

const InputField = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputFieldProps>((props, ref) => {
  const {
    $label,
    $size = "default",
    $helpText,
    $leadingItem,
    $trailingItem,
    $isDisabled = false,
    $maxWidth,
    $marginBottomX,
    $multiline = false,
    $variant = "primary",
    $cursor = "text",
    ...rest
  } = props;
  const [focused, setFocused] = useState(false);

  const getInputClassName = () => {
    const baseClass = ThemeTextInput.variants[$variant].className;
    const sizeClass = ThemeTextInput.variants[$variant].sizes[$size];
    return `${baseClass} ${sizeClass}`;
  };

  const getInputHeight = () => {
    return $size === "small" ? "32px" : "36px";
  };

  const getPadding = () => {
    let paddingLeft = $size === "small" ? 8 : 12;
    let paddingRight = $size === "small" ? 8 : 12;

    if ($leadingItem) {
      paddingLeft += 28;
    }
    if ($trailingItem) {
      paddingRight += 20;
    }

    return { paddingLeft, paddingRight };
  };

  const { paddingLeft, paddingRight } = getPadding();

  return (
    <FlexContainer
      flexDirection="column"
      containerWidth="100%"
      bottomMarginMultiplier={$marginBottomX || 0}
      style={{ maxWidth: $maxWidth || "100%" }}
    >
      {$label && (
        <Text $renderAs="headingForm" $userSelect="none">
          {$label}
        </Text>
      )}
      <SpacingDivider dividerHeight={8} />

      <div className="input-field-wrapper">
        {$multiline ? (
          <textarea
            {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            disabled={$isDisabled}
            className={`input-field-base ${getInputClassName()}`}
            onFocus={(e: FocusEvent<HTMLTextAreaElement, Element>) => {
              setFocused(true);
              (rest.onFocus as any)?.(e);
            }}
            onBlur={(e: FocusEvent<HTMLTextAreaElement, Element>) => {
              setFocused(false);
              (rest.onBlur as any)?.(e);
            }}
          />
        ) : (
          <input
            {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
            ref={ref as React.Ref<HTMLInputElement>}
            disabled={$isDisabled}
            className={`input-field-base ${getInputClassName()}`}
            onFocus={(e: FocusEvent<HTMLInputElement, Element>) => {
              setFocused(true);
              (rest.onFocus as any)?.(e);
            }}
            onBlur={(e: FocusEvent<HTMLInputElement, Element>) => {
              setFocused(false);
              (rest.onBlur as any)?.(e);
            }}
          />
        )}

        {$leadingItem && (
          <div className="leading-item">
            {$leadingItem}
          </div>
        )}

        {$trailingItem && (
          <div className="trailing-item">
            {$trailingItem}
          </div>
        )}

        <style jsx>{`
          .input-field-wrapper {
            position: relative;
            width: 100%;
            height: ${$multiline ? "auto" : getInputHeight()};
          }

          .input-field-base {
            width: 100%;
            box-sizing: border-box;
            cursor: ${$cursor};
            ${$multiline ? `
              padding: 8px 12px;
              resize: none;
              height: 92px;
            ` : `
              padding-left: ${paddingLeft}px;
              padding-right: ${paddingRight}px;
            `}
          }

          .input-field-base:disabled {
            cursor: not-allowed;
          }

          .leading-item {
            position: absolute;
            top: 0;
            left: ${$size === "small" ? "8px" : "12px"};
            bottom: 0;
            width: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .trailing-item {
            position: absolute;
            top: 0;
            right: ${$size === "small" ? "8px" : "12px"};
            bottom: 0;
            width: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>

      {$helpText && (
        <>
          <SpacingDivider dividerHeight={8} />
          <Text $renderAs="headingForm" $color={$helpText.color}>
            {$helpText.message}
          </Text>
        </>
      )}
    </FlexContainer>
  );
});

InputField.displayName = "InputField";

export default InputField;
