import Link, { LinkProps } from 'next/link'
import { twMerge } from 'tailwind-merge'

type ActiveLinkProps = LinkProps & {
  children: React.ReactNode
}

export function ActiveLink({ children, href, ...rest }: ActiveLinkProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        'text-violet-500 font-normal text-base leading-6 tracking-0.15 no-underline hover:underline',
      )}
      {...rest}
    >
      {children}
    </Link>
  )
}
