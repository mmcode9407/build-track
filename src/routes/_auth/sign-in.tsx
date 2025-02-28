import { createFileRoute } from "@tanstack/react-router";

import { SignIn } from "@/features/auth/SignIn/SignIn";

export const Route = createFileRoute("/_auth/sign-in")({
  beforeLoad: () => {
    document.title = "Sign In - BuildTrack";
  },
  component: () => <SignIn />,
});
