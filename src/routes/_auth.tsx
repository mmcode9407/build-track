import { createFileRoute, redirect } from "@tanstack/react-router";

import { AuthLayout } from "@/features/auth/layouts/AuthLayout";
import { isAuthenticated } from "@/utils/isAuthenticated";

export const Route = createFileRoute("/_auth")({
  beforeLoad: async () => {
    const authenticated = await isAuthenticated();

    if (authenticated) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: () => <AuthLayout />,
});
