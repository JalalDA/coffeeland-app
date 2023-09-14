import Button from '@/components/atoms/Button'
import CartItem from '@/components/atoms/CartItem'
import CustomButton from '@/components/atoms/CustomButton'
import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import { useAppDispatch } from '@/store'
import { removeFromCart } from '@/store/features/cartSlice'
import { RootState } from '@/store/reducers'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useSelector } from 'react-redux'

type Props = {}

const Cart = (props: Props) => {
  const overlayStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ganti dengan warna overlay yang Anda inginkan
  };
  const cart = useSelector((state: RootState) => state.cart.cart)
  const dispatch = useAppDispatch()
  return (
    <div className='bg-white'>
      <Head><title>Cart</title></Head>
      <Navbar />
      <div style={{
        backgroundImage: `url("/images/cart.png")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }} className="relative p-4 md:px-28 md:py-12">
        <div className="font-bold text-white dark:text-white text-3xl">Checkout Your <br /> Item Now!!!</div>
        <div className="flex  flex-col md:flex-row items-start justify-between">
          <div className="bg-white mt-12 runded-lg shadow-xl md:py-8 md:px-16 p-4 rounded-lg">
            <div className="font-bold text-xl text-center">Order Summary</div>
            <div className="flex flex-col pb-8 border-b border-gray-400">
              {
                cart.map((item, index) => {
                  const total = item.priceSale && item.count && item.priceSale * item.count
                  return (
                    (
                      <div key={index} className="flex items-center justify-between gap-x-12">
                        <div className='flex items-center justify-start mt-4 gap-x-4'>
                          <Image className='object-cover h-20 w-20 rounded-full' src={item.photo ? item.photo : "/images/hazelnut.png"} alt='product' width={80} height={80} />
                          <div className="text-md ">{item.name} <br /> {`X ${item.count}`}</div>
                        </div>
                        <div className=" text-md">{`IDR ${total?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`}</div>
                        <FaTrash className='cursor-pointer' onClick={() => dispatch(removeFromCart(item))} />
                      </div>
                    )
                  )
                })
              }
            </div>
            <div className="text-md mt-4 flex items-center justify-between">
              <div className="text-md">SUBTOTAL</div>
              <div className="text-md">IDR 48.000</div>
            </div>
            <div className="text-md mt-2 flex items-center justify-between">
              <div className="text-md">TAX & FEE</div>
              <div className="text-md">IDR 2.000</div>
            </div>
            <div className="text-md mt-2 flex items-center justify-between">
              <div className="text-md">SHIPPING</div>
              <div className="text-md">IDR 5.000</div>
            </div>
            <div className="text-md mt-8 flex items-center justify-between">
              <div className="text-lg font-bold">SUBTOTAL</div>
              <div className="text-lg font-bold">IDR 48.000</div>
            </div>
          </div>
          <div className=" w-full md:w-1/2">
            <div className="items-center mt-8 text-white mb-4 dark:text-white flex justify-between">
              <div className="text-xl font-bold">Address Detail</div>
              <div className="text-xl font-bold">Edit</div>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="text-md pb-4 border-b border-gray-200">Delivery to <b>Kartini Street</b></div>
              <div className="text-md mt-2 pb-4 border-b border-gray-200">Km 5 refinery road oppsite re <br />
                public road, effurun, Jakarta</div>
              <div className="text-md mt-2 pb-4 border-b border-gray-200">

                +62 81348287878
              </div>
            </div>
            <div className="items-center text-white mt-16 mb-4 dark:text-white flex justify-between">
              <div className="text-xl font-bold">Payment Method</div>
              <div className="text-xl font-bold">Edit</div>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="text-md pb-4 border-b border-gray-200">Delivery to <b>Kartini Street</b></div>
              <div className="text-md mt-2 pb-4 border-b border-gray-200">Km 5 refinery road oppsite re <br />
                public road, effurun, Jakarta</div>
              <div className="text-md mt-2 pb-4 border-b border-gray-200">

                +62 81348287878
              </div>
            </div>
            <CustomButton title={"Confirm and Pay"} styles={"mt-8 py-4 shadow-xl"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart