// import Head from 'next/head';
import { Inter } from 'next/font/google';
import Hero from '@/sections/Hero';
import Client from '@/sections/Client'
import Services from '@/sections/Services';
import Service from '@/sections/Service';
import Testimonial from '@/sections/Testimonial';
import About from '@/sections/About';
// import News from '@/sections/News'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Services />
      <Testimonial />
      <Client />
      {/* <Services/> */}
      {/* <News/> */}
    </>
  );
}
