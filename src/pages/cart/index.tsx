import CustomButton from '@/components/atoms/CustomButton'
import Loading from '@/components/atoms/Loading'
import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import { formatter } from '@/config/formatter'
import { useAppDispatch } from '@/store'
import { emptyCart, removeFromCart, reset } from '@/store/features/cartSlice'
import { RootState } from '@/store/reducers'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useSelector } from 'react-redux'

type Props = {}

const Cart = (props: Props) => {
  const [isLoadingPay, setIsLoadingPay] = useState(false)
  const {cart} = useSelector((state: RootState) => state.cart)
  const {user} = useSelector((state:RootState)=>state.user)
  const dispatch = useAppDispatch()
  let subtotal = 0
  let i
  for(i=0; i<=cart.length; i++){
    subtotal += cart[i]?.total || 0
  } 
  let taxandfee = 2000
  let shipping = 5000
  const router = useRouter()

  const bayar = async () => {
    setIsLoadingPay(true)
    try {
        const {_id, email, username} = user
        const data = await axios.post(`${process.env.NEXT_PUBLIC_APP_HOST}/api/transaction`, {
            gross_amount: subtotal + taxandfee + shipping,
            email,
            id : _id,
            first_name : username,
            last_name : username,
            productId : cart.map(item=>item._id)
        })
        if(data.status === 200){
          dispatch(emptyCart([]))
        }
        const url = data?.data?.data?.redirect_url
        window.open(`${url}`, "_blank")
        router.push('/history?i=3')
    } catch (error) {
        console.log({ error });
    }
    setIsLoadingPay(false)
}
  return (
    <div className='bg-white text-black'>
      <Head><title>Cart</title></Head>
      <Navbar />
      <div style={{
        backgroundImage: `url("/images/cart.png")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }} className="relative p-4 md:px-28 md:py-12">
        <div className="font-bold text-white dark:text-white text-3xl">Checkout Your <br /> Item Now!!!</div>
        <div className="flex  flex-col  md:flex-row items-start gap-x-8 justify-between">
          <div className="bg-white mt-12 runded-lg shadow-xl md:py-8 md:px-16 p-4 rounded-lg">
            <div className="font-bold text-xl text-center">Order Summary</div>
            <div className="flex flex-col pb-8 border-b border-gray-400">
              {
                cart.length === 0 ? 
                <div className="text-md m-4">You don't have any product in cart </div> :
                //@ts-ignore
                cart.map((item, index) => {
                  // const total = item.priceSale && item.count && item.priceSale * item.count
                  return (
                    (
                      <div key={index} className="flex items-center justify-between gap-x-12">
                        <div className='flex items-center justify-start mt-4 gap-x-4'>
                          <Image className='object-cover h-20 w-20 rounded-full' src={item.photo ? item.photo : "/images/hazelnut.png"} alt='product' width={80} height={80} />
                          <div className="text-md ">{item.name} <br /> {`X ${item.count} ${item.size || ""}`}</div>
                        </div>
                        <div className=" text-md">{`IDR ${item.total?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`}</div>
                        <FaTrash className='cursor-pointer' onClick={() => dispatch(removeFromCart(item))} />
                      </div>
                    )
                  )
                })
              }
            </div>
            <div className="text-md mt-4 flex items-center justify-between">
              <div className="text-md">SUBTOTAL</div>
              <div className="text-md">{formatter(subtotal)}</div>
            </div>
            <div className="text-md mt-2 flex items-center justify-between">
              <div className="text-md">TAX & FEE</div>
              <div className="text-md">{formatter(taxandfee)}</div>
            </div>
            <div className="text-md mt-2 flex items-center justify-between">
              <div className="text-md">SHIPPING</div>
              <div className="text-md">{formatter(shipping)}</div>
            </div>
            <div className="text-md mt-8 flex items-center justify-between">
              <div className="text-lg font-bold">SUBTOTAL</div>
              <div className="text-lg font-bold">{`${formatter(subtotal + taxandfee + shipping)}`}</div>
            </div>
          </div>
          <div className=" w-full md:w-1/2">
            <div className="items-center mt-8 text-white mb-4 dark:text-white flex justify-between">
              <div className="text-xl font-bold">Address Detail</div>
              {/* <div className="text-xl font-bold">Edit</div> */}
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="text-md pb-4 border-b border-gray-200">Delivery to <b>{user.username}</b></div>
              <div className="text-md mt-2 pb-4 border-b border-gray-200">{user.address}</div>
              <div className="text-md mt-2 pb-4 border-b border-gray-200">

                {`+62 ${user.phone}`}
              </div>
            </div>
            {/* <div className="items-center text-white mt-16 mb-4 dark:text-white flex justify-between">
              <div className="text-xl font-bold">Payment Method</div>
              <div className="text-xl font-bold">Edit</div>
            </div> */}
            <CustomButton onClick={bayar} title={isLoadingPay ? <Loading/> : "Confirm and Pay"} styles={"mt-8 py-4 shadow-xl text-white dark:text-white"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart