import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "neutral",
          "primary",
          "secondary",
          "accent",
          "info",
          "success",
          "warning",
          "error",
          "ghost",
          "link",
          "glass",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["lg", "md", "sm", "xs"],
      },
    },
    shape: {
      control: {
        type: "select",
        options: ["wide", "block", "circle", "square"],
      },
    },
    outline: { control: "boolean" },
    active: { control: "boolean" },
    disabled: { control: "boolean" },
    noAnimation: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Neutral: Story = {
  args: {
    variant: "neutral",
    children: "Button",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

// Repeat for the rest of the variants...

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Button",
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "xs",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    outline: true,
    children: "Button",
  },
};

export const Active: Story = {
  args: {
    active: true,
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Button",
  },
};
