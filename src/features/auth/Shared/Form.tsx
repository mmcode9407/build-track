import * as S from "./Form.styled";

type FormProps = {
  children: React.ReactNode;
};

const Form = ({ children }: FormProps) => {
  return <S.Form>{children}</S.Form>;
};

export { Form };
