import Image from 'next/image'
import React from 'react'
import herocoffe from '@/assets/images/herocoffe.png'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className='h-screen'>
        <Image src={herocoffe} alt='herobg'/>
    </div>
  )
}

export default HeroSection