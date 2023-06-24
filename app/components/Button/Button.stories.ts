import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

const meta: Meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "",
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

// Variants

export const DefaultVariant: Story = {
  args: {
    variant: undefined,
    children: "Default variant",
  },
};

export const PrimaryVariant: Story = {
  args: {
    variant: "primary",
    children: "Primary variant",
  },
};

export const SecondaryVariant: Story = {
  args: {
    variant: "secondary",
    children: "Secondary variant",
  },
};

export const AccentVariant: Story = {
  args: {
    variant: "accent",
    children: "Accent variant",
  },
};

export const NeutralVariant: Story = {
  args: {
    variant: "neutral",
    children: "Neutral variant",
  },
};

export const InfoVariant: Story = {
  args: {
    variant: "info",
    children: "Info variant",
  },
};

export const SuccessVariant: Story = {
  args: {
    variant: "success",
    children: "Success variant",
  },
};

export const WarningVariant: Story = {
  args: {
    variant: "warning",
    children: "Warning variant",
  },
};

export const ErrorVariant: Story = {
  args: {
    variant: "error",
    children: "Error variant",
  },
};

// Sizes

export const LargeButton: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const MediumButton: Story = {
  args: {
    size: "md",
    children: "Medium button",
  },
};

export const SmallButton: Story = {
  args: {
    size: "sm",
    children: "Small button",
  },
};

export const ExtraSmallButton: Story = {
  args: {
    size: "xs",
    children: "Extra-small Button",
  },
};

// Shapes

export const WideButton: Story = {
  args: {
    shape: "wide",
    children: "Button",
  },
};

export const BlockButton: Story = {
  args: {
    shape: "block",
    children: "Button",
  },
};

export const CircleButton: Story = {
  args: {
    shape: "circle",
    children: "👋",
  },
};

export const SquareButton: Story = {
  args: {
    shape: "square",
    children: "👋",
  },
};

// Misc

export const OutlinedButton: Story = {
  args: {
    outline: true,
    children: "Outlined button",
  },
};

export const ActiveButton: Story = {
  args: {
    active: true,
    children: "Active button",
  },
};

export const DisabledButton: Story = {
  args: {
    disabled: true,
    children: "Disabled button",
  },
};
