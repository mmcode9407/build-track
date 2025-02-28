import { z } from "zod";

export const SignInFormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Email is invalid"),
  password: z
    .string()
    .min(1, "Password is required.")
    .min(8, "Password must contain at least 8 characters.")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
      "Password must contain lowercase and uppercase letters, a digit, and a special character",
    ),
});

export type SignInFormSchemaType = z.infer<typeof SignInFormSchema>;
export type SignInMutationArgs = z.infer<typeof SignInFormSchema>;
