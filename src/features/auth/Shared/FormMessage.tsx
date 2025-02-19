import { Typography } from "@/components/ui/Typography/Typography";

type FormMessageProps = {
  children: React.ReactNode;
};

const FormMessage = ({ children }: FormMessageProps) => {
  return (
    <Typography variant="caption" color="error">
      {children}
    </Typography>
  );
};

export { FormMessage };
