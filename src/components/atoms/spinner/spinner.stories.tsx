import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Spinner from './spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'number', min: 20, max: 200, step: 10 },
      description: 'Diameter of the spinner in pixels',
    },
    variant: {
      control: { type: 'select' },
      options: [
        'primary-200',
        'primary-300',
        'secondary-200',
        'success-200',
        'danger-200',
        'warning-200',
      ],
      description: 'Color variant for the spinner',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 50,
    variant: 'primary-200',
  },
};

export const Compact: Story = {
  args: {
    size: 30,
    variant: 'primary-200',
  },
};

export const Extended: Story = {
  args: {
    size: 80,
    variant: 'primary-200',
  },
};

export const SuccessVariant: Story = {
  args: {
    size: 50,
    variant: 'success-200',
  },
};

export const ErrorVariant: Story = {
  args: {
    size: 50,
    variant: 'danger-200',
  },
};

export const WarningVariant: Story = {
  args: {
    size: 50,
    variant: 'warning-200',
  },
};
