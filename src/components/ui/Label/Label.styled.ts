import styled from "styled-components";

type LabelProps = {
  $isError: boolean;
};

export const Label = styled.label<LabelProps>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme, $isError }) =>
    $isError ? theme.colors.error : theme.colors.primary};
`;

export const LabelStar = styled.span`
  color: ${({ theme }) => theme.colors.error};
`;
