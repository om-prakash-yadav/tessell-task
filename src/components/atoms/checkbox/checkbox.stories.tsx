import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    $variant: {
      control: { type: 'select' },
      options: ['primary'],
    },
    $size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
    },
    $checked: {
      control: { type: 'boolean' },
    },
    $disabled: {
      control: { type: 'boolean' },
    },
    $indeterminate: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;


// Interactive story that allows clicking
export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.$checked || false);
    
    return (
      <Checkbox
        {...args}
        $checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
  args: {
    $label: 'Click me!',
    $checked: false,
    $variant: 'primary',
    $size: 'default',
  },
};

export const Checked: Story = {
  args: {
    $label: 'Checked checkbox',
    $checked: true,
    $variant: 'primary',
    $size: 'default',
  },
};

export const Indeterminate: Story = {
  args: {
    $label: 'Indeterminate checkbox',
    $checked: false,
    $indeterminate: true,
    $variant: 'primary',
    $size: 'default',
  },
};

export const Disabled: Story = {
  args: {
    $label: 'Disabled checkbox',
    $disabled: true,
    $variant: 'primary',
    $size: 'default',
  },
};

export const DisabledChecked: Story = {
  args: {
    $label: 'Disabled checked checkbox',
    $checked: true,
    $disabled: true,
    $variant: 'primary',
    $size: 'default',
  },
};

export const Small: Story = {
  args: {
    $label: 'Small checkbox',
    $checked: true,
    $size: 'small',
    $variant: 'primary',
  },
};

export const Large: Story = {
  args: {
    $label: 'Large checkbox',
    $checked: true,
    $size: 'large',
    $variant: 'primary',
  },
};
