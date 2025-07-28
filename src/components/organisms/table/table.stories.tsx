import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React, { useState } from 'react';
import { Table } from './table';
import { createTableRows, buildLinkCell, buildTitleCell, buildDeleteCell } from './table-utils';
import type { HeaderData } from './table-types';

const meta: Meta<typeof Table> = {
  title: 'ORGANISMS/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    selectedRows: {
      control: false,
    },
    setSelectedRows: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// Sample headers matching the image
const sampleHeaders: HeaderData[] = [
  { title: 'Header', sortable: true, justifyContent: 'flex-start' },
  { title: 'Header', sortable: true, justifyContent: 'flex-start' },
  { title: 'Header', sortable: true, justifyContent: 'flex-end' },
];

// Template component to handle state
const TableTemplate = (args: any) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  return (
    <div style={{ width: '800px' }}>
      <Table
        {...args}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
      />
    </div>
  );
};

export const Default: Story = {
  render: TableTemplate,
  args: {
    headers: sampleHeaders,
    rows: createTableRows(4, [
      buildLinkCell({ text: 'Link', href: '#' }),
      buildTitleCell({ title: 'Row Title' }),
      buildDeleteCell((rowId) => console.log('Delete row:', rowId)),
    ]),
  },
};
