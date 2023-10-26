import * as z from 'zod';

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(2, { message: 'Email must have at least 2 characters' })
    .max(20, { message: 'Too many characters' }),
  password: z
    .string()
    .min(2, { message: 'Password must have at least 2 characters' })
    .max(20, { message: 'Too many characters' }),
  rememberMe: z.boolean().default(true).optional(),
});

export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;

export const ForgotPasswordFormSchema = z.object({
  email: z
    .string()
    .min(2, { message: 'Email must have at least 2 characters' })
    .max(20, { message: 'Too many characters' }),
});

export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordFormSchema>;
