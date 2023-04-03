import { ConteinerSlide } from '@/components/conteinerSlide';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home'
}

export default async function Home() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <ConteinerSlide/>
    </>
  )
}
