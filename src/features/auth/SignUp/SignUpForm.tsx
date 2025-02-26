import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import type { SignUpFormSchemaType } from "@/api/auth/auth.types";
import { SignUpFormSchema } from "@/api/auth/auth.validators";
import { Input } from "@/components/ui/Input/Input";
import { PasswordInput } from "@/components/ui/Input/PasswordInput";
import { Label } from "@/components/ui/Label/Label";
import { SubmitButton } from "@/features/auth/Shared/SubmitButton";

import { Form } from "../Shared/Form";
import { FormField } from "../Shared/FormField";
import { FormMessage } from "../Shared/FormMessage";

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
        <Label htmlFor="username">Username</Label>

        <Input
          id="username"
          type="text"
          placeholder="Type your username"
          {...register("username")}
          aria-invalid={errors.username ? true : false}
        />

        <FormMessage>{errors.username?.message}</FormMessage>
      </FormField>

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
        <Label htmlFor="password">Password</Label>

        <PasswordInput
          id="password"
          placeholder="Type your password"
          {...register("password")}
          aria-invalid={errors.password ? true : false}
        />

        <FormMessage>{errors.password?.message}</FormMessage>
      </FormField>

      <FormField>
        <Label htmlFor="password_confirm">Repeat Password</Label>

        <PasswordInput
          id="password_confirm"
          placeholder="Confirm your password"
          {...register("password_confirm")}
          aria-invalid={errors.password_confirm ? true : false}
        />

        <FormMessage>{errors.password_confirm?.message}</FormMessage>
      </FormField>

      <SubmitButton
        size="sm"
        width="100%"
        label="Sign up"
        isPending={isPending}
      />
    </Form>
  );
};

export { SignUpForm };
