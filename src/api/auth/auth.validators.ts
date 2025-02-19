import { z } from "zod";

const SignUpFormSchema = z
  .object({
    username: z.string().min(2, "Username is required"),
    email: z.string().min(1, "Email is required").email("Email is invalid"),
    password: z.string().min(1, "Password is required").min(8, "Password is too short."),
    password_confirm: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.password_confirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords does not match",
        path: ["password_confirm"],
      });
    }
  });

export { SignUpFormSchema };
