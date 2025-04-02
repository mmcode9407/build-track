import { Separator as AriakitSeparator } from "@ariakit/react";
import styled from "styled-components";

export const Separator = styled(AriakitSeparator)`
  height: 0;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  margin: 0 -${({ theme }) => theme.margin["lg"]};
`;
