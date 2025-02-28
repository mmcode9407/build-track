import { createFileRoute, redirect } from "@tanstack/react-router";

import { AppLayout } from "@/features/app/layouts/AppLayout/AppLayout";
import { isAuthenticated } from "@/utils/isAuthenticated";

export const Route = createFileRoute("/_app")({
  beforeLoad: async () => {
    const authenticated = await isAuthenticated();

    if (!authenticated) {
      throw redirect({
        to: "/sign-in",
      });
    }
  },
  component: () => <AppLayout />,
});
