import type { Button as AriaButton } from "@ariakit/react";

import * as S from "./Button.styled";

type ButtonProps = React.ComponentProps<typeof AriaButton> & {
  variant?: S.ButtonVariants;
  size?: S.ButtonSizes;
  fullWidth?: boolean;
};

const Button = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      {...props}
    />
  );
};

export { Button };
