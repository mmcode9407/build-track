import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { authQueries } from "@/api/auth/auth.queries";

export const useUser = () => {
  const queryClient = useQueryClient();

  const resetUser = () =>
    queryClient.removeQueries({ queryKey: authQueries.me().queryKey });

  const { data: user, error } = useQuery({
    ...authQueries.me(),
  });

  if (error) {
    toast.error(error.message);
    console.error("Error when extracting user data:", error);
  }

  return { user, resetUser };
};
