import { Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { routerPath } from '@/routes/routerPath';
import {
  ForgotPasswordFormSchema,
  ForgotPasswordSchemaType,
} from '@/validations/auth';

const ForgotPasswordContainer = () => {
  const { t } = useTranslation();

  const form = useForm<ForgotPasswordSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(ForgotPasswordFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: ForgotPasswordSchemaType) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] px-4"
      >
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Reset your password
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter the email address associated with your account and we'll send
            you a link to reset your password.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">{t('field.email')}</FormLabel>
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
        </div>
        <div>
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {t('btn.continue')}
          </Button>
        </div>
        <div className="flex justify-center">
          <Link
            to={routerPath.login}
            className="text-sm font-medium leading-none hover:underline"
          >
            {t('btn.return_to_sign_in')}
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default ForgotPasswordContainer;
