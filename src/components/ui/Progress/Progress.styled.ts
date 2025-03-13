import styled from "styled-components";

type ProgressIndicatorProps = {
  $value: number;
};

export const Progress = styled.div`
  position: relative;
  height: 6px;
  width: 100%;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borders["rounded-full"]};
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ProgressIndicator = styled.div<ProgressIndicatorProps>`
  height: 100%;
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  transform: ${({ $value }) => `translateX(-${100 - ($value || 0)}%)`};
  transition: all 150ms ease-in-out;
`;
