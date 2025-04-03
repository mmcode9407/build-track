﻿import * as Ariakit from "@ariakit/react";
import { useNavigate, useRouter } from "@tanstack/react-router";
import { LucideLogOut } from "lucide-react";

import { Button } from "@/components/ui/Button/Button";
import * as Slink from "@/components/ui/Link/Link.styled";
import { Separator } from "@/components/ui/Separator/Separator.styled";
import { Typography } from "@/components/ui/Typography/Typography";
import { useAuth } from "@/context/AuthContext/AuthContext";

import * as S from "./UserMenu.styled";

const UserMenu = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const router = useRouter();

  const handleSignOut = async () => {
    signOut();

    await router.invalidate();
    await navigate({ to: "/sign-in" });
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
            // disabled={isSignOutPending}
          >
            <LucideLogOut /> Log out
          </Button>
        </S.MenuItem>
      </S.Menu>
    </Ariakit.MenuProvider>
  );
};

export { UserMenu };
