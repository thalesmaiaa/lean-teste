import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider, QueryClientProvider } from '@/providers'
import { StyledEngineProvider } from '@mui/material'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'Lean Users',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <StyledEngineProvider injectFirst>
        <ThemeProvider>
          <QueryClientProvider>
            <body className="h-full !pr-0">
              <Toaster
                richColors
                duration={2000}
                position="top-center"
                expand={false}
              />
              {children}
            </body>
          </QueryClientProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </html>
  )
}
