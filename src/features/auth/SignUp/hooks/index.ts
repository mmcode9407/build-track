import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { mutations } from "@/api/auth";
import { supabase } from "@/libs/supabase";

const useSignUp = () => {
  const navigate = useNavigate();
  const {
    mutate: signUp,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: mutations.signUpMutation(supabase),
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
