import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'ATOMS/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    $icon: {
      control: 'select',
      options: [
        'Add', 'Announcement', 'AvailabilityMachines', 'Bell', 'Benchmarks', 
        'Book', 'Calendar', 'Code', 'Close', 'Clock', 'Check', 'Chart', 
        'CheckboxCheck', 'CheckboxMinus', 'CirclePlus', 'Cloud', 'CmdE', 
        'ChevronDown', 'ChevronLeft', 'DataFlix', 'Delete', 'Drawer', 
        'InfoIcon', 'MyServices', 'OracleLogo', 'Pin', 'Provisioning', 
        'ScriptLibrary', 'Servers', 'Sort', 'Switcher', 'TessellLogo', 
        'TessellTypoLogo', 'QuestionMark'
      ],
    },
    $trailingIcon: {
      control: 'select',
      options: [
        undefined, 'Add', 'Announcement', 'AvailabilityMachines', 'Bell', 
        'Benchmarks', 'Book', 'Calendar', 'Code', 'Close', 'Clock', 'Check', 
        'Chart', 'CheckboxCheck', 'CheckboxMinus', 'CirclePlus', 'Cloud', 
        'CmdE', 'ChevronDown', 'ChevronLeft', 'DataFlix', 'Delete', 'Drawer', 
        'InfoIcon', 'MyServices', 'OracleLogo', 'Pin', 'Provisioning', 
        'ScriptLibrary', 'Servers', 'Sort', 'Switcher', 'TessellLogo', 
        'TessellTypoLogo', 'QuestionMark'
      ],
    },
    $type: {
      control: 'select',
      options: ['primary', 'tertiary'],
    },
    $size: {
      control: 'select',
      options: ['small', 'regular', 'large'],
    },
    $isFullWidth: {
      control: 'boolean',
    },
    $iconOnly: {
      control: 'boolean',
    },
    $isLoading: {
      control: 'boolean',
    },
    $isSelected: {
      control: 'boolean',
    },
    $isHorizontallyCentered: {
      control: 'boolean',
    },
    $marginBottom: {
      control: 'number',
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default button story
export const Default: Story = {
  args: {
    $icon: 'Add',
    $type: 'primary',
    $size: 'regular',
    children: 'Default Button',
  },
};

// Primary button variants
export const PrimaryVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button $icon="Add" $type="primary" $size="small">
        Small Primary
      </Button>
      <Button $icon="Code" $type="primary" $size="regular">
        Regular Primary
      </Button>
      <Button $icon="Check" $type="primary" $size="large">
        Large Primary
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Primary button variants in different sizes.',
      },
    },
  },
};

// Tertiary button variants
export const TertiaryVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button $icon="Bell" $type="tertiary" $size="small">
        Small Tertiary
      </Button>
      <Button $icon="Book" $type="tertiary" $size="regular">
        Regular Tertiary
      </Button>
      <Button $icon="Chart" $type="tertiary" $size="large">
        Large Tertiary
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button variants in different sizes.',
      },
    },
  },
};

// Icon variations
export const IconVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button $icon="Add" $type="primary" $size="regular">
        Add Item
      </Button>
      <Button $icon="Delete" $type="primary" $size="regular">
        Delete Item
      </Button>
      <Button $icon="Code" $type="primary" $size="regular">
        View Code
      </Button>
      <Button $icon="Cloud" $type="primary" $size="regular">
        Deploy
      </Button>
      <Button $icon="Chart" $type="primary" $size="regular">
        Analytics
      </Button>
      <Button $icon="Bell" $type="primary" $size="regular">
        Notifications
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with different icons showcasing the variety of available icons.',
      },
    },
  },
};

// Icon-only buttons
export const IconOnlyButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button $icon="Add" $type="primary" $size="small" $iconOnly />
      <Button $icon="Delete" $type="primary" $size="regular" $iconOnly />
      <Button $icon="Code" $type="primary" $size="large" $iconOnly />
      <Button $icon="Bell" $type="tertiary" $size="small" $iconOnly />
      <Button $icon="Book" $type="tertiary" $size="regular" $iconOnly />
      <Button $icon="Chart" $type="tertiary" $size="large" $iconOnly />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons without text labels.',
      },
    },
  },
};

// Buttons with trailing icons
export const WithTrailingIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button $icon="Add" $type="primary" $size="regular" $trailingIcon="ChevronDown">
        Create New
      </Button>
      <Button $icon="Servers" $type="primary" $size="regular" $trailingIcon="ChevronDown">
        Server Actions
      </Button>
      <Button $icon="Book" $type="tertiary" $size="regular" $trailingIcon="ChevronDown">
        Documentation
      </Button>
      <Button $icon="Chart" $type="tertiary" $size="regular" $trailingIcon="InfoIcon">
        View Report
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with both leading and trailing icons.',
      },
    },
  },
};


// Complex icon showcase
export const ComplexIconShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', maxWidth: '800px' }}>
      <Button $icon="TessellLogo" $type="primary" $size="small">
        Tessell
      </Button>
      <Button $icon="AvailabilityMachines" $type="primary" $size="regular">
        Machines
      </Button>
      <Button $icon="Benchmarks" $type="primary" $size="large">
        Benchmarks
      </Button>
      <Button $icon="DataFlix" $type="tertiary" $size="small">
        DataFlix
      </Button>
      <Button $icon="MyServices" $type="tertiary" $size="regular">
        My Services
      </Button>
      <Button $icon="Provisioning" $type="tertiary" $size="large">
        Provisioning
      </Button>
      <Button $icon="ScriptLibrary" $type="primary" $size="regular">
        Scripts
      </Button>
      <Button $icon="OracleLogo" $type="primary" $size="regular">
        Oracle
      </Button>
      <Button $icon="Calendar" $type="tertiary" $size="regular">
        Schedule
      </Button>
      <Button $icon="Pin" $type="tertiary" $size="regular">
        Pin Item
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of buttons with various complex and domain-specific icons.',
      },
    },
  },
};

// Interactive playground story
export const Interactive: Story = {
  args: {
    $icon: 'Add',
    $type: 'primary',
    $size: 'regular',
    $isFullWidth: false,
    $iconOnly: false,
    $isLoading: false,
    $isSelected: false,
    $isHorizontallyCentered: true,
    $marginBottom: 0,
    $trailingIcon: undefined,
    disabled: false,
    children: 'Interactive Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different button configurations. Use the controls panel to modify the button properties.',
      },
    },
  },
};
