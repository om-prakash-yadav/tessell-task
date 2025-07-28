import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Drawer from './drawer';
import { DrawerProvider } from './hooks/drawer-provider';
import { Text } from '../../atoms/text/text';
import FlexContainer from '../../atoms/flex-container/flex-container';
import type { DrawerBtnProps, DrawerProps, DrawerDropdownProps } from './drawer-types';
import { useState } from 'react';
import type { DropdownItemProps } from '../dropdown/dropdown-types';

const meta: Meta<typeof Drawer> = {
  title: 'ORGANISMS/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    dropdown: {
      description: 'Optional dropdown configuration',
      control: 'object',
    },
    menuOptions: {
      description: 'Array of menu button options',
      control: 'object',
    },
    footerOptions: {
      description: 'Array of footer button options',
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

// Sample menu options for the stories
const sampleMenuOptions: DrawerBtnProps[] = [
  {
    $icon: 'MyServices',
    label: 'My Services',
    $isSelected: true,
    onClick: () => console.log('My Services clicked'),
  },
  {
    $icon: 'Provisioning',
    label: 'Provisioning',
    $isSelected: false,
    onClick: () => console.log('Provisioning clicked'),
  },
  {
    $icon: 'AvailabilityMachines',
    label: 'Availability Machines',
    $isSelected: false,
    onClick: () => console.log('Availability Machines clicked'),
  },
  {
    $icon: 'Servers',
    label: 'Servers',
    $isSelected: false,
    onClick: () => console.log('Servers clicked'),
  },
  {
    $icon: 'DataFlix',
    label: 'Data Flix',
    $isSelected: false,
    onClick: () => console.log('Data Flix clicked'),
  },
  {
    $icon: 'Benchmarks',
    label: 'Benchmarks',
    $isSelected: false,
    onClick: () => console.log('Benchmarks clicked'),
  },
];

const sampleFooterOptions: DrawerBtnProps[] = [
  {
    $icon: 'Book',
    label: 'Documentation',
    $isSelected: false,
    onClick: () => console.log('Documentation clicked'),
  },
  {
    $icon: 'Announcement',
    label: "What's New",
    $isSelected: false,
    onClick: () => console.log("What's New clicked"),
  },
  {
    $icon: 'QuestionMark',
    label: 'Help & Support',
    $isSelected: false,
    onClick: () => console.log('Help & Support clicked'),
  },
];

// Sample dropdown options
const sampleDropdownOptions: DropdownItemProps[] = [
  {
    label: 'DB Services',
    value: 'db-services',
  },
  {
    label: 'Analytics Services',
    value: 'analytics-services',
  },
  {
    label: 'Storage Services',
    value: 'storage-services',
  },
  {
    label: 'Compute Services',
    value: 'compute-services',
  },
  {
    label: 'Network Services',
    value: 'network-services',
  },
];

export const Default: Story = {
  args: {
    menuOptions: sampleMenuOptions,
    footerOptions: sampleFooterOptions,
  },
  render: (args: DrawerProps) => {
    const [selectedValue, setSelectedValue] = useState<string | number>('db-services');
    
    const dropdownConfig: DrawerDropdownProps = {
      options: sampleDropdownOptions,
      selected: selectedValue,
      handleChange: (value) => {
        setSelectedValue(value);
        console.log('Dropdown selection changed:', value);
      },
    };

    return (
      <DrawerProvider initialOpen={true}>
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
          <Drawer {...args} dropdown={dropdownConfig} />
          <FlexContainer
            horizontalPadding={240} // Account for drawer width + padding
            verticalPadding={20}
            flexDirection="column"
            spacing={16}
            containerHeight="100vh"
            backgroundColor="surface-0"
          >
            <Text $renderAs="heading/Titles" $color="primary">
              Main Content Area
            </Text>
            <Text $renderAs="bodyPrimary" $color="subtler">
              This is the main content area. The drawer is positioned as a fixed overlay
              that slides in from the left. You can interact with the drawer items and
              toggle the drawer using the buttons in the header. The dropdown shows "DB Services" by default.
            </Text>
            <Text $renderAs="bodySecondary" $color="subtlest">
              Current selection: {selectedValue}. Lorem ipsum dolor sit amet consectetur, 
              adipisicing elit. Ab in corrupti magnam, ipsa illum sed illo architecto eveniet 
              explicabo dolorum, corporis similique officiis laudantium, tempore velit impedit
              aut consequatur tenetur. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Text>
          </FlexContainer>
        </div>
      </DrawerProvider>
    );
  },
};

export const WithoutDropdown: Story = {
  args: {
    menuOptions: sampleMenuOptions,
    footerOptions: sampleFooterOptions,
  },
  render: (args: DrawerProps) => (
    <DrawerProvider initialOpen={true}>
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <Drawer {...args} />
        <FlexContainer
          horizontalPadding={240} // Account for drawer width + padding
          verticalPadding={20}
          flexDirection="column"
          spacing={16}
          containerHeight="100vh"
          backgroundColor="surface-0"
        >
          <Text $renderAs="heading/Titles" $color="primary">
            Drawer Without Dropdown
          </Text>
          <Text $renderAs="bodyPrimary" $color="subtler">
            This version of the drawer doesn't include the dropdown component.
            It shows how the drawer behaves when no dropdown prop is provided.
          </Text>
        </FlexContainer>
      </div>
    </DrawerProvider>
  ),
};
