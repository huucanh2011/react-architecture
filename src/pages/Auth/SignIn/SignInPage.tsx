import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useAuthStore } from '@/store/useAuthStore';
import {
  SignInFormSchema,
  type SignInFormSchemaType,
} from '@/validations/auth';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
import { ModeToggle } from '@/components/ModeToggle';
import { routerPath } from '@/routes/routerPath';

const SignInPage = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore();

  const form = useForm<SignInFormSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      username: '',
      password: '',
      rememberMe: true,
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: SignInFormSchemaType) => {
    console.log(values);
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center">
      <div className="absolute top-2 right-2">
        <ModeToggle />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
        >
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Get access to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <FormControl>
                      <Input
                        id="username"
                        type="text"
                        disabled={isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        type="password"
                        disabled={isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-between gap-x-2">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        id="rememberMe"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel
                      htmlFor="rememberMe"
                      className="text-sm font-medium leading-none space-y-1"
                    >
                      Remember me
                    </FormLabel>
                  </FormItem>
                )}
              />
              <div className="flex items-center space-x-2">
                <Link
                  to={routerPath.forgotPassword}
                  className="text-sm font-medium leading-none hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign In
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignInPage;
