import type { Meta, StoryObj } from '@storybook/react-webpack5';
import InputField from './input-field';
import { AppIcons } from '../../../resources/icons';

const meta: Meta<typeof InputField> = {
  title: 'Atoms/InputField',
  component: InputField,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    $variant: {
      control: { type: 'select' },
      options: ['primary'],
    },
    $size: {
      control: { type: 'select' },
      options: ['small', 'default'],
    },
    $isDisabled: {
      control: { type: 'boolean' },
    },
    $multiline: {
      control: { type: 'boolean' },
    },
    $maxWidth: {
      control: { type: 'text' },
    },
    $marginBottomX: {
      control: { type: 'number' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    $label: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

// Basic Examples
export const Default: Story = {
  args: {
    placeholder: 'Enter text here...',
  },
};

export const WithLabel: Story = {
  args: {
    $label: 'Email Address',
    placeholder: 'Enter your email...',
  },
};

export const Small: Story = {
  args: {
    $size: 'small',
    $label: 'Small Input',
    placeholder: 'Small size input...',
  },
};

export const Disabled: Story = {
  args: {
    $label: 'Disabled Input',
    placeholder: 'This is disabled...',
    $isDisabled: true,
  },
};

export const WithHelpText: Story = {
  args: {
    $label: "Phone Number",
    placeholder: "Text Input",
    type: "text",
    $helpText: {
      "message": "Only numbers between 100 ~ 1000 are allowed",
      "color": "subtler"
    },
  },
};

export const WithErrorHelpText: Story = {
  args: {
    $label: 'Email',
    placeholder: 'Enter your email...',
    value: 'invalid-email',
    $helpText: {
      "message": "Please enter a valid email address",
      "color": "danger-100"
    },
  },
};

export const Multiline: Story = {
  args: {
    $label: 'Description',
    placeholder: 'Enter your description here...',
    $multiline: true,
  },
};

export const MultilineWithHelpText: Story = {
  args: {
    $label: 'Comments',
    placeholder: 'Enter your comments here...',
    $multiline: true,
    $helpText: {
      message: 'Maximum 500 characters',
      color: 'subtler',
    },
  },
};

// Examples with Icons
export const WithLeadingIcon: Story = {
  args: {
    $label: 'Search',
    placeholder: 'Search for something...',
    $leadingItem: <AppIcons.Code style={{ width: 16, height: 16, color: 'var(--subtler)' }} />,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    $label: 'Username',
    placeholder: 'Enter username...',
    $trailingItem: <AppIcons.Check style={{ width: 16, height: 16, color: 'var(--success-400)' }} />,
  },
};

export const WithBothIcons: Story = {
  args: {
    $label: 'Search Query',
    placeholder: 'Type to search...',
    $leadingItem: <AppIcons.Code style={{ width: 16, height: 16, color: 'var(--subtler)' }} />,
    $trailingItem: <AppIcons.Close style={{ width: 16, height: 16, color: 'var(--subtler)', cursor: 'pointer' }} />,
  },
};

export const PasswordInput: Story = {
  args: {
    $label: 'Password',
    type: 'password',
    placeholder: 'Enter your password...',
    $trailingItem: <AppIcons.InfoIcon style={{ width: 16, height: 16, color: 'var(--subtler)' }} />,
  },
};

export const NumberInput: Story = {
  args: {
    $label: 'Port Number',
    type: 'number',
    placeholder: '3000',
    $leadingItem: <AppIcons.Servers style={{ width: 16, height: 16, color: 'var(--subtler)' }} />,
  },
};

export const DateInput: Story = {
  args: {
    $label: 'Select Date',
    type: 'date',
    $leadingItem: <AppIcons.Calendar style={{ width: 16, height: 16, color: 'var(--subtler)' }} />,
  },
};

export const TimeInput: Story = {
  args: {
    $label: 'Select Time',
    type: 'time',
    $leadingItem: <AppIcons.Clock style={{ width: 16, height: 16, color: 'var(--subtler)' }} />,
  },
};
