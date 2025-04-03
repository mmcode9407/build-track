import * as SCard from "@components/ui/Card/Card.styled";
import * as SLink from "@components/ui/Link/Link.styled";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";

import { type SignInFormSchemaType } from "@/api/auth/useSignInMutation";
import AuthPlaceholder from "@/assets/images/auth-placeholder.png";
import { Typography } from "@/components/ui/Typography/Typography";
import { useAuth } from "@/context/AuthContext/AuthContext";

import * as S from "./SignIn.styled";
import { SignInForm } from "./SignInForm";

const SignIn = () => {
  const { signIn, isAuthenticating, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignInFormSchemaType> = async (values) => {
    signIn(values);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: "/" });
    }
  });

  return (
    <>
      <S.InnerContainer>
        <SCard.Card $noBorder>
          <SCard.CardHeader>
            <Typography tag="h2" variant="title-md" align="center">
              Welcome Back
            </Typography>

            <Typography color="mutedForeground" align="center">
              Login to your BuildTrack account
            </Typography>
          </SCard.CardHeader>

          <SCard.CardContent>
            <SignInForm onSubmit={onSubmit} isPending={isAuthenticating} />
          </SCard.CardContent>

          <SCard.CardFooter $center>
            <Typography variant="caption" color="mutedForeground">
              Don't have an account?{" "}
              <SLink.Link to="/sign-up">Sign Up</SLink.Link>
            </Typography>
          </SCard.CardFooter>
        </SCard.Card>

        <S.ImageWrapper>
          <S.Image src={AuthPlaceholder} />
        </S.ImageWrapper>
      </S.InnerContainer>
    </>
  );
};

export { SignIn };
