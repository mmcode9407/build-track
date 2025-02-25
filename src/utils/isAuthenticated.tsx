import { supabase } from "@/libs/supabase";

export const isAuthenticated = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return !!session;
};
