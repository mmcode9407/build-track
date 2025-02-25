import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-toastify";

import { authMutations } from "@/api/auth/auth.mutations";

const useSignUp = () => {
  const navigate = useNavigate();
  const {
    mutate: signUp,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: authMutations.signUpMutation,
    onSuccess: () => {
      toast.success("Sign up successfully");
      navigate({ to: "/sign-in" });
    },
    onError: (error) => {
      toast.error(error.message);
      console.error("Error during signing in: ", error);
    },
  });

  return { signUp, isPending, isSuccess };
};

export { useSignUp };
