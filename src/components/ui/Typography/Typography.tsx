import type { CSSProperties, ReactNode } from "react";
import type { Colors } from "styled-components";

import * as S from "./Typography.styled";

type TypographyProps = {
  variant?: S.TypographyVariants;
  color?: keyof Colors;
  align?: CSSProperties["textAlign"];
  children: ReactNode;
};

const Typography = ({
  variant = "body-1",
  color = "primary",
  align,
  children,
}: TypographyProps) => {
  const Tag = S.typographyStyles[variant].tag;

  return (
    <S.StyledTypography
      as={Tag}
      $variant={variant}
      $color={color}
      $align={align}>
      {children}
    </S.StyledTypography>
  );
};

export { Typography };
