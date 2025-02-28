import { useMutation } from "@tanstack/react-query";

import { supabaseClient } from "@/libs/supabaseClient";

import type { SignUpMutationArgs } from "./types";

const signUpMutation = async (credentials: SignUpMutationArgs) => {
  const { error } = await supabaseClient.auth.signUp({
    ...credentials,
    options: {
      data: {
        username: credentials.username,
      },
    },
  });

  if (error) {
    throw error;
  }
};

export const useSignUpMutation = () =>
  useMutation({ mutationFn: signUpMutation });
