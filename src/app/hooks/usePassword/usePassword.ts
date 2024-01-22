import { useCallback, useState } from 'react'

export const usePassword = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = useCallback(() => setShowPassword((x) => !x), [])

  const inputType = showPassword ? 'text' : 'password'

  return {
    togglePassword,
    showPassword,
    inputType,
  }
}
