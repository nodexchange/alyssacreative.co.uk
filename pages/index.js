import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import Client from '@/sections/Client'
import Services from '@/sections/Services'
import Service from '@/sections/Service'
import Testimonial from '@/sections/Testimonial'
import About from '@/sections/About'
import News from '@/sections/News'
import Footer from '@/sections/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        <div className="bg-gray-50">
          <Navbar />
          <Hero />
          <About/>
          <Service/>
          <Services />
          <Testimonial />
          {/* <Services/> */}
          {/* <Client/> */}
          {/* <News/> */}
          <Footer/>
        </div>
      </main>
    </>
  )
}
