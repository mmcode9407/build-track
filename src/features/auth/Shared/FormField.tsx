import * as S from "./FormField.styled";

type FormFieldProps = {
  children: React.ReactNode;
};

const FormField = ({ children }: FormFieldProps) => {
  return <S.FormField>{children}</S.FormField>;
};

export { FormField };
