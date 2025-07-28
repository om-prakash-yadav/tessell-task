import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Radio } from './radio';
import React, { useState } from 'react';
import FlexContainer from '../../atoms/flex-container/flex-container';

const meta: Meta<typeof Radio> = {
  title: 'Molecules/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    $variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger', 'success', 'warning'],
    },
    $size: {
      control: { type: 'select' },
      options: ['small', 'regular', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    $checked: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $label: 'Option 1',
    $variant: 'primary',
    $size: 'regular',
    $checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    $label: 'Selected Option',
    $variant: 'primary',
    $size: 'regular',
    $checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    $label: 'Disabled Option',
    $variant: 'primary',
    $size: 'regular',
    $checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    $label: 'Disabled Selected',
    $variant: 'primary',
    $size: 'regular',
    $checked: true,
    disabled: true,
  },
};

export const Variants: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState('primary');
    
    return (
      <FlexContainer flexDirection="column" spacing={16}>
        <Radio 
          $label="Primary Option" 
          $variant="primary" 
          $checked={selectedOption === 'primary'} 
          onChange={() => setSelectedOption('primary')}
        />
        <Radio 
          $label="Secondary Option" 
          $variant="secondary" 
          $checked={selectedOption === 'secondary'} 
          onChange={() => setSelectedOption('secondary')}
        />
        <Radio 
          $label="Success Option" 
          $variant="success" 
          $checked={selectedOption === 'success'} 
          onChange={() => setSelectedOption('success')}
        />
        <Radio 
          $label="Warning Option" 
          $variant="warning" 
          $checked={selectedOption === 'warning'} 
          onChange={() => setSelectedOption('warning')}
        />
        <Radio 
          $label="Danger Option" 
          $variant="danger" 
          $checked={selectedOption === 'danger'} 
          onChange={() => setSelectedOption('danger')}
        />
      </FlexContainer>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState('regular');
    
    return (
      <FlexContainer flexDirection="column" spacing={16}>
        <Radio 
          $label="Small Size" 
          $size="small" 
          $checked={selectedOption === 'small'} 
          onChange={() => setSelectedOption('small')}
        />
        <Radio 
          $label="Regular Size" 
          $size="regular" 
          $checked={selectedOption === 'regular'} 
          onChange={() => setSelectedOption('regular')}
        />
        <Radio 
          $label="Large Size" 
          $size="large" 
          $checked={selectedOption === 'large'} 
          onChange={() => setSelectedOption('large')}
        />
      </FlexContainer>
    );
  },
};

export const RadioGroup: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState('option1');
    
    return (
      <FlexContainer flexDirection="column" spacing={12}>
        <Radio 
          name="radiogroup"
          $label="Option 1" 
          $checked={selectedOption === 'option1'} 
          onChange={() => setSelectedOption('option1')}
        />
        <Radio 
          name="radiogroup"
          $label="Option 2" 
          $checked={selectedOption === 'option2'} 
          onChange={() => setSelectedOption('option2')}
        />
        <Radio 
          name="radiogroup"
          $label="Option 3" 
          $checked={selectedOption === 'option3'} 
          onChange={() => setSelectedOption('option3')}
        />
        <Radio 
          name="radiogroup"
          $label="Disabled Option" 
          $checked={selectedOption === 'option4'} 
          disabled
          onChange={() => setSelectedOption('option4')}
        />
      </FlexContainer>
    );
  },
};
