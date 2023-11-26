
import Hero from './components/Hero'
import LeftBar from './components/LeftBar/LeftBar'
import FiltredCategories from './components/Categories/FiltredCategories'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <main className='container mx-auto px-[32px]'>
      <Hero />
      <div className='flex justify-between gap-[32px]'>
        <LeftBar />
        <FiltredCategories/>
      </div>
      <Toaster
      position='top-right'/>
    </main>
  )
}
