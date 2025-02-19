import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { Label } from "@/components/ui/Label/Label";

import { Form } from "../Shared/Form";
import { FormField } from "../Shared/FormField";

const SignUpForm = () => {
  return (
    <Form>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input id="username" name="username" type="text" placeholder="Type your username" />
      </FormField>

      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="text" placeholder="Type your email" />
      </FormField>

      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="text" placeholder="Type your password" />
      </FormField>

      <FormField>
        <Label htmlFor="repeatPassword">Repeat Password</Label>
        <Input
          id="repeatPassword"
          name="repeatPassword"
          type="password"
          placeholder="Repeat your password"
        />
      </FormField>

      <Button type="submit" size="sm" width="100%">
        Sign Up
      </Button>
    </Form>
  );
};

export { SignUpForm };
