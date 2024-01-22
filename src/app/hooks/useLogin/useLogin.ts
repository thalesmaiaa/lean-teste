import { userMock } from '@/mock/user'
import { loginFormData } from '@/validations/loginFormValidation'
import { useRouter } from 'next/navigation'
import { FieldValues, UseFormSetError } from 'react-hook-form'
import { toast } from 'sonner'
import { useLocalStorage } from '..'

type signInProps = {
  data: loginFormData
  setError: UseFormSetError<{
    email: FieldValues['email']
    password: FieldValues['password']
  }>
}

export const useLogin = () => {
  const router = useRouter()

  const [, setAuthenticated] = useLocalStorage('@leanUsers', 'false')

  async function signIn({ data, setError }: signInProps) {
    // Simulate a request to the API with a delay of 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
      const matchEmail = data.email === userMock.email
      const matchPassword = data.password === userMock.password

      const validUser = matchEmail && matchPassword

      if (validUser) {
        toast.success('Login realizado com sucesso!', {
          duration: 2000,
          onAutoClose: () => {
            router.push('/')
            setAuthenticated('true')
          },
        })

        return validUser
      }

      if (!matchEmail) {
        setError('email', {
          type: 'manual',
          message: 'Email não encontrado. Confira e tente novamente.',
        })
      }

      if (!matchPassword) {
        setError('password', {
          type: 'manual',
          message: 'Senha incorreta. Por favor, verifique e tente novamente.',
        })
      }

      toast.error('Credenciais inválidas!', {
        duration: 2000,
      })
    })
  }

  return {
    signIn,
  }
}
