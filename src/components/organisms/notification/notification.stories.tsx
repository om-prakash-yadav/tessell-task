import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Notification from './notification';

const meta: Meta<typeof Notification> = {
  title: 'Organisms/Notification',
  component: Notification,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'error', 'warning'],
    },
    canDismiss: {
      control: 'boolean',
    },
    content: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    content: 'This is an info notification',
    variant: 'info',
    canDismiss: true,
  },
};

export const Success: Story = {
  args: {
    content: 'This is a success notification',
    variant: 'success',
    canDismiss: true,
  },
};

export const Error: Story = {
  args: {
    content: 'This is an error notification',
    variant: 'error',
    canDismiss: true,
  },
};

export const Warning: Story = {
  args: {
    content: 'This is a warning notification',
    variant: 'warning',
    canDismiss: true,
  },
};

export const NotDismissible: Story = {
  args: {
    content: 'This notification cannot be dismissed',
    variant: 'info',
    canDismiss: false,
  },
};
