import { Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
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
import { LoginFormSchema, type LoginFormSchemaType } from '@/validations/auth';
import { Checkbox } from '@/components/ui/checkbox';
import { routerPath } from '@/routes/routerPath';

const LoginContainer = () => {
  const { t } = useTranslation();
  const { isAuthenticated, setIsAuthenticated } = useAuthStore();

  const form = useForm<LoginFormSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: true,
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: LoginFormSchemaType) => {
    console.log(values);
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] px-4"
      >
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Sign in to your account
          </h1>
          <p className="text-sm text-muted-foreground">
            Get access to your account
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
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
                {t('auth.forgot_password')}?
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {t('btn.continue')}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginContainer;
