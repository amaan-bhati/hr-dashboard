'use client'
import './globals.css'
import { ReactNode, useState } from 'react'

// export const metadata = { title: 'HR Dashboard', description: 'Mini HR Dashboard' }

export default function RootLayout({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <html className={darkMode ? 'dark' : ''}>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">HR Dashboard</h1>
          <button
            onClick={() => setDarkMode((m) => !m)}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}
