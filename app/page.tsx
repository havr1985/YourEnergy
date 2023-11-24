import Image from 'next/image'
import Hero from './components/Hero'
import LeftBar from './components/LeftBar/LeftBar'
import FiltredCategories from './components/Categories/FiltredCategories'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='flex justify-between gap-[32px]'>
        <LeftBar />
        <FiltredCategories/>
      </div>
    </main>
  )
}
