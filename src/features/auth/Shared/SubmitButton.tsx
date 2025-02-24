import { LucideLoaderCircle } from "lucide-react";
import styled from "styled-components";

import { Button } from "@/components/ui/Button/Button";

type SubmitButtonProps = React.ComponentProps<typeof Button> & {
  label: string;
  isPending: boolean;
};

const LoaderIcon = styled(LucideLoaderCircle)`
  width: 16px;
  height: 16px;

  margin-right: 4px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const SubmitButton = ({ label, isPending, size, width }: SubmitButtonProps) => {
  return (
    <Button type="submit" size={size} width={width} disabled={isPending}>
      {isPending && <LoaderIcon />}

      {label}
    </Button>
  );
};

export { SubmitButton };
