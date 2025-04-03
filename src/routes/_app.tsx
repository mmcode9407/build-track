import { createFileRoute, redirect } from "@tanstack/react-router";

import { AppLayout } from "@/features/app/layouts/AppLayout/AppLayout";

export const Route = createFileRoute("/_app")({
  beforeLoad: ({ context }) => {
    console.log("context from _app:", context.auth);
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/sign-in",
      });
    }
  },
  component: () => <AppLayout />,
});
