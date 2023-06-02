import './globals.css'
import { Inter } from 'next/font/google'

// components
import Footer from './components/Footer'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kingship Technologies',
  description: 'Cyber Security e-learning platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
