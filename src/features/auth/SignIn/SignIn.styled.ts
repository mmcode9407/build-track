import styled from "styled-components";

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;

  max-width: 758px;
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  border-radius: ${({ theme }) => theme.borders["rounded-xl"]};

  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export { Image, ImageWrapper, InnerContainer };
