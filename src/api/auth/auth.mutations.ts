import type { SupabaseClient } from "@supabase/supabase-js";

import type { SignUpMutationArgs } from "@/api/auth/auth.types";

// const BASE_URL = import.meta.env.VITE_BASE_URL;

export const authMutations = {
  signUpMutation: (client: SupabaseClient) => async (data: SignUpMutationArgs) => {
    const { error } = await client.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        // emailRedirectTo: `${BASE_URL}/sign-in`,
        data: {
          username: data.username,
        },
      },
    });

    if (error) {
      throw Error(error.message);
    }
  },
};
