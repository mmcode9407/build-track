import * as S from "./Form.styled";

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  children: React.ReactNode;
};

const Form = ({ children, ...props }: FormProps) => {
  return <S.Form {...props}>{children}</S.Form>;
};

export { Form };
