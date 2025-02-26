import * as SLink from "@components/ui/Link/Link.styled";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import type { SignInFormSchemaType } from "@/api/auth/auth.types";
import { SignInFormSchema } from "@/api/auth/auth.validators";
import { Input } from "@/components/ui/Input/Input";
import { PasswordInput } from "@/components/ui/Input/PasswordInput";
import { Label } from "@/components/ui/Label/Label";
import { FormMessage } from "@/features/auth/Shared/FormMessage";
import { SubmitButton } from "@/features/auth/Shared/SubmitButton";

import { Form } from "../Shared/Form";
import { FormField } from "../Shared/FormField";
import * as S from "./SignInForm.styled";

type SignInFormProps = {
  onSubmit: SubmitHandler<SignInFormSchemaType>;
  isPending: boolean;
};

const SignInForm = ({ onSubmit, isPending }: SignInFormProps) => {
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

        <PasswordInput
          id="password"
          placeholder="Type your password"
          {...register("password")}
          aria-invalid={errors.password ? true : false}
        />

        <FormMessage>{errors.password?.message}</FormMessage>
      </FormField>

      <SubmitButton
        size="sm"
        width="100%"
        label="Sign in"
        isPending={isPending}
      />
    </Form>
  );
};

export { SignInForm };
