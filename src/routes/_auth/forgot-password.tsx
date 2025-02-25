import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/forgot-password")({
  beforeLoad: () => {
    document.title = "Remind your password - BuildTrack";
  },
  component: () => <RouteComponent />,
});

function RouteComponent() {
  return <div>Hello "/_auth/forgot-password"!</div>;
}
