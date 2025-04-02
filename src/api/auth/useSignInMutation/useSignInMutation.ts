import { useMutation } from "@tanstack/react-query";

import { supabaseClient } from "@/libs/supabase/supabaseClient";

import type { SignInMutationArgs } from "./types";

const signInMutation = async (credentials: SignInMutationArgs) => {
  const { error } = await supabaseClient.auth.signInWithPassword(credentials);

  if (error) {
    throw error;
  }
};

export const useSignInMutation = () =>
  useMutation({ mutationFn: signInMutation });
