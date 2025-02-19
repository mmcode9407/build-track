import * as SCard from "@components/ui/Card/Card.styled";
import * as SLink from "@components/ui/Link/Link.styled";

import AuthPlaceholder from "@/assets/images/auth-placeholder.png";
import { Typography } from "@/components/ui/Typography/Typography";
import { SignInForm } from "@/features/auth/SignIn/SignInForm";

import * as S from "./SignIn.styled";

const SignIn = () => {
  return (
    <>
      <S.InnerContainer>
        <SCard.Card $width="50%">
          <SCard.CardHeader $vertical>
            <Typography variant="h4">Welcome Back</Typography>

            <Typography variant="body-1" color="mutedForeground" align="center">
              Login to your BuildTrack account
            </Typography>
          </SCard.CardHeader>

          <SCard.CardContent>
            <SignInForm />
          </SCard.CardContent>

          <SCard.CardFooter>
            <Typography variant="caption" color="mutedForeground">
              Don't have an account? <SLink.Link to="/sign-up">Sign Up</SLink.Link>
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
