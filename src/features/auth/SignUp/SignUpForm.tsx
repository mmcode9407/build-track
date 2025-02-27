import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import {
  SignUpFormSchema,
  type SignUpFormSchemaType,
} from "@/api/auth/useSignUpMutation";
import { Input } from "@/components/ui/Input/Input";
import { Label } from "@/components/ui/Label/Label";
import { PasswordInput } from "@/components/ui/PasswordInput/PasswordInput";

import { Form } from "../Shared/Form";
import { FormField } from "../Shared/FormField";
import { FormMessage } from "../Shared/FormMessage";
import { SubmitButton } from "../Shared/SubmitButton";

type SignUpFormProps = {
  onSubmit: SubmitHandler<SignUpFormSchemaType>;
  isPending: boolean;
};

const SignUpForm = ({ onSubmit, isPending }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormSchemaType>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      password_confirm: "",
    },
  });
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <Label
          htmlFor="username"
          label="Username"
          isError={!!errors.username}
          isRequired
        />

        <Input
          id="username"
          type="text"
          placeholder="Type your username"
          {...register("username")}
          aria-invalid={!!errors.username}
        />

        <FormMessage>{errors.username?.message}</FormMessage>
      </FormField>

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

        <FormMessage>{errors.email?.message}</FormMessage>
      </FormField>

      <FormField>
        <Label
          htmlFor="password"
          label="Password"
          isError={!!errors.password}
          isRequired
        />

        <PasswordInput
          id="password"
          placeholder="Type your password"
          {...register("password")}
          aria-invalid={!!errors.password}
        />

        <FormMessage>{errors.password?.message}</FormMessage>
      </FormField>

      <FormField>
        <Label
          htmlFor="password_confirm"
          label="Confirm password"
          isError={!!errors.password_confirm}
          isRequired
        />

        <PasswordInput
          id="password_confirm"
          placeholder="Confirm your password"
          {...register("password_confirm")}
          aria-invalid={!!errors.password_confirm}
        />

        <FormMessage>{errors.password_confirm?.message}</FormMessage>
      </FormField>

      <SubmitButton fullWidth label="Sign up" isPending={isPending} />
    </Form>
  );
};

export { SignUpForm };
