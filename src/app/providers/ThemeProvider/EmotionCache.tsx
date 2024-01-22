/* eslint-disable no-unused-vars */

'use client'

import * as React from 'react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

export type NextAppDirEmotionCacheProviderProps = {
  children: React.ReactNode
}

const cache = createCache({
  key: 'css',
  prepend: true,
})

export function NextAppDirEmotionCacheProvider({
  children,
}: NextAppDirEmotionCacheProviderProps) {
  return <CacheProvider value={cache}>{children}</CacheProvider>
}
