import * as SCard from "@components/ui/Card/Card.styled";
import * as SLink from "@components/ui/Link/Link.styled";
import { useNavigate } from "@tanstack/react-router";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import {
  type SignInFormSchemaType,
  useSignInMutation,
} from "@/api/auth/useSignInMutation";
import AuthPlaceholder from "@/assets/images/auth-placeholder.png";
import { Typography } from "@/components/ui/Typography/Typography";

import * as S from "./SignIn.styled";
import { SignInForm } from "./SignInForm";

const SignIn = () => {
  const { mutate: signIn, isPending } = useSignInMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignInFormSchemaType> = (values) => {
    signIn(values, {
      onSuccess: () => {
        toast.success("Signed in successfully");
        navigate({ to: "/" });
      },
      onError: (error) => {
        toast.error(error.message);
        console.error("Error during signing in: ", error);
      },
    });
  };

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
            <SignInForm onSubmit={onSubmit} isPending={isPending} />
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
