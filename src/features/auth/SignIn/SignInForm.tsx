import * as SLink from "@components/ui/Link/Link.styled";

import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { Label } from "@/components/ui/Label/Label";

import { Form } from "../Shared/Form";
import { FormField } from "../Shared/FormField";
import * as S from "./SignInForm.styled";

const SignInForm = () => {
  return (
    <Form>
      <FormField>
        <Label htmlFor="email">Email</Label>

        <Input id="email" name="email" type="text" placeholder="Type your email" />
      </FormField>

      <FormField>
        <S.LabelContainer>
          <Label htmlFor="password">Password</Label>

          <SLink.Link $small to="/forgot-password">
            Forgot your password?
          </SLink.Link>
        </S.LabelContainer>

        <Input id="password" name="password" type="text" placeholder="Type your password" />
      </FormField>

      <Button type="submit" size="sm" width="100%">
        Sign In
      </Button>
    </Form>
  );
};

export { SignInForm };
