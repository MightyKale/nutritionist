import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nutritionist',
  description: 'modern business landing page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className='relative overflow-hidden'>{children}</main>
        <Footer />
        </body>
    </html>
  )
}
