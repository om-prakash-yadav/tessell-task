import React from "react";
import { AppIcons, type AppIconKeys } from "../../../resources/icons";
import { ThemeColors } from "../../../theme/theme";

type TableButtonProps = {
  $icon?: AppIconKeys;
  $label?: string;
  $color?: keyof typeof ThemeColors;
  $onClick?: () => void;
  $disabled?: boolean;
};

const TableButton: React.FC<TableButtonProps> = (props) => {
  const { $icon, $label, $onClick, $disabled, $color } = props;
  const Icon = $icon ? AppIcons[$icon] : null;
  
  const buttonStyles: React.CSSProperties = {
    backgroundColor: "transparent",
    color: ThemeColors[$color || "primary-200"],
    border: "none",
    cursor: $disabled ? "not-allowed" : "pointer",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    height: "32px",
    fontSize: "1rem",
    borderRadius: "4px",
    opacity: $disabled ? 0.5 : 1,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!$disabled) {
      e.currentTarget.style.backgroundColor = ThemeColors["secondary-0"];
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!$disabled) {
      e.currentTarget.style.backgroundColor = "transparent";
    }
  };

  return (
    <button
      style={buttonStyles}
      onClick={$onClick}
      disabled={$disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {Icon && <Icon />}
      {$label}
    </button>
  );
};

export default TableButton;
