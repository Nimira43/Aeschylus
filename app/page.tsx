import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import LandingImage from '../assets/hero.svg' 

export default function Home() {
  return (
    <main>
      <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6'>
        <h1 className='logo text-main text-3xl'>Forum Vitae</h1>
      </header>
      <section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr, 400px] items-center'>
        <div>
          <h1 className='capitialize text-4xl md:text-7xl font-medium'>
            Find
            <span className='text-main'> Your </span>
            Destiny
          </h1>
          <p className='leading-loose max-w-md mt-4'>Welcome to Forum Vitae — your gateway to boundless career opportunities. Connect with top employers, showcase your talents, and embark on a transformative journey toward professional success. The future starts here.</p>
          <Button asChild className='mt-4'>
            <Link href='/add-job'>Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImage} alt='Landing Image' className='hidden lg:block' />
      </section>
    </main>
  )
}
