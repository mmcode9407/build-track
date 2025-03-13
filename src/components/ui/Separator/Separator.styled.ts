import { Separator as AriakitSeparator } from "@ariakit/react";
import styled from "styled-components";

export const Separator = styled(AriakitSeparator)`
  height: 0px;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  margin-right: -8px;
  margin-left: -8px;
`;
