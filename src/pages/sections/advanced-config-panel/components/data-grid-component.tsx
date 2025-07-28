import { memo, useEffect, useState } from "react";
import FlexContainer from "../../../../components/atoms/flex-container/flex-container";
import { Table } from "../../../../components/organisms/table/table";
import type {
  HeaderData,
  RowData,
} from "../../../../components/organisms/table/table-types";
import {
  buildDeleteCell,
  buildLinkCell,
  buildTitleCell,
  createTableRows,
} from "../../../../components/organisms/table/table-utils";

const DataGridComponent = () => {
  const [chosenEntries, setChosenEntries] = useState<number[]>([]);
  const [gridData, setGridData] = useState<RowData[][]>([]);

  function executeRowDeletion(entryId: number) {
    setGridData((previousData) => previousData.filter((entry) => entry[0].id !== entryId));
    setChosenEntries((previousSelection) => previousSelection.filter((id) => id !== entryId));
  }

  useEffect(() => {
    const constructedRows = createTableRows(10, [
      buildLinkCell({
        href: "https://example.com",
        text: "Link",
      }),
      buildTitleCell({ title: "Row Title" }),
      buildDeleteCell(executeRowDeletion),
    ]);
    setGridData(constructedRows);
  }, []);

  const columnHeaders: HeaderData[] = [
    { title: "Header", sortable: true, justifyContent: "flex-start" },
    { title: "Header", sortable: true, justifyContent: "flex-start" },
    { title: "Header", sortable: true, justifyContent: "flex-end" },
  ];

  return (
    <FlexContainer>
      <Table
        headers={columnHeaders}
        rows={gridData}
        selectedRows={chosenEntries}
        setSelectedRows={setChosenEntries}
      />
    </FlexContainer>
  );
};

export default memo(DataGridComponent);
