import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button"; // Adjust this import to your file structure
import { ButtonShape, ButtonSize, ButtonVariant } from "./Button.types"; // Adjust this import to your file structure

describe("Button", () => {
  test("renders button correctly", () => {
    render(<Button>Test Button</Button>);
    const buttonElement = screen.getByRole("button", { name: /Test Button/i });
    expect(buttonElement).toBeInTheDocument();
  });

  describe("Button variants", () => {
    const variants: ButtonVariant[] = [
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
    ];

    variants.forEach((variant: ButtonVariant) => {
      test(`renders correct class for ${variant} variant`, () => {
        const isGlass = variant === "glass";
        render(<Button variant={variant}>Test Button</Button>);
        const buttonElement = screen.getByRole("button", {
          name: /Test Button/i,
        });
        expect(buttonElement).toHaveClass(isGlass ? "glass" : `btn-${variant}`);
      });
    });
  });

  describe("Button sizes", () => {
    const sizes: ButtonSize[] = ["lg", "md", "sm", "xs"];

    sizes.forEach((size: ButtonSize) => {
      test(`renders correct class for ${size} size`, () => {
        render(<Button size={size}>Test Button</Button>);
        const buttonElement = screen.getByRole("button", {
          name: /Test Button/i,
        });
        expect(buttonElement).toHaveClass(`btn-${size}`);
      });
    });
  });

  describe("Button shapes", () => {
    const shapes: ButtonShape[] = ["wide", "block", "circle", "square"];

    shapes.forEach((shape: ButtonShape) => {
      test(`renders correct class for ${shape} shape`, () => {
        render(<Button shape={shape}>Test Button</Button>);
        const buttonElement = screen.getByRole("button", {
          name: /Test Button/i,
        });
        expect(buttonElement).toHaveClass(`btn-${shape}`);
      });
    });
  });

  test("renders correct class for outline", () => {
    render(<Button outline>Test Button</Button>);
    const buttonElement = screen.getByRole("button", { name: /Test Button/i });
    expect(buttonElement).toHaveClass("btn-outline");
  });

  test("renders correct class for active state", () => {
    render(<Button active>Test Button</Button>);
    const buttonElement = screen.getByRole("button", { name: /Test Button/i });
    expect(buttonElement).toHaveClass("btn-active");
  });

  test("renders correct class for disabled state", () => {
    render(<Button disabled>Test Button</Button>);
    const buttonElement = screen.getByRole("button", { name: /Test Button/i });
    expect(buttonElement).toHaveClass("btn-disabled");
    expect(buttonElement).toBeDisabled();
  });

  test("renders correct class for noAnimation", () => {
    render(<Button noAnimation>Test Button</Button>);
    const buttonElement = screen.getByRole("button", { name: /Test Button/i });
    expect(buttonElement).toHaveClass("no-animation");
  });
});
