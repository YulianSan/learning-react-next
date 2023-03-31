import { MovieCard } from '@/components/movieCard';
import { SlideMovie } from '@/components/slideMovie';
import { Inter } from 'next/font/google'
import { responseTopRated } from '../interfaces/top_rated_interface';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home'
}

export default async function Home() {
  return (
    <main>
      {/* @ts-expect-error*/}
      <SlideMovie />
    </main>
  )
}
