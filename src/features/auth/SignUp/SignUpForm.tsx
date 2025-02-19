import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import type { SignUpFormSchemaType } from "@/api/auth/auth.types";
import { SignUpFormSchema } from "@/api/auth/auth.validators";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { Label } from "@/components/ui/Label/Label";

import { Form } from "../Shared/Form";
import { FormField } from "../Shared/FormField";
import { FormMessage } from "../Shared/FormMessage";

const SignUpForm = () => {
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

  const onSubmit: SubmitHandler<SignUpFormSchemaType> = (values) => {
    // TODO: implement signup api call
    console.log(values);
  };

  console.log(errors);
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

        <Input
          id="password"
          type="password"
          placeholder="Type your password"
          {...register("password")}
          aria-invalid={errors.password ? true : false}
        />

        <FormMessage>{errors.password?.message}</FormMessage>
      </FormField>

      <FormField>
        <Label htmlFor="password_confirm">Repeat Password</Label>

        <Input
          id="password_confirm"
          type="password"
          placeholder="Confirm your password"
          {...register("password_confirm")}
          aria-invalid={errors.password_confirm ? true : false}
        />

        <FormMessage>{errors.password_confirm?.message}</FormMessage>
      </FormField>

      <Button type="submit" size="sm" width="100%">
        Sign Up
      </Button>
    </Form>
  );
};

export { SignUpForm };
