import { paddingX, paddingY } from "@styles/helpers";
import styled from "styled-components";

const Input = styled.input`
  ${paddingX("lg")};
  ${paddingY("md")};

  border: ${({ theme }) => `1px solid ${theme.colors.input}`};
  border-radius: ${({ theme }) => theme.borders["rounded-md"]};
  background-color: ${({ theme }) => theme.colors.background};
  height: 36px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export { Input };
