import { createFileRoute } from "@tanstack/react-router";

import { Project } from "@/features/app/Project/Project";

export const Route = createFileRoute("/_app/")({
  beforeLoad: () => {
    document.title = "My projects - BuildTrack";
  },
  component: () => <Project />,
});
