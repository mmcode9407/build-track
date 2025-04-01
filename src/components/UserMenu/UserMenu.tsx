import * as Ariakit from "@ariakit/react";
import { useNavigate } from "@tanstack/react-router";
import { LucideLogOut } from "lucide-react";

import { useSignOutMutation } from "@/api/auth/useSignOutMutation";
import { useUserQuery } from "@/api/auth/useUserQuery";
import { Button } from "@/components/ui/Button/Button";
import * as Slink from "@/components/ui/Link/Link.styled";
import { Separator } from "@/components/ui/Separator/Separator.styled";
import { Typography } from "@/components/ui/Typography/Typography";

import * as S from "./UserMenu.styled";

const UserMenu = () => {
  const { data: user } = useUserQuery();
  const { mutate: signOut, isPending } = useSignOutMutation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    signOut();
    navigate({ to: "/sign-in" });
  };

  return (
    <Ariakit.MenuProvider placement="bottom-end">
      <S.MenuButton>{user?.username.slice(0, 1).toUpperCase()}</S.MenuButton>

      <S.Menu gutter={8}>
        <S.MenuHeader>
          <Typography variant="subtitle-lg">{user?.username}</Typography>

          <Typography variant="body-sm" color="mutedForeground">
            {user?.email}
          </Typography>
        </S.MenuHeader>

        <Separator />

        <S.MenuItem>
          <Slink.Link>Settings</Slink.Link>
        </S.MenuItem>

        <Separator />

        <S.MenuItem>
          <Button
            variant="link"
            onClick={handleSignOut}
            fullWidth
            disabled={isPending}>
            <LucideLogOut /> Log out
          </Button>
        </S.MenuItem>
      </S.Menu>
    </Ariakit.MenuProvider>
  );
};

export { UserMenu };
