import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import type { DefaultTheme } from "styled-components";

import * as S from "./Typography.styled";

type TypographyProps = HTMLAttributes<HTMLElement> & {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  variant?: S.TypographyVariants;
  color?: keyof DefaultTheme["colors"];
  align?: CSSProperties["textAlign"];
  children: ReactNode;
};

const Typography = ({
  tag = "p",
  variant = "body-lg",
  color = "primary",
  align,
  children,
  ...props
}: TypographyProps) => {
  return (
    <S.StyledTypography
      as={tag}
      $variant={variant}
      $color={color}
      $align={align}
      {...props}>
      {children}
    </S.StyledTypography>
  );
};

export { Typography };
