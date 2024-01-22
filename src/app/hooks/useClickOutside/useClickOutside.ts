import React, { useCallback, useEffect } from 'react'

export const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: () => void,
) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback()
      }
    },
    [callback, ref],
  )

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [ref, callback, handleClick])
}
