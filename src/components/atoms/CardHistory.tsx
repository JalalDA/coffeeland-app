import Image from 'next/image'
import React from 'react'

type Props = {}

const CardHistory = (props: Props) => {
  return (
    <div className='flex items-center flex-col md:flex-row justify-start p-4 bg-white shadow-xl rounded-lg gap-x-4'>
      <Image src={"/images/hazelnut.png"} alt='hazelnut' height={100} width={100} className='rounded-full'/>
      <div className="flex flex-col">
        <div className="text-md text-black dark:text-black font-bold">Hazzelnut Latte</div>
        <div className="text-md text-amber-800 dark:text-black ">IDR 34.000</div>
      </div>
    </div>
  )
}

export default CardHistory