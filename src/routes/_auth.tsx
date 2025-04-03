import { createFileRoute, redirect } from "@tanstack/react-router";

import { AuthLayout } from "@/features/auth/layouts/AuthLayout";

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context }) => {
    console.log("context from _auth:", context.auth);
    if (context.auth.isAuthenticated) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: () => <AuthLayout />,
});
