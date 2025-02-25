﻿import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

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
      navigate({ to: "/sign-in" });
    },
    onError: (error) => {
      console.error(error.message);
    },
  });

  return { signUp, isPending, isSuccess };
};

export { useSignUp };
