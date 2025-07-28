import React from "react";
import type { TableRowProps } from "./table-types";
import { Checkbox } from "../../atoms/checkbox/checkbox";
import FlexContainer from "../../atoms/flex-container/flex-container";
import { ThemeColors } from "../../../theme/theme";

export const TableRow: React.FC<TableRowProps> = ({
  isSelected,
  items,
  onSelect,
  isLastRow = false,
}) => {
  const rowStyles = {
    borderBottom: isLastRow ? "none" : `1px solid ${ThemeColors["surface-200"]}`,
  };

  const cellStyles = {
    padding: "12px",
  };

  return (
    <tr style={rowStyles}>
      <td style={cellStyles}>
        <Checkbox $checked={isSelected} onChange={onSelect} />
      </td>
      {items.map((item, index) => (
        <td key={index} style={cellStyles}>
          <FlexContainer alignChildren="center" justifyItems={item.justifyContent}>
            {item.item}
          </FlexContainer>
        </td>
      ))}
    </tr>
  );
};
