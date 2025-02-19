import * as SCard from "@components/ui/Card/Card.styled";
import * as SLink from "@components/ui/Link/Link.styled";

import AuthPlaceholder from "@/assets/images/auth-placeholder.png";
import { Typography } from "@/components/ui/Typography/Typography";

import * as S from "./SignUp.styled";
import { SignUpForm } from "./SignUpForm";

const SignUp = () => {
  return (
    <>
      <S.InnerContainer>
        <SCard.Card $width="50%">
          <SCard.CardHeader $vertical>
            <Typography variant="h4">Create account</Typography>

            <Typography variant="body-1" color="mutedForeground" align="center">
              Create your account and let's start save money with your BuildTrack
            </Typography>
          </SCard.CardHeader>

          <SCard.CardContent>
            <SignUpForm />
          </SCard.CardContent>

          <SCard.CardFooter>
            <Typography variant="caption" color="mutedForeground">
              Already have an account? <SLink.Link to="/sign-in">Sign In</SLink.Link>
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
