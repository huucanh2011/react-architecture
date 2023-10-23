import * as z from 'zod';

export const SignInFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Username must have at least 2 characters' })
    .max(20, { message: 'Too many characters' }),
  password: z
    .string()
    .min(2, { message: 'Password must have at least 2 characters' })
    .max(20, { message: 'Too many characters' }),
  rememberMe: z.boolean().default(true).optional(),
});

export type SignInFormSchemaType = z.infer<typeof SignInFormSchema>;
