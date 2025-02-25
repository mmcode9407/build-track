import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-toastify";

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
      toast.success("Sign in successfully");
      navigate({ to: "/" });
    },
    onError: (error) => {
      toast.error(error.message);
      console.error("Error during signing in: ", error);
    },
  });

  return { signIn, isPending, isSuccess };
};

export { useSignIn };
