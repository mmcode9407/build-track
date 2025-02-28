import { createFileRoute } from "@tanstack/react-router";

import { SignUp } from "@/features/auth/SignUp/SignUp";

export const Route = createFileRoute("/_auth/sign-up")({
  beforeLoad: () => {
    document.title = "Sign Up - BuildTrack";
  },
  component: () => <SignUp />,
});
