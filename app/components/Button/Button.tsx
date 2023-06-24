import React from "react";
import { ButtonProps } from "./Button.types";
import { shapeClasses, sizeClasses, variantClasses } from "./Button.styles";

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
