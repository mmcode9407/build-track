import { LucideLoaderCircle } from "lucide-react";
import styled from "styled-components";

import { spin } from "@/styles/animations";

export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex: 1;
`;

export const SpinnerIcon = styled(LucideLoaderCircle)`
  width: 4rem;
  height: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  animation: ${spin} 1s linear infinite;
`;
