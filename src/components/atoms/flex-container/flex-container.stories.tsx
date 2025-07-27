import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import FlexContainer from './flex-container';
import { ThemeColors } from '../../../theme/theme';

const meta: Meta<typeof FlexContainer> = {
  title: "Layout/FlexContainer",
  component: FlexContainer,
  args: {
    flexDirection: "row",
    spacing: 20,
    justifyItems: "flex-start",
    alignChildren: "center",
    flexWrap: "nowrap",
    backgroundColor: "opacity-transparent",
  },
  argTypes: {
    flexDirection: {
      control: "radio",
      options: ["row", "column", "row-reverse", "column-reverse"],
    },
    justifyItems: {
      control: "select",
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    alignChildren: {
      control: "select",
      options: ["stretch", "flex-start", "flex-end", "center", "baseline"],
    },
    flexWrap: {
      control: "radio",
      options: ["nowrap", "wrap", "wrap-reverse"],
    },
    spacing: {
      control: "number",
      min: 0,
      max: 100,
    },
    horizontalSpacing: {
      control: "number",
      min: 0,
      max: 10,
    },
    backgroundColor: {
      control: "select",
      options: Object.keys(ThemeColors),
    },
    cornerRadius: {
      control: "number",
      min: 0,
      max: 20,
    },
    horizontalPadding: {
      control: "number",
      min: 0,
      max: 50,
    },
    verticalPadding: {
      control: "number",
      min: 0,
      max: 50,
    },
    bottomMarginMultiplier: {
      control: "number",
      min: 0,
      max: 5,
    },
    containerWidth: {
      control: "text",
    },
    containerHeight: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Demo Item Component using inline styles
const DemoItem: React.FC<{ children: React.ReactNode; variant?: 'primary' | 'secondary' | 'accent' }> = ({ 
  children, 
  variant = 'primary' 
}) => {
  const getItemStyle = () => {
    const baseStyle: React.CSSProperties = {
      padding: '1rem',
      borderRadius: '6px',
      color: 'white',
      fontWeight: '500',
      minWidth: '80px',
      textAlign: 'center',
    };

    switch (variant) {
      case 'primary':
        return { ...baseStyle, backgroundColor: '#2684ff' };
      case 'secondary':
        return { ...baseStyle, backgroundColor: '#00875a' };
      case 'accent':
        return { ...baseStyle, backgroundColor: '#de350b' };
      default:
        return { ...baseStyle, backgroundColor: '#2684ff' };
    }
  };

  return <div style={getItemStyle()}>{children}</div>;
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>
    {children}
  </h2>
);

const Divider: React.FC<{ height?: number }> = ({ height = 20 }) => (
  <div style={{ height: `${height}px` }} />
);

export const Interactive: Story = {
  render: (args) => (
    <>
      <SectionTitle>FlexContainer Playground</SectionTitle>
      <Divider height={20} />
      <FlexContainer {...args}>
        <DemoItem variant="primary">Element A</DemoItem>
        <DemoItem variant="secondary">Element B</DemoItem>
        <DemoItem variant="accent">Element C</DemoItem>
      </FlexContainer>
    </>
  ),
};

export const BasicLayout: Story = {
  args: {
    spacing: 16,
    horizontalPadding: 24,
    verticalPadding: 16,
    backgroundColor: "surface-50",
    cornerRadius: 8,
  },
  render: (args) => (
    <FlexContainer {...args}>
      <DemoItem>First</DemoItem>
      <DemoItem>Second</DemoItem>
      <DemoItem>Third</DemoItem>
    </FlexContainer>
  ),
};

export const VerticalStack: Story = {
  args: {
    flexDirection: "column",
    spacing: 12,
    alignChildren: "stretch",
    horizontalPadding: 20,
    verticalPadding: 20,
    backgroundColor: "surface-100",
    cornerRadius: 12,
  },
  render: (args) => (
    <FlexContainer {...args}>
      <DemoItem variant="primary">Top Item</DemoItem>
      <DemoItem variant="secondary">Middle Item</DemoItem>
      <DemoItem variant="accent">Bottom Item</DemoItem>
    </FlexContainer>
  ),
};

export const CenteredContent: Story = {
  args: {
    justifyItems: "center",
    alignChildren: "center",
    containerHeight: "200px",
    backgroundColor: "primary-50",
    cornerRadius: 10,
  },
  render: (args) => (
    <FlexContainer {...args}>
      <DemoItem>Centered Content</DemoItem>
    </FlexContainer>
  ),
};

export const ResponsiveGrid: Story = {
  args: {
    flexWrap: "wrap",
    spacing: 16,
    justifyItems: "space-between",
    horizontalPadding: 20,
    verticalPadding: 20,
    backgroundColor: "secondary-50",
  },
  render: (args) => (
    <FlexContainer {...args}>
      <DemoItem variant="primary">Card 1</DemoItem>
      <DemoItem variant="secondary">Card 2</DemoItem>
      <DemoItem variant="accent">Card 3</DemoItem>
      <DemoItem variant="primary">Card 4</DemoItem>
      <DemoItem variant="secondary">Card 5</DemoItem>
    </FlexContainer>
  ),
};