import { z } from "zod";

const SignUpFormSchema = z
  .object({
    username: z.string().min(3, "Username must contain at least 3 characters."),
    email: z.string().min(1, "Email is required.").email("Email is invalid."),
    password: z
      .string()
      .min(1, "Password is required.")
      .min(8, "Password must contain at least 8 characters.")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
        "Password must contain lowercase and uppercase letters, a digit, and a special character",
      ),
    password_confirm: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.password_confirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match.",
        path: ["password_confirm"],
      });
    }
  });

const SignInFormSchema = z.object({
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

export { SignInFormSchema, SignUpFormSchema };
