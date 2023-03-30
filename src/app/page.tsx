'use client'

import { Inter } from 'next/font/google'
import Link from 'next/link';
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [numberIncrement, setNumberIncrement] = useState(0);
  const handleClickButton = ()=>{
    setNumberIncrement( prev => prev + 1);
  }
  useEffect(()=>{
    setNumberIncrement(0)
  }, [])
  
  return (
    <main>
      <h1>{numberIncrement}</h1>
      <button onClick={handleClickButton}>
        Adicionar
      </button>
      <Link href="/home">
        Home
      </Link>
    </main>
  )
}
