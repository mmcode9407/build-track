import * as S from "./Progress.styled";

type ProgressProps = {
  value: number;
};

const Progress = ({ value }: ProgressProps) => {
  return (
    <S.Progress>
      <S.ProgressIndicator $value={value} />
    </S.Progress>
  );
};

export { Progress };
