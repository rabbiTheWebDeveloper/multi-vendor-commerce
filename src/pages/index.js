import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomeTwo from '@/components/HomeTwo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <HomeTwo/>
  )
}
