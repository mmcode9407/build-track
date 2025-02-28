import { LucideLoaderCircle } from "lucide-react";
import styled from "styled-components";

export const LoaderIcon = styled(LucideLoaderCircle)`
  width: 16px;
  height: 16px;

  margin-right: ${({ theme }) => theme.margin.sm};
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
