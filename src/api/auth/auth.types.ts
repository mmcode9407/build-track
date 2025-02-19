import type { z } from "zod";

import type { SignInFormSchema, SignUpFormSchema } from "./auth.validators";

export type SignUpFormSchemaType = z.infer<typeof SignUpFormSchema>;

export type SignInFormSchemaType = z.infer<typeof SignInFormSchema>;
