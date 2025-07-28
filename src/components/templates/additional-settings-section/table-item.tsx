import { memo, useEffect, useState } from "react";
import FlexContainer from "../../atoms/flex-container/flex-container";
import { Table } from "../../organisms/table/table";
import type {
  HeaderData,
  RowData,
} from "../../organisms/table/table-types";
import {
  buildDeleteCell,
  buildLinkCell,
  buildTitleCell,
  createTableRows,
} from "../../organisms/table/table-utils";

const TableItem = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [tableRows, setTableRows] = useState<RowData[][]>([]);

  function handleDeleteRow(rowId: number) {
    setTableRows((prev) => prev.filter((row) => row[0].id !== rowId));
    setSelectedRows((prev) => prev.filter((id) => id !== rowId));
  }

  useEffect(() => {
    const rows = createTableRows(10, [
      buildLinkCell({
        href: "https://example.com",
        text: "Link",
      }),
      buildTitleCell({ title: "Row Title" }),
      buildDeleteCell(handleDeleteRow),
    ]);
    setTableRows(rows);
  }, []);

  const headers: HeaderData[] = [
    { title: "Header", sortable: true, justifyContent: "flex-start" },
    { title: "Header", sortable: true, justifyContent: "flex-start" },
    { title: "Header", sortable: true, justifyContent: "flex-end" },
  ];

  return (
    <FlexContainer>
      <Table
        headers={headers}
        rows={tableRows}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
      />
    </FlexContainer>
  );
};

export default memo(TableItem);
