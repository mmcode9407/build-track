import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

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

const AppLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
