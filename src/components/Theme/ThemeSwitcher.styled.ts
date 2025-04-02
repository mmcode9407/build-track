import { LucideMoon, LucideSun } from "lucide-react";
import styled, { css } from "styled-components";

import { Button as OwnButton } from "@/components/ui/Button/Button";

export const Button = styled(OwnButton)`
  position: relative;
  width: 40px;
  height: 40px;
`;

const IconStyles = css`
  position: absolute;
  transition: transform 0.3s ease-out;
  transform: rotate(0) scale(1);
`;

export const SunIcon = styled(LucideSun)`
  ${IconStyles}

  button[data-theme="dark"] & {
    transform: rotate(-90deg) scale(0);
  }
`;

export const MoonIcon = styled(LucideMoon)`
  ${IconStyles}

  button[data-theme="light"] & {
    transform: rotate(90deg) scale(0);
  }
`;
