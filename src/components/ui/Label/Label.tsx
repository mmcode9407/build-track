import * as S from "./Label.styled";

type LabelProps = React.ComponentProps<"label">;

const Label = (props: LabelProps) => {
  return <S.Label {...props} />;
};

export { Label };
