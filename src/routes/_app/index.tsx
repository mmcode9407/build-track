import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { Button } from "@/components/ui/Button/Button";
import { useUser } from "@/hooks/useUser";
import { supabase } from "@/libs/supabase";

export const Route = createFileRoute("/_app/")({
  beforeLoad: () => {
    document.title = "Dashboard - BuildTrack";
  },
  component: () => <Dashboard />,
});

const Dashboard = () => {
  const { user, resetUser } = useUser();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    resetUser();
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
