import type { z } from "zod";

import type { SignUpFormSchema } from "./auth.validators";

export type SignUpFormSchemaType = z.infer<typeof SignUpFormSchema>;
