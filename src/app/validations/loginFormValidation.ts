import { z } from 'zod'

export const loginValidationSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'Senha tem mínimo 8 caracteres'),
})

export type loginFormData = z.infer<typeof loginValidationSchema>
