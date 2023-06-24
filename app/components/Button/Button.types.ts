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
