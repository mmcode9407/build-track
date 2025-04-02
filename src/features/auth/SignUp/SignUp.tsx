import * as SCard from "@components/ui/Card/Card.styled";
import * as SLink from "@components/ui/Link/Link.styled";
import { useNavigate } from "@tanstack/react-router";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import {
  type SignUpFormSchemaType,
  useSignUpMutation,
} from "@/api/auth/useSignUpMutation";
import AuthPlaceholder from "@/assets/images/auth-placeholder.png";
import { Typography } from "@/components/ui/Typography/Typography";

import * as S from "./SignUp.styled";
import { SignUpForm } from "./SignUpForm";

const SignUp = () => {
  const { mutate: signUp, isPending } = useSignUpMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignUpFormSchemaType> = (values) => {
    signUp(values, {
      onSuccess: () => {
        toast.success("Signed up successfully");
        navigate({ to: "/sign-in" });
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
              Create account
            </Typography>

            <Typography
              variant="body-lg"
              color="mutedForeground"
              align="center">
              Create your account and let's start save money with your
              BuildTrack
            </Typography>
          </SCard.CardHeader>

          <SCard.CardContent>
            <SignUpForm onSubmit={onSubmit} isPending={isPending} />
          </SCard.CardContent>

          <SCard.CardFooter $center>
            <Typography variant="caption" color="mutedForeground">
              Already have an account?{" "}
              <SLink.Link to="/sign-in">Sign In</SLink.Link>
            </Typography>
          </SCard.CardFooter>
        </SCard.Card>

        <S.ImageWrapper>
          <S.Image src={AuthPlaceholder} />
        </S.ImageWrapper>
      </S.InnerContainer>

      <Typography variant="caption">
        By clicking sign up, you agree to our{" "}
        <SLink.Link to="/#" $color="primary">
          Terms of Service
        </SLink.Link>{" "}
        and{" "}
        <SLink.Link to="/#" $color="primary">
          Privacy Policy
        </SLink.Link>
        .
      </Typography>
    </>
  );
};

export { SignUp };
