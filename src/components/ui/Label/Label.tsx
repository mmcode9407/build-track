import * as S from "./Label.styled";

type LabelProps = {
  htmlFor: string;
  label: string;
  isRequired?: boolean;
  isError?: boolean;
};

const Label = ({
  htmlFor,
  label,
  isRequired = false,
  isError = false,
}: LabelProps) => {
  return (
    <S.Label htmlFor={htmlFor} $isError={isError}>
      {label} {isRequired && <S.LabelStar>*</S.LabelStar>}
    </S.Label>
  );
};

export { Label };
