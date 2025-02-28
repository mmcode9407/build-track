import { useQuery } from "@tanstack/react-query";

import { supabaseClient } from "@/libs/supabaseClient";

import { tags } from "./tags";
import type { GetMeUserResponse } from "./types";

const getUser = async (): Promise<GetMeUserResponse> => {
  const { data, error } = await supabaseClient.auth.getUser();

  if (error) {
    throw error;
  }

  const mappedUser: GetMeUserResponse = {
    username: data.user.user_metadata.username,
    email: data.user.user_metadata.email,
    id: data.user.user_metadata.sub,
  };

  return mappedUser;
};

export const useUserQuery = () =>
  useQuery({ queryKey: [tags.GET_USER], queryFn: getUser });
