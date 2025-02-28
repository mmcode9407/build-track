import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { useUserQuery } from "@/api/auth/useUserQuery";
import { Button } from "@/components/ui/Button/Button";
import { supabaseClient } from "@/libs/supabaseClient";

export const Route = createFileRoute("/_app/")({
  beforeLoad: () => {
    document.title = "Dashboard - BuildTrack";
  },
  component: () => <Dashboard />,
});

const Dashboard = () => {
  const { data: user } = useUserQuery();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabaseClient.auth.signOut();
    navigate({ to: "/sign-in" });
  };

  return (
    <div>
      <div>
        <h1>Dashboard</h1>
      </div>

      <div>
        <pre>{JSON.stringify(user)}</pre>
      </div>

      <Button onClick={handleSignOut}>Sign out</Button>
    </div>
  );
};
