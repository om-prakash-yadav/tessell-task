import React, { useState } from "react";
import type { DropdownItemProps } from "./dropdown-types";
import FlexContainer from "../../atoms/flex-container/flex-container";
import { Text } from "../../atoms/text/text";
import { ThemeColors, ThemeSpacing } from "../../../theme/theme";

export const DropdownItem: React.FC<DropdownItemProps> = ({
  label,
  $isSelected = false,
  $leadingItem,
  $trailingItem,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTextColor = () => {
    if (isHovered) {
      return $isSelected ? ThemeColors["primary-300"] : ThemeColors["primary-200"];
    }
    return $isSelected ? ThemeColors["primary-200"] : ThemeColors["primary"];
  };

  const getTextColorKey = () => {
    if (isHovered) {
      return $isSelected ? "primary-300" : "primary-200";
    }
    return $isSelected ? "primary-200" : "primary";
  };

  return (
    <li 
      style={{ 
        listStyle: "none",
        cursor: "pointer",
        backgroundColor: isHovered ? ThemeColors["secondary-0"] : "transparent",
        transition: "color 0.2s ease, background-color 0.2s ease",
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FlexContainer
        alignChildren="center"
        justifyItems="space-between"
        containerHeight="36px"
        horizontalPadding={8}
        backgroundColor="opacity-transparent"
        style={{
          color: getTextColor(),
        }}
      >
        <FlexContainer alignChildren="center" justifyItems="flex-start" flexValue="1">
          {$leadingItem && (
            <div style={{
              marginRight: `calc(${ThemeSpacing.variables.GUTTER} * 0.5)`,
              display: "flex",
              alignItems: "center",
              color: "inherit",
            }}>
              <div style={{ 
                color: getTextColor(),
                display: "flex",
                alignItems: "center"
              }}>
                {$leadingItem}
              </div>
            </div>
          )}
          <Text 
            $renderAs="bodyPrimary" 
            $color={getTextColorKey()}
          >
            {label}
          </Text>
        </FlexContainer>
        {$trailingItem && (
          <div style={{
            marginLeft: `calc(${ThemeSpacing.variables.GUTTER} * 0.5)`,
            display: "flex",
            alignItems: "center",
            color: "inherit",
          }}>
            <div style={{ 
              color: getTextColor(),
              display: "flex",
              alignItems: "center"
            }}>
              {$trailingItem}
            </div>
          </div>
        )}
      </FlexContainer>
    </li>
  );
};
