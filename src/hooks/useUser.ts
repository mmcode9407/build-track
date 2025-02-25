import { useQuery, useQueryClient } from "@tanstack/react-query";

import { authQueries } from "@/api/auth/auth.queries";

export const useUser = () => {
  const queryClient = useQueryClient();

  const resetUser = () => queryClient.removeQueries({ queryKey: authQueries.me().queryKey });

  const { data: user } = useQuery({
    ...authQueries.me(),
  });

  return { user, resetUser };
};
