import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { ToastContainer } from "@/components/ToastContainer/ToastContainer";
import type { AuthContextValue } from "@/context/AuthContext/AuthContext";

const enableTanstackRouterDevtools = import.meta.env.DEV;
const enableTanstackQueryDevtools = import.meta.env.DEV;

export interface MyRouterContext {
  auth: AuthContextValue;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Outlet />

      <ToastContainer />

      {enableTanstackRouterDevtools && <TanStackRouterDevtools />}
      {enableTanstackQueryDevtools && <ReactQueryDevtools />}
    </>
  ),
});
