import { Button as AriaButton } from "@ariakit/react";
import { LucideEye, LucideEyeOff } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";

import { paddingX } from "@/styles/helpers";

import * as S from "./Input.styled";

type InputProps = React.ComponentProps<"input">;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Button = styled(AriaButton)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;

  ${paddingX("md")};

  color: ${({ theme }) => theme.colors.mutedForeground};
  background-color: transparent;

  transition: opacity 0.3s ease-in-out;

  cursor: pointer;

  &:hover {
    opacity: ${({ theme }) => theme.opacity.secondaryHover};
  }
`;

const EyeIcon = styled(LucideEye)`
  height: 20px;
  width: 20px;
`;

const EyeOffIcon = styled(LucideEyeOff)`
  height: 20px;
  width: 20px;
`;

const PasswordInput = ({ ...props }: InputProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  return (
    <Container>
      <S.Input type={passwordVisibility ? "text" : "password"} {...props} />

      <Button
        type="button"
        onClick={() => {
          setPasswordVisibility((prev) => !prev);
        }}>
        {passwordVisibility && <EyeIcon />}

        {!passwordVisibility && <EyeOffIcon />}
      </Button>
    </Container>
  );
};

export { PasswordInput };
