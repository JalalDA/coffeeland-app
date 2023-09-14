import CardHistory from '@/components/atoms/CardHistory'
import ImageHistory from '@/components/atoms/ImageHistory'
import ImageOverlay from '@/components/atoms/ImageOverlay'
import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import Head from 'next/head'
import React from 'react'

type Props = {}

const History = (props: Props) => {
  return (
    <div className='bg-white'>
      <Head><title>History</title></Head>
        <Navbar/>
        <ImageHistory imageUrl={"/images/cart.png"}>
          <div className="grid overflow-scroll grid-cols-3 p-4 md:grid-cols-4 gap-4 mt-4 md:mt-16">
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
            <CardHistory/>
          </div>
        </ImageHistory>
        <Footer/>
    </div>
  )
}

export default History