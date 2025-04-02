import * as Ariakit from "@ariakit/react";
import styled from "styled-components";

import { paddingX, paddingY } from "@/styles/helpers";

export const MenuButton = styled(Ariakit.MenuButton)`
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borders["rounded-full"]};
  background: none;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Menu = styled(Ariakit.Menu)`
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.popover};
  display: flex;
  flex-direction: column;
  max-height: var(--popover-available-height);
  min-width: 180px;
  background-color: ${({ theme }) => theme.colors.popover};
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: ${({ theme }) => theme.borders["rounded-lg"]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.padding.md};
  overflow: hidden;
`;

export const MenuHeader = styled.div`
  ${paddingX("lg")}
  ${paddingY("md")}
`;

export const MenuItem = styled(Ariakit.MenuItem)`
  ${paddingX("lg")}
  ${paddingY("md")}
`;
