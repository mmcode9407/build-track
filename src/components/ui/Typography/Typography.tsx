import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import type { DefaultTheme } from "styled-components";

import * as S from "./Typography.styled";

type TypographyProps = HTMLAttributes<HTMLElement> & {
  variant?: S.TypographyVariants;
  color?: keyof DefaultTheme["colors"];
  align?: CSSProperties["textAlign"];
  children: ReactNode;
};

const Typography = ({
  variant = "body-1",
  color = "primary",
  align,
  children,
  ...props
}: TypographyProps) => {
  const Tag = S.typographyStyles[variant].tag;

  return (
    <S.StyledTypography
      as={Tag}
      $variant={variant}
      $color={color}
      $align={align}
      {...props}>
      {children}
    </S.StyledTypography>
  );
};

export { Typography };
