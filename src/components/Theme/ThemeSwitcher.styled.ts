import { LucideMoon, LucideSun } from "lucide-react";
import styled from "styled-components";

import { Button as OwnButton } from "@/components/ui/Button/Button";

export const Button = styled(OwnButton)`
  position: relative;
  width: 40px;
  height: 40px;
`;

export const SunIcon = styled(LucideSun)`
  position: absolute;
  transition: transform 0.3s ease-out;
  transform: rotate(0) scale(1);

  button[data-state="dark"] & {
    transform: rotate(-90deg) scale(0);
  }
`;

export const MoonIcon = styled(LucideMoon)`
  position: absolute;
  transition: transform 0.3s ease-out;
  transform: rotate(0) scale(1);

  button[data-state="light"] & {
    transform: rotate(90deg) scale(0);
  }
`;
