import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import SearchBox from '@/components/SearchBox'
import Providers from './Providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Clone',
  description: 'this is the IMDB Clone Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Header /> 
       
        <Navbar />
        
         <SearchBox /> 
        {children}
        </Providers>
       
        </body>
    </html>
  )
}
