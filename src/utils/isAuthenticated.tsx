import { supabaseClient } from "@/libs/supabaseClient";

export const isAuthenticated = async () => {
  const {
    data: { session },
  } = await supabaseClient.auth.getSession();

  return !!session;
};
