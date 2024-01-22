'use client'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@mui/material'

import {
  PasswordField,
  TextField,
  ActiveLink,
  Loader,
  Logo,
} from '@/components'
import {
  loginFormData,
  loginValidationSchema,
} from '@/validations/loginFormValidation'

import { useLogin } from '@/hooks'

const INITIAL_VALUES = {
  email: '',
  password: '',
}

export function LoginPage() {
  const { signIn } = useLogin()

  const methods = useForm<loginFormData>({
    defaultValues: INITIAL_VALUES,
    resolver: zodResolver(loginValidationSchema),
  })

  const {
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = methods

  async function loginUser(data: loginFormData) {
    await signIn({
      data,
      setError,
    })
  }

  return (
    <div className="bg-white md:grid md:grid-cols-2 h-screen">
      <div className="mt-top-120 xl:p-login p-4 md:p-8 sm:h-full  w-full flex flex-col justify-center gap-8">
        <Logo />
        <div className="flex flex-col gap-2">
          <span className="text-gray-900 font-medium text-xl leading-8 tracking-0.15">
            Bem-vindo(a)
          </span>
          <span className="font-normal text-base leading-7 tracking-0.15 text-gray-800">
            Acesse sua conta para iniciar a sessão
          </span>
        </div>
        <FormProvider {...methods}>
          <form
            className="flex flex-col gap-4"
            id="loginForm"
            onSubmit={handleSubmit(loginUser)}
            data-testid="loginForm"
          >
            <fieldset disabled={isSubmitting} className="border-0 m-0 p-0">
              <div className="flex flex-col gap-4">
                <TextField
                  label="E-mail"
                  size="medium"
                  name="email"
                  autoFocus
                />
                <PasswordField
                  label="Senha"
                  type="password"
                  size="medium"
                  name="password"
                />
              </div>

              <ActiveLink href="">Esqueceu sua senha?</ActiveLink>
            </fieldset>
          </form>
        </FormProvider>

        <div>
          <Button
            className="bg-violet-500 text-white normal-case "
            variant="contained"
            size="large"
            type="submit"
            form="loginForm"
            disabled={isSubmitting}
            endIcon={
              isSubmitting && <Loader variant="white" fontSize="small" />
            }
            data-testid="submit"
          >
            Acessar plataforma
          </Button>
        </div>
      </div>
      <div className="bg-violet-500 h-screen md:block hidden" />
    </div>
  )
}
