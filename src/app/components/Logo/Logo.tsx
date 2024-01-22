import { ComponentPropsWithoutRef } from 'react'

type LogoProps = ComponentPropsWithoutRef<'div'>

export function Logo(props: LogoProps) {
  return (
    <div
      className="text-gray-500 font-black text-xl leading-6 tracking-0.4"
      {...props}
    >
      LOGO
    </div>
  )
}
