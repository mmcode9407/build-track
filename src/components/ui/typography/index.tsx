import type { CSSProperties, ReactNode } from "react";

import type { theme } from "../../../styles/theme";
import * as S from "./styled";

type TypographyProps = {
  variant?: S.TypographyVariants;
  children: ReactNode;
  color?: keyof typeof theme.colors;
};

const Typography = ({ variant = "body-1", children, color }: TypographyProps & CSSProperties) => {
  const Tag = S.typographyStyles[variant].tag;

  return (
    <S.StyledTypography as={Tag} variant={variant} color={color}>
      {children}
    </S.StyledTypography>
  );
};

export { Typography };
