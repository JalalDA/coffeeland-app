import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/moleculs/Navbar'
import ImageOverlay from '@/components/atoms/ImageOverlay'
import herocoffee from '@/assets/images/herocoffe.png'
import { FaHeart, FaLocationDot, FaUser } from "react-icons/fa6";
import Features from '@/components/moleculs/Features'
import Provide from '@/components/moleculs/Provide'
import Favorite from '@/components/moleculs/Favorite'
import Store from '@/components/moleculs/Store'
import Partner from '@/components/moleculs/Partner'
import Testimonials from '@/components/moleculs/Testimonials'
import Footer from '@/components/moleculs/Footer'
import Promo from '@/components/moleculs/Promo'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/reducers'
import { GetServerSideProps } from 'next'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`bg-white ${inter.className}`}>

      <Head><title>Coffeeland</title></Head>
      <Navbar/>
      {/* <div className='absolute top-2 z-10 h-screen inset-0 w-full bg-black opacity-50'>
      </div>
      <HeroSection /> */}
      <ImageOverlay imageUrl={herocoffee} overlayText='Selamat datang'/>
      {/* <div className="relative">
        <div className="absolute w-full shadow-xl flex items-center justify-center rounded-lg -top-20">
          <div className="bg-white text-amber-800 h-40 w-3/4 rounded-lg">
            <FaHeart/>
            <FaLocationDot/>
            <FaUser/>
          </div>
        </div>
      </div> */}
      <Features/>
      <Provide/>
      <Favorite/>
      <Store/>
      {/* <Partner/> */}
      <Testimonials/>
      <Promo/>
      <Footer/>
    </div>
  )
}
