import styled from "styled-components";

import { flexCenteredColumn } from "@/styles/helpers";

const FormField = styled.div`
  ${flexCenteredColumn};

  align-items: flex-start;
  gap: ${({ theme }) => theme.gap.md};
  width: 100%;
`;

export { FormField };
