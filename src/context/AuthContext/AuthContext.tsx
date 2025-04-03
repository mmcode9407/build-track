import { createContext, useContext, useMemo } from "react";
import { useCallback } from "react";
import { toast } from "react-toastify";

import type { SignInFormSchemaType } from "@/api/auth/useSignInMutation";
import { useSignInMutation } from "@/api/auth/useSignInMutation";
import { useSignOutMutation } from "@/api/auth/useSignOutMutation";
import type { GetUserResponse } from "@/api/auth/useUserQuery";
import { useUserQuery } from "@/api/auth/useUserQuery";

type AuthProviderProps = {
  children: React.ReactNode;
};

export type AuthContextValue = {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  user: GetUserResponse | null;
  signOut: VoidFunction;
  signIn: (values: SignInFormSchemaType) => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data: user, isSuccess: isUserSuccess } = useUserQuery();

  const { mutate: login, isPending: isSigningIn } = useSignInMutation();
  const { mutate: logout, isPending: isSigningOut } = useSignOutMutation();

  const signIn = useCallback(
    (values: SignInFormSchemaType) => {
      login(values, {
        onSuccess: () => {
          toast.success("Signed in successfully");
        },
        onError: (error) => {
          toast.error(error.message);
          console.error("Error during signing in: ", error);
        },
      });
    },
    [login],
  );

  const signOut = useCallback(() => {
    logout();
  }, [logout]);

  const value: AuthContextValue = useMemo(
    () => ({
      isAuthenticated: !!user && isUserSuccess,
      isAuthenticating: isSigningIn || isSigningOut,
      user: user ? user : null,
      signOut,
      signIn,
    }),
    [isSigningIn, isSigningOut, isUserSuccess, user, signIn, signOut],
  );

  console.log("value from AuthProvider:", value);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
