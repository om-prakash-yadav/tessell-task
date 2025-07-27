import type { Meta, StoryObj } from '@storybook/react-webpack5';

import FlexContainer from './flex-container';

const meta = {
  title: 'Atoms/FlexContainer',
  component: FlexContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'select',
      options: [
        'opacity-transparent',
        'surface-0',
        'surface-50',
        'surface-100',
        'surface-200',
        'primary-50',
        'primary-100',
        'secondary-50',
        'success-50',
        'warning-50',
        'danger-50'
      ],
    },
    flexDirection: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    justifyItems: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    },
    alignChildren: {
      control: 'select',
      options: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
    },
    flexWrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
  },
} satisfies Meta<typeof FlexContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    backgroundColor: 'surface-50',
    horizontalSpacing: 2,
    bottomMarginMultiplier: 1,
    horizontalPadding: 16,
    verticalPadding: 12,
    flexDirection: 'row',
    justifyItems: 'flex-start',
    alignChildren: 'center',
    flexWrap: 'nowrap',
    cornerRadius: 8,
    containerWidth: 400,
    containerHeight: 'auto',
  },
  render: (args) => (
    <FlexContainer {...args}>
      <div style={{ padding: '8px', backgroundColor: 'var(--primary-100)', borderRadius: '4px' }}>
        Item 1
      </div>
      <div style={{ padding: '8px', backgroundColor: 'var(--secondary-100)', borderRadius: '4px' }}>
        Item 2
      </div>
      <div style={{ padding: '8px', backgroundColor: 'var(--success-100)', borderRadius: '4px' }}>
        Item 3
      </div>
    </FlexContainer>
  ),
};