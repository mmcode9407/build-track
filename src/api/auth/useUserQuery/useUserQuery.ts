import { useQuery } from "@tanstack/react-query";

import type { GetUserResponse } from "@/api/auth/useUserQuery/types";
import { supabaseClient } from "@/libs/supabase/supabaseClient";

import { tags } from "./tags";

const getUser = async (): Promise<GetUserResponse> => {
  const { data: authUser, error: authError } =
    await supabaseClient.auth.getUser();

  if (authError) {
    throw authError;
  }

  const { data: user, error } = await supabaseClient
    .from("users")
    .select()
    .eq("id", authUser.user.id)
    .single();

  if (error) {
    throw error;
  }

  return user;
};

export const useUserQuery = () =>
  useQuery({ queryKey: [tags.GET_USER], queryFn: getUser });
