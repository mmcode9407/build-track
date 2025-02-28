import * as S from "./Input.styled";

type InputProps = React.ComponentProps<"input">;

const Input = ({ type, ...props }: InputProps) => {
  return <S.Input type={type} {...props} />;
};

export { Input };
