import type { SignInMutationArgs, SignUpMutationArgs } from "@/api/auth/auth.types";
import { supabase } from "@/libs/supabase";

export const authMutations = {
  signUpMutation: async (data: SignUpMutationArgs) => {
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          username: data.username,
        },
      },
    });

    if (error) {
      throw Error(error.message);
    }
  },
  signInMutation: async (data: SignInMutationArgs) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      throw Error(error.message);
    }
  },
} as const;
