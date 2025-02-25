import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { authMutations } from "@/api/auth/auth.mutations";

const useSignIn = () => {
  const navigate = useNavigate();
  const {
    mutate: signIn,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: authMutations.signInMutation,
    onSuccess: () => {
      navigate({ to: "/" });
      console.log("zalogowano pomyslnie");
    },
    onError: (error) => {
      console.error(error.message);
    },
  });

  return { signIn, isPending, isSuccess };
};

export { useSignIn };
