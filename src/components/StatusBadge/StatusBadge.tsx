import type { StatusType } from "./constants";
import { STATUS_ICONS, STATUS_LABELS } from "./constants";
import * as S from "./StatusBadge.styled";

type StatusBadgeProps = {
  status: StatusType;
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <S.Container $status={status}>
      <S.IconBox>{STATUS_ICONS[status]}</S.IconBox>

      <S.StatusLabel>{STATUS_LABELS[status]}</S.StatusLabel>
    </S.Container>
  );
};

export { StatusBadge };
