import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'

import './globals.css'

export const metadata: Metadata = {
  title: 'Asep Fajar Nugraha',
  description: "Asep Fajar Nugraha's website",
  icons: '/favicon.ico',
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-background font-sans antialiased box-border',
          fontSans.variable
        )}
        suppressHydrationWarning
      >
        <main className="relative">
          {children}
        </main>

        <ToastContainer
          position="top-right"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          closeOnClick
          pauseOnHover
        />
      </body>
    </html>
  )
}
