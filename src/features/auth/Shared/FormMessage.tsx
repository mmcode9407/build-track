import { Typography } from "@/components/ui/Typography/Typography";

type FormMessageProps = {
  errorMessage: string | undefined;
};

const FormMessage = ({ errorMessage }: FormMessageProps) => {
  return (
    <Typography variant="caption" color="error">
      {errorMessage}
    </Typography>
  );
};

export { FormMessage };
