'use client'

import React from 'react'
import { CssBaseline, createTheme } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { NextAppDirEmotionCacheProvider } from './EmotionCache'

const theme = createTheme({
  typography: {
    fontFamily: `"Lato", sans-serif`,
    h5: {
      fontFamily: `"Roboto", sans-serif`,
    },
  },
  palette: {
    error: {
      main: '#E53E3E',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #0000003B',
            },
          },
        },
        notchedOutline: {
          border: '1px solid #0000003B',
          '&:hover': {
            border: '1px solid red',
          },
        },
      },
    },
  },
})

type ThemeProviderProps = {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextAppDirEmotionCacheProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
