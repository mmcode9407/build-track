import { Typography } from "@/components/ui/Typography/Typography";

type FormMessageProps = {
  errorMessage?: string;
};

const FormMessage = ({ errorMessage }: FormMessageProps) => {
  return (
    <Typography tag="span" variant="caption" color="error" aria-live="polite">
      {errorMessage}
    </Typography>
  );
};

export { FormMessage };
