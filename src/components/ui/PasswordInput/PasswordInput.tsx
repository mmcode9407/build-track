import { useState } from "react";

import { Input } from "@/components/ui/Input/Input";

import * as S from "./PasswordInput.styled";

type InputProps = React.ComponentProps<"input">;

const PasswordInput = (props: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleChangeVisibility = () => setIsPasswordVisible((prev) => !prev);

  return (
    <S.Container>
      <Input type={isPasswordVisible ? "text" : "password"} {...props} />

      <S.Button
        variant="icon"
        size="icon"
        onClick={handleChangeVisibility}
        aria-label={isPasswordVisible ? "Hide password" : "Show password"}>
        {isPasswordVisible ? <S.EyeIcon /> : <S.EyeOffIcon />}
      </S.Button>
    </S.Container>
  );
};

export { PasswordInput };
