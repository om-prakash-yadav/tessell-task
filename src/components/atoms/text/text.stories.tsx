import React from "react";
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from "./text";
import type { TextProps } from "./text-types";

const meta = {
  title: "Atoms/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    $renderAs: {
      control: "select",
      options: [
        "headingLg", "headingMd", "headingSm", "headingForm",
        "bodyPrimary", "bodySecondary", "bodyMdMono", "bodyXs",
        "Text-body/secondary/secondary", "Text-body/primary/primary",
        "heading/primary", "heading/secondary", "heading/form titles",
        "heading/Titles", "Heading/3", "button/large",
      ],
    },
    $color: {
      control: "select",
      options: [
        "primary-50", "primary-100", "primary-200", "primary-300", "primary-400",
        "secondary-0", "secondary-50", "secondary-100", "secondary-200", "secondary-300", "secondary-400",
        "success-0", "success-50", "success-100", "success-200", "success-300", "success-400",
        "danger-0", "danger-50", "danger-100", "danger-200", "danger-300", "danger-400",
        "warning-0", "warning-50", "warning-100", "warning-200", "warning-300", "warning-400",
        "surface-0", "surface-50", "surface-100", "surface-200", "surface-300", "surface-400",
        "surface-500", "surface-600", "surface-700", "surface-800", "surface-900", "surface-secondary",
        "primary", "subtler", "subtlest", "disabled", "inverse", "bolder", "text-100",
        "border-focus", "border-bold", "border-disabled", "border-icon-button", "border-gray-muted",
        "dark-50", "dark-100", "dark-200", "dark-300",
        "opacity-transparent",
      ],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $renderAs: "bodyPrimary",
    $color: "primary-50",
    children: "This is a bodyPrimary text",
  },
};

export const Variants: Story = {
  args: {
    $renderAs: "bodyPrimary",
    $color: "primary-50",
    children: "This is a bodyPrimary text",
  },
  render: () => (
    <div>
      {["headingLg", "headingMd", "headingSm", "headingForm",
        "bodyPrimary", "bodySecondary", "bodyMdMono", "bodyXs",
        "Text-body/secondary/secondary", "Text-body/primary/primary",
        "heading/primary", "heading/secondary", "heading/form titles",
        "heading/Titles", "Heading/3", "button/large",
      ].map((variant) => (
        <div key={variant} style={{ marginBottom: "16px" }}>
          <Text $renderAs={variant as TextProps["$renderAs"]}>
            {`This is a ${variant} text`}
          </Text>
        </div>
      ))}
    </div>
  ),
};