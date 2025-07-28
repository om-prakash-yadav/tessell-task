import type React from "react";

export type TableRowCellBuilder = (
  rowIndex: number,
  cellIndex: number,
  baseId: number
) => RowData;

export interface RowData {
  id: number;
  item: React.ReactNode;
  justifyContent?: "flex-start" | "center" | "flex-end";
}

export interface HeaderData {
  title: string;
  sortable: boolean;
  justifyContent?: "flex-start" | "center" | "flex-end";
}

export interface TableHeaderProps {
  isAllSelected: boolean;
  isIndeterminate: boolean;
  onSelectAll: () => void;
  headers: HeaderData[];
}

export interface TableRowProps {
  isSelected: boolean;
  onSelect: () => void;
  items: RowData[];
  isLastRow?: boolean;
}

export interface TableProps {
  rows: RowData[][];
  headers: HeaderData[];
  selectedRows: number[];
  setSelectedRows: React.Dispatch<React.SetStateAction<number[]>>;
}
