import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Drawer from './drawer';
import { DrawerProvider } from './hooks/drawer-provider';
import { Text } from '../../atoms/text/text';
import FlexContainer from '../../atoms/flex-container/flex-container';
import type { DrawerBtnProps, DrawerProps } from './drawer-types';

const meta: Meta<typeof Drawer> = {
  title: 'ORGANISMS/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
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

export const Default: Story = {
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
            Main Content Area
          </Text>
          <Text $renderAs="bodyPrimary" $color="subtler">
            This is the main content area. The drawer is positioned as a fixed overlay
            that slides in from the left. You can interact with the drawer items and
            toggle the drawer using the buttons in the header.
          </Text>
          <Text $renderAs="bodySecondary" $color="subtlest">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab in
            corrupti magnam, ipsa illum sed illo architecto eveniet explicabo
            dolorum, corporis similique officiis laudantium, tempore velit impedit
            aut consequatur tenetur. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Text>
        </FlexContainer>
      </div>
    </DrawerProvider>
  ),
};
