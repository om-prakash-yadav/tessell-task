import React, { useEffect, useRef, useState } from "react";
import { AppIcons } from "../../../assets/icons";
import InputField from "../../atoms/input-field/input-field";
import { DropdownItem } from "./dropdown-item";
import type { DropdownProps } from "./dropdown-types";
import { ThemeColors } from "../../../theme/theme";

export const Dropdown: React.FC<DropdownProps> = ({
  $label,
  $placeholder,
  $options,
  $value,
  $helpText,
  $size,
  $isDisabled = false,
  $trailingItem,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = $options.find((opt) => opt.value === $value);

  const handleOptionClick = (value: string | number) => {
    onChange(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getTopOffset = () => {
    switch ($size) {
      case "small":
        return $helpText ? "72px" : "36px";
      case "default":
        return $helpText ? "72px" : "55px";
      default:
        return "0";
    }
  };

  return (
    <div ref={dropdownRef} style={{
      position: "relative",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      pointerEvents: $isDisabled ? "none" : "auto",
      opacity: $isDisabled ? 0.6 : 1,
    }}>
      <InputField
        $label={$label}
        $size={$size}
        placeholder={$placeholder}
        value={selectedOption?.label || ""}
        readOnly
        $cursor="pointer"
        $helpText={$helpText}
        $isDisabled={$isDisabled}
        $trailingItem={
          $trailingItem ? (
            $trailingItem
          ) : (
            <div style={{
              display: "flex",
              transform: `rotate(${isOpen ? "180deg" : "0deg"})`,
              transition: "transform 0.2s ease",
              color: $isDisabled ? ThemeColors["disabled"] : ThemeColors["primary"],
            }}>
              <AppIcons.ChevronDown height={16} width={16} />
            </div>
          )
        }
        onClick={() => !$isDisabled && setIsOpen(!isOpen)}
      />

      {isOpen && (
        <ul style={{
          position: "absolute",
          backgroundColor: ThemeColors["inverse"],
          left: 0,
          right: 0,
          top: getTopOffset(),
          padding: 0,
          borderRadius: "4px",
          zIndex: 10,
          listStyle: "none",
          boxShadow: `0 0 8px ${ThemeColors["surface-200"]}`,
          margin: 0,
        }}>
          {$options.map((opt) => (
            <DropdownItem
              key={opt.value}
              label={opt.label}
              value={opt.value}
              $isSelected={opt.$isSelected}
              $leadingItem={opt.$leadingItem}
              $trailingItem={opt.$trailingItem}
              onClick={() => handleOptionClick(opt.value)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
