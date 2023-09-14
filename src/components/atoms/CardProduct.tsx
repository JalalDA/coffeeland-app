import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

interface CoffeeProduct {
  category?: string;
  condition?: string;
  createdAt?: string;
  deletedAt?: null | string;
  description?: string;
  merchantId?: string;
  name?: string;
  photo?: string;
  stock?: number;
  supplier?: string;
  updatedAt?: string;
  __v?: number;
  _id?: string;
  priceSale? : number;
}

const CardProduct = ({name, priceSale, photo, _id}: CoffeeProduct) => {
    const router = useRouter()
  return (
    <div onClick={()=>router.push(`/products/${_id}`)} className='cursor-pointer hover:trasnfrom hover:scale-105 duration-200 bg-white shadow-xl flex flex-col gap-4 items-center justify-center rounded-xl p-2'>
        <Image src={photo? photo : "/images/hazelnut.png"} alt='hazelnut' height={100} width={100} className='object-cover h-36 w-36 rounded-full shadow-xl'/>
        <div className="text-xl font-bold">{name}</div>
        <div className="text-amber-800 font-bold">{`IDR ${priceSale?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`}</div>
    </div>
  )
}

export default CardProduct