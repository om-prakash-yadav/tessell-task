
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import IconAction from './icon-action';

const meta: Meta<typeof IconAction> = {
  title: 'Atoms/IconAction',
  component: IconAction,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Essential IconAction variants for common usage.',
      },
    },
  },
  argTypes: {
    iconKey: {
      control: 'select',
      options: ['Add', 'Check', 'InfoIcon'],
      description: 'Icon to display in the button',
    },
    buttonStyle: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Visual style variant of the button',
    },
    buttonScale: {
      control: 'select',
      options: ['medium'],
      description: 'Size of the button and icon',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    accessibilityLabel: {
      control: 'text',
      description: 'Accessibility label for screen readers',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconKey: 'Add',
    buttonStyle: 'primary',
    buttonScale: 'medium',
    accessibilityLabel: 'Add item',
    disabled: false,
  },
};

export const Primary: Story = {
  args: {
    iconKey: 'Check',
    buttonStyle: 'primary',
    buttonScale: 'medium',
    accessibilityLabel: 'Primary action',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    iconKey: 'InfoIcon',
    buttonStyle: 'secondary',
    buttonScale: 'medium',
    accessibilityLabel: 'Secondary action',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    iconKey: 'Add',
    buttonStyle: 'primary',
    buttonScale: 'medium',
    accessibilityLabel: 'Disabled action',
    disabled: true,
  },
};
