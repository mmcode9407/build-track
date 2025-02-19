import styled from "styled-components";

import { flexCenteredColumn } from "@/styles/helpers";

const Form = styled.form`
  ${flexCenteredColumn};
  gap: ${({ theme }) => theme.gap["3xl"]};

  width: 100%;
`;

export { Form };
