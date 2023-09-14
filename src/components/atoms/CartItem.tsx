import { useAppDispatch } from '@/store';
import { removeFromCart } from '@/store/features/cartSlice';
import Image from 'next/image'
import React from 'react'
import { FaTrash } from "react-icons/fa";

type Props = {
    name ?: string,
    count? : number,
    total ?: number,
    image ? : string,
    remove?:()=>void | { payload: any; type: "token/removeFromCart"; }
}

const CartItem = ({
    name,
    count,
    total,
    image,
    remove
}: Props) => {
    const dispatch = useAppDispatch()
    return (
        <div className="flex items-center justify-between gap-x-12">
            <div className='flex items-center justify-start mt-4 gap-x-4'>
                <Image className='object-cover h-20 w-20 rounded-full' src={image ? image : "/images/hazelnut.png" } alt='product' width={80} height={80} />
                <div className="text-md ">{name} <br /> {`X ${count}`}</div>
            </div>
            <div className=" text-md">{`IDR ${total?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`}</div>
            <FaTrash onClick={remove}/>
        </div>
    )
}

export default CartItem