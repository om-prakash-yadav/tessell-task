import { Text } from "../../atoms/text/text";
import TableButton from "./table-btn";
import type { RowData, TableRowCellBuilder } from "./table-types";

export function createTableRows(
  rowCount: number,
  cellBuilders: TableRowCellBuilder[]
): RowData[][] {
  const rows: RowData[][] = [];

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    const baseId = rowIndex * cellBuilders.length + 1;
    const row: RowData[] = [];

    for (let cellIndex = 0; cellIndex < cellBuilders.length; cellIndex++) {
      row.push(
        cellBuilders[cellIndex](rowIndex, cellIndex, baseId + cellIndex)
      );
    }

    rows.push(row);
  }

  return rows;
}

export const buildLinkCell = ({
  href = "#",
  text = "Link",
}: {
  href?: string;
  text?: string;
} = {}): TableRowCellBuilder => {
  return (__, _, id) => ({
    id,
    item: (
      <Text
        as="a"
        $renderAs="Text-body/secondary/secondary"
        href={href}
        $color="primary-200"
      >
        {text}
      </Text>
    ),
    justifyContent: "flex-start",
  });
};

export const buildTitleCell = ({
  title,
}: {
  title: string;
}): TableRowCellBuilder => {
  return (_, __, id: number) => ({
    id,
    item: <Text $renderAs="Text-body/primary/primary">{title}</Text>,
    justifyContent: "flex-start",
  });
};

export const buildDeleteCell = (
  handleDeleteRow: (rowId: number) => void
): TableRowCellBuilder => {
  return (rowIndex, _, id) => {
    const rowId = rowIndex * 3 + 1;
    return {
      id,
      item: (
        <TableButton
          $color="primary-200"
          $icon="Delete"
          $label="Delete"
          $onClick={() => handleDeleteRow(rowId)}
        />
      ),
      justifyContent: "flex-end",
    };
  };
};
