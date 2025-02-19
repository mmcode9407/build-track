import * as SLink from "@components/ui/Link/Link.styled";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import type { SignInFormSchemaType } from "@/api/auth/auth.types";
import { SignInFormSchema } from "@/api/auth/auth.validators";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { Label } from "@/components/ui/Label/Label";
import { FormMessage } from "@/features/auth/Shared/FormMessage";

import { Form } from "../Shared/Form";
import { FormField } from "../Shared/FormField";
import * as S from "./SignInForm.styled";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormSchemaType>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SignInFormSchemaType> = (values) => {
    // TODO: implement signin api call
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <Label htmlFor="email">Email</Label>

        <Input
          id="email"
          type="text"
          placeholder="Type your email"
          {...register("email")}
          aria-invalid={errors.email ? true : false}
        />

        <FormMessage>{errors.email?.message}</FormMessage>
      </FormField>

      <FormField>
        <S.LabelContainer>
          <Label htmlFor="password">Password</Label>

          <SLink.Link $small to="/forgot-password">
            Forgot your password?
          </SLink.Link>
        </S.LabelContainer>

        <Input
          id="password"
          type="password"
          placeholder="Type your password"
          {...register("password")}
          aria-invalid={errors.password ? true : false}
        />

        <FormMessage>{errors.password?.message}</FormMessage>
      </FormField>

      <Button type="submit" size="sm" width="100%">
        Sign In
      </Button>
    </Form>
  );
};

export { SignInForm };
