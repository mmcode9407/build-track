import styled from "styled-components";

import { flexCenteredRow } from "@/styles/helpers";

const InnerContainer = styled.div`
  ${flexCenteredRow};

  max-width: 758px;
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  border-radius: ${({ theme }) => theme.borders["rounded-xl"]};

  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 50%;
  height: 100%;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export { Image, ImageWrapper, InnerContainer };
