'use client'

import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { InputAdornment, TextField as MUITextField } from '@mui/material'
import { usePassword } from '@/hooks'

import { RemoveRedEye, VisibilityOff } from '@mui/icons-material'
import { Controller, useFormContext } from 'react-hook-form'

type TextFieldProps = ComponentProps<typeof MUITextField> & {
  name: string
}

const Field = forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => {
  return (
    <MUITextField
      InputProps={{
        className: twMerge('flex w-full items-center'),
      }}
      inputProps={{
        className: twMerge(
          'py-4 px-3 text-black-textPrimary text-base leading-6 tracking-0.15',
          'focus-visble:outline-none',
        ),
        'data-testid': props.name,
      }}
      InputLabelProps={{
        className:
          'text-gray-800 font-normal text-base leading-6 tracking-0.15',
      }}
      FormHelperTextProps={{
        className: 'absolute text-red-error top-full',
      }}
      sx={{
        '& fieldset': { border: '1px solid #0000003B' },
      }}
      className="rounded-4 focus:outline-none mb-6"
      autoComplete="off"
      {...props}
      ref={ref}
    />
  )
})

Field.displayName = 'Field'

export function TextField({ name, ...rest }: TextFieldProps) {
  const { control, formState } = useFormContext()

  const { errors } = formState

  const isError = !!errors[name]
  const errorMessage = (errors[name]?.message as string) || ''

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <Field
            {...field}
            {...rest}
            helperText={<>{errorMessage as string}</>}
            FormHelperTextProps={{
              id: `${name}-helperText`,
            }}
            error={isError}
          />
        )
      }}
    />
  )
}

export function PasswordField({ InputProps, name, ...rest }: TextFieldProps) {
  const { showPassword, togglePassword, inputType } = usePassword()
  const { control, formState } = useFormContext()

  const { errors } = formState

  const errorMessage = errors[name]?.message

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Field
          {...rest}
          {...field}
          type={inputType}
          InputProps={{
            ...InputProps,
            endAdornment: (
              <InputAdornment position="end" onClick={togglePassword}>
                {showPassword && <RemoveRedEye />}
                {!showPassword && <VisibilityOff />}
              </InputAdornment>
            ),
          }}
          helperText={<>{errorMessage as string}</>}
          error={!!errorMessage}
        />
      )}
    />
  )
}
