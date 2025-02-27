import { Button } from "@/components/ui/Button/Button";

import * as S from "./SubmitButton.styled";

type SubmitButtonProps = React.ComponentProps<typeof Button> & {
  label: string;
  isPending: boolean;
};

const SubmitButton = ({
  label,
  isPending,
  size,
  fullWidth,
}: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      size={size}
      fullWidth={fullWidth}
      disabled={isPending}>
      {isPending && <S.LoaderIcon />}

      {label}
    </Button>
  );
};

export { SubmitButton };
