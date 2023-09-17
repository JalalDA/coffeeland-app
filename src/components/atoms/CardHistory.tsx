import { formatter } from '@/config/formatter'
import { Transaction } from '@/types'
import Image from 'next/image'
import React from 'react'

type Props = {
  item : Transaction
}

const CardHistory = ({item}: Props) => {
  console.log({item : item.status});
  return (
    <div className='flex relative items-center flex-col md:flex-row justify-start p-4 bg-white shadow-xl rounded-lg gap-x-4'>
      <Image src={item.productId[0].photo || ""} alt='hazelnut' height={100} width={100} className='rounded-full'/>
      <div className="flex flex-col">
        <div className="text-md text-black dark:text-black font-bold">{item.productId[0].name}</div>
        <div className="text-md text-amber-800 dark:text-black ">{formatter(item.amount)}</div>
      </div>
      <div className={`text-xs mb-2 p-1 ${item.status === "Pending" ? "bg-yellow-400" : "bg-green-500"}  rounded-lg text-black dark:text-black absolute bottom-0 right-4`}>{item.status}</div>
    </div>
  )
}

export default CardHistory