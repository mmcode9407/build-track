import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ToastContainer } from "react-toastify";

const enableTanstackRouterDevtools = import.meta.env.DEV;
const enableTanstackQueryDevtools = import.meta.env.DEV;

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />

      <ToastContainer pauseOnFocusLoss={false} autoClose={3000} />

      {enableTanstackRouterDevtools && <TanStackRouterDevtools />}
      {enableTanstackQueryDevtools && <ReactQueryDevtools />}
    </>
  ),
});
