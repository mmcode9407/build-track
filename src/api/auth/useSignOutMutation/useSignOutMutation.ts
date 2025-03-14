import { useMutation } from "@tanstack/react-query";

import { supabaseClient } from "@/libs/supabase/supabaseClient";

const signOutMutation = async () => {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    throw error;
  }
};

export const useSignOutMutation = () =>
  useMutation({ mutationFn: signOutMutation });
