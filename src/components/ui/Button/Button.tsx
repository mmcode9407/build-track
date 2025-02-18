﻿import type { Button as AriaButton } from "@ariakit/react";
import type { CSSProperties } from "react";

import { type ButtonSizes, type ButtonVariants, StyledButton } from "./Button.styled";

type ButtonProps = React.ComponentProps<typeof AriaButton> & {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  width?: CSSProperties["width"];
  children: React.ReactNode;
};

const Button = ({ children, variant = "primary", size = "md", width, ...props }: ButtonProps) => {
  return (
    <StyledButton $variant={variant} $size={size} $width={width} {...props}>
      {children}
    </StyledButton>
  );
};

export { Button };
