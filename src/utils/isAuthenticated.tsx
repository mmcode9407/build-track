import { supabaseClient } from "@/libs/supabase/supabaseClient";

export const isAuthenticated = async () => {
  const {
    data: { session },
  } = await supabaseClient.auth.getSession();

  return !!session;
};
