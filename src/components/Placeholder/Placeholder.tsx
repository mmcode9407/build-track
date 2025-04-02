import type { LucideProps } from "lucide-react";
import { LucideMessageSquareWarning } from "lucide-react";

import { Typography } from "@/components/ui/Typography/Typography";

import * as S from "./Placeholder.styled";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<LucideProps>;
  button?: React.ReactElement<HTMLButtonElement>;
};

export const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button,
}: PlaceholderProps) => {
  return (
    <S.Container>
      {icon}

      <Typography tag="h3" variant="title-md">
        {label}
      </Typography>

      {button && button}
    </S.Container>
  );
};
