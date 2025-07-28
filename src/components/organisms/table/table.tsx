import React from "react";
import { TableHeader } from "./table-header";
import { TableRow } from "./table-row";
import type { TableProps } from "./table-types";
import { ThemeColors } from "../../../theme/theme";

export const Table: React.FC<TableProps> = ({
  headers,
  rows,
  selectedRows,
  setSelectedRows,
}) => {
  const rowIds = rows.map((row) => row[0].id);
  const totalRows = rowIds.length;
  const selectedCount = selectedRows.length;

  const isAllSelected = selectedCount === totalRows && totalRows > 0;
  const isIndeterminate = selectedCount > 0 && selectedCount < totalRows;

  const toggleSelectAll = () => {
    setSelectedRows(isAllSelected ? [] : rowIds);
  };

  const toggleSelectRow = (rowId: number) => {
    setSelectedRows((prev) =>
      prev.includes(rowId)
        ? prev.filter((id) => id !== rowId)
        : [...prev, rowId]
    );
  };

  const tableContainerStyles = {
    borderRadius: "8px",
    border: `1px solid ${ThemeColors["surface-200"]}`,
    overflow: "hidden" as const,
    borderCollapse: "separate" as const,
    borderSpacing: "0",
    width: "100%",
  };

  const styledTableStyles = {
    width: "100%",
    borderCollapse: "collapse" as const,
  };

  return (
    <div style={tableContainerStyles}>
      <table style={styledTableStyles}>
        <thead>
          <TableHeader
            isAllSelected={isAllSelected}
            isIndeterminate={isIndeterminate}
            onSelectAll={toggleSelectAll}
            headers={headers}
          />
        </thead>
        <tbody>
          {rows.map((row) => {
            const rowId = row[0].id;
            return (
              <TableRow
                key={rowId}
                isSelected={selectedRows.includes(rowId)}
                onSelect={() => toggleSelectRow(rowId)}
                items={row}
                isLastRow={rowId === rows[rows.length - 1][0].id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
