import React from "react";
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ProfileImage from "./ProfileImage";
import type { AvatarProps } from "./ProfileImage-types";

const meta = {
  title: "Atoms/ProfileImage",
  component: ProfileImage,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "regular", "large"],
    },
    src: {
      control: "text",
    },
    alt: {
      control: "text",
    },
    onClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof ProfileImage>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default profile image
export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=face",
    alt: "User Profile",
    size: "regular",
  },
};

// Compact profile image
export const Compact: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=face",
    alt: "Compact User Profile",
    size: "small",
  },
};

// Expanded profile image
export const Expanded: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=face",
    alt: "Expanded User Profile",
    size: "large",
  },
};

// Clickable profile image
export const Clickable: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=face",
    alt: "Clickable User Profile",
    size: "regular",
    onClick: () => console.log("Profile image clicked!"),
  },
};

// Size variations showcase
export const SizeShowcase: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=face",
    alt: "Profile Image",
    size: "regular",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <ProfileImage {...args} size="small" alt="Compact Profile" />
      <ProfileImage {...args} size="regular" alt="Standard Profile" />
      <ProfileImage {...args} size="large" alt="Large Profile" />
    </div>
  ),
};
