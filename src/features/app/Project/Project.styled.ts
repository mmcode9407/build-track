import styled from "styled-components";

import { flexCenteredRow, paddingX, paddingY } from "@/styles/helpers";
import { breakpointConfig } from "@/styles/themeConfig";

export const Section = styled.section`
  ${paddingX("3xl")};
  ${paddingY("3xl")};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xl};
`;

export const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SectionTitle = styled.div`
  ${flexCenteredRow}
  gap: ${({ theme }) => theme.gap.md};
  color: ${({ theme }) => theme.colors.primary};
`;

export const ProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 320px));
  justify-content: center;
  gap: ${({ theme }) => theme.gap.lg};

  @media (min-width: ${breakpointConfig.mobile}) {
    grid-template-columns: repeat(2, minmax(0, 320px));
  }

  @media (min-width: ${breakpointConfig.laptop}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
