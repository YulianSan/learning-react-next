import { ConteinerSlide } from '@/components/conteinerSlide';
import { MovieCard } from '@/components/movieCard';
import { Inter } from 'next/font/google'
import { responseTopRated } from '../interfaces/top_rated_interface';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home'
}

export default async function Home() {
  return (
    <main>
      <ConteinerSlide />
    </main>
  )
}
