import styled from "styled-components";

export const StatusBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.padding.lg};
`;

export const ProgressBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.sm};
  margin-bottom: ${({ theme }) => theme.margin.lg};
`;

export const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TargetPriceBox = styled.div`
  display: flex;
  align-items: end;
  gap: ${({ theme }) => theme.gap.sm};
  margin-bottom: ${({ theme }) => theme.margin.lg};
`;

export const TargetDateBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gap.sm};
`;

export const IconBox = styled.span`
  display: block;
  width: 14px;
  height: 14px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;
