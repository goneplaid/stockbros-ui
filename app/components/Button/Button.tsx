import React from "react";

export type ButtonVariant =
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "ghost"
  | "link"
  | "glass";

export type ButtonSize = "lg" | "md" | "sm" | "xs";

export type ButtonShape = "wide" | "block" | "circle" | "square";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  outline?: boolean;
  active?: boolean;
  disabled?: boolean;
  noAnimation?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>; // Capture any standard button HTML attributes

const Button: React.FC<ButtonProps> = ({
  variant,
  size = "md",
  shape,
  outline = false,
  active = false,
  disabled = false,
  noAnimation = false,
  children,
  ...rest
}) => {
  const className = [
    "btn",
    variant && variantClasses[variant],
    sizeClasses[size],
    shape && shapeClasses[shape],
    outline && "btn-outline",
    active && "btn-active",
    disabled && "btn-disabled",
    noAnimation && "no-animation",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={className} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;

const variantClasses = {
  neutral: "btn-neutral",
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error",
  ghost: "btn-ghost",
  link: "btn-link",
  glass: "glass",
};

const sizeClasses = {
  lg: "btn-lg",
  md: "btn-md",
  sm: "btn-sm",
  xs: "btn-xs",
};

const shapeClasses = {
  wide: "btn-wide",
  block: "btn-block",
  circle: "btn-circle",
  square: "btn-square",
};
