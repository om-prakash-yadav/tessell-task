import type { Meta, StoryObj } from '@storybook/react-webpack5';

import SpacingDivider from './spacing-divider';

const meta = {
  title: 'Atoms/SpacingDivider',
  component: SpacingDivider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundTone: {
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
    verticalSizeMultiplier: {
      control: 'number',
      min: 1,
      max: 10,
      step: 1,
    },
    horizontalSizeMultiplier: {
      control: 'number',
      min: 1,
      max: 10,
      step: 1,
    },
    dividerHeight: {
      control: 'number',
      min: 0,
      step: 1,
    },
    dividerWidth: {
      control: 'number',
      min: 0,
      step: 1,
    },
  },
} satisfies Meta<typeof SpacingDivider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    verticalSizeMultiplier: 3,
    horizontalSizeMultiplier: 3,
    backgroundTone: "primary-50",
    dividerHeight: 100,
    dividerWidth: 100
  }
};