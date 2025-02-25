import { queryOptions } from "@tanstack/react-query";

import type { GetMeUserResponse } from "@/api/auth/auth.types";
import { supabase } from "@/libs/supabase";

const getCurrentUser = async (): Promise<GetMeUserResponse> => {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw Error(error.message);
  }

  const mappedUser: GetMeUserResponse = {
    username: data.user.user_metadata.username,
    email: data.user.user_metadata.email,
    id: data.user.user_metadata.sub,
  };

  return mappedUser;
};

export const authQueries = {
  all: () => ["users"],
  me: () =>
    queryOptions({
      queryKey: [...authQueries.all(), "me"],
      queryFn: getCurrentUser,
    }),
} as const;
