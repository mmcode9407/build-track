import * as SLink from "@components/ui/Link/Link.styled";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import {
  SignInFormSchema,
  type SignInFormSchemaType,
} from "@/api/auth/useSignInMutation";
import { Input } from "@/components/ui/Input/Input";
import { Label } from "@/components/ui/Label/Label";
import { PasswordInput } from "@/components/ui/PasswordInput/PasswordInput";

import { Form } from "../Shared/Form";
import { FormField } from "../Shared/FormField";
import { FormMessage } from "../Shared/FormMessage";
import { SubmitButton } from "../Shared/SubmitButton";
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
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <Label
          htmlFor="email"
          label="Email"
          isError={!!errors.email}
          isRequired
        />

        <Input
          id="email"
          type="text"
          placeholder="Type your email"
          {...register("email")}
          aria-invalid={!!errors.email}
        />

        <FormMessage errorMessage={errors.email?.message} />
      </FormField>

      <FormField>
        <S.LabelContainer>
          <Label
            htmlFor="password"
            label="Password"
            isError={!!errors.password}
            isRequired
          />

          <SLink.Link $small to="/forgot-password">
            Forgot your password?
          </SLink.Link>
        </S.LabelContainer>

        <PasswordInput
          id="password"
          placeholder="Type your password"
          {...register("password")}
          aria-invalid={!!errors.password}
        />

        <FormMessage errorMessage={errors.password?.message} />
      </FormField>

      <SubmitButton fullWidth label="Sign in" isPending={isPending} />
    </Form>
  );
};

export { SignInForm };
