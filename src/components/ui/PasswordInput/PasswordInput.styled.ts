import { LucideEye, LucideEyeOff } from "lucide-react";
import styled from "styled-components";

import { Button as OwnButton } from "@/components/ui/Button/Button";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Button = styled(OwnButton)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
`;

export const EyeIcon = styled(LucideEye)`
  height: 20px;
  width: 20px;
`;

export const EyeOffIcon = styled(LucideEyeOff)`
  height: 20px;
  width: 20px;
`;
