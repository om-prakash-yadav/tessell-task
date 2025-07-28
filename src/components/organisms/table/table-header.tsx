import React from "react";
import { Checkbox } from "../../atoms/checkbox/checkbox";
import { AppIcons } from "../../../resources/icons";
import { Text } from "../../atoms/text/text";
import FlexContainer from "../../atoms/flex-container/flex-container";
import type { TableHeaderProps } from "./table-types";
import { ThemeColors, ThemeSpacing } from "../../../theme/theme";

export const TableHeader: React.FC<TableHeaderProps> = ({
  isAllSelected,
  onSelectAll,
  headers,
  isIndeterminate,
}) => {
  const headerRowStyles = {
    backgroundColor: ThemeColors["surface-secondary"],
    borderBottom: `1px solid ${ThemeColors["surface-200"]}`,
  };

  const headerCellStyles = {
    padding: `${ThemeSpacing.variables.GUTTER} calc(${ThemeSpacing.variables.GUTTER} * 0.75)`,
    textAlign: "left" as const,
  };

  const sortIconStyles = {
    marginLeft: `calc(${ThemeSpacing.variables.GUTTER} * 0.5)`,
    color: ThemeColors["subtlest"],
    cursor: "pointer",
  };

  return (
    <tr style={headerRowStyles}>
      <th style={headerCellStyles}>
        <Checkbox
          $checked={isAllSelected}
          $indeterminate={isIndeterminate}
          onChange={onSelectAll}
        />
      </th>
      {headers.map((header) => (
        <th key={header.title} style={headerCellStyles}>
          <FlexContainer
            alignChildren="center"
            justifyItems={header.justifyContent || "flex-start"}
          >
            <Text $renderAs="heading/form titles" $color="primary-200">
              {header.title}
            </Text>
            {header.sortable && (
              <span style={sortIconStyles}>
                <AppIcons.Sort />
              </span>
            )}
          </FlexContainer>
        </th>
      ))}
    </tr>
  );
};
