import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
const poppins = Poppins({ weight: ['400', '600', '800'], subsets: ['latin'] })

export const metadata = {
  title: 'BR Dev Streamers',
  description: 'A list of Brazilian developers who stream on Twitch',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-gray-950">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
