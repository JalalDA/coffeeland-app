import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import Promo from '@/components/moleculs/Promo'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useAppDispatch } from '@/store'
import {decrementByAmount, incrementByAmount} from '@/store/features/counterSlice'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/reducers'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import axios from 'axios'
import { addToCart } from '@/store/features/cartSlice'
import { ToastContainer, toast } from 'react-toastify'
import CustomButton from '@/components/atoms/CustomButton'
import { FaArrowCircleRight } from 'react-icons/fa'



const SingleProduct = ({repo}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log({repo});
    const dispatch = useAppDispatch()
    const router = useRouter()
    const count = useSelector((state:RootState)=>state.count)
    return (
        <div className='bg-white'>
            <Head>
                <title>Product</title>
            </Head>
            <Navbar />
            <ToastContainer/>
            <div className="bg-gray-50 font-bold text-xl p-4 md:px-28">{repo.name}</div>
            <div className="flex bg-gray-50 mb-20 flex-col gap-y-12 md:flex-row items-start justify-between p-4 md:px-32 md:py-16">
                {/* detialproduk */}
                <div className="flex flex-col items-center w-full md:w-1/2 justify-center gap-y-8 md:gap-y-20">
                    <Image src={repo?.photo ? repo.photo : "/images/hazelnut.png"} alt='product' height={120} width={120} className='object-cover h-60 rounded-full shadow-xl w-60' />
                    <div className="bg-white shadow-2xl rounded-lg flex flex-col gap-y-8 px-8 py-4">
                        <div className="text-xl font-bold">Delivery And Time</div>
                        <div className="flex items-center justify-between gap-x-4 w-full">
                            <div className="bg-gray-100 p-2 text-gray-400 rounded-lg cursor-pointer">Dine In</div>
                            <div className="bg-gray-100 p-2 text-gray-400 rounded-lg cursor-pointer">Door Delivery</div>
                            <div className="bg-gray-100 p-2 text-gray-400 rounded-lg cursor-pointer">Pick Up</div>
                        </div>
                        <div className="flex items-center justify-between gap-x-4 w-full">
                            <div className="text-xl font-bold">Now</div>
                            <div className="bg-gray-100 px-8 py-2 text-gray-400 rounded-lg cursor-pointer">Yes</div>
                            <div className="bg-gray-100 px-8 py-2 text-gray-400 rounded-lg cursor-pointer">No</div>
                        </div>
                        <div className="flex items-center justify-between gap-x-4 w-full">
                            <div className="text-xl font-bold">Set Time</div>
                            <div className="border w-1/2 rounded-lg p-4 py-2 bg-gray-100 border-gray-200">
                                <input type="time" className='w-full outline-none bg-gray-100' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* deskripsi produk */}
                <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4 md:px-16">
                    <div className="text-3xl font-bold">{repo.name}</div>
                    <div className="text-amber-800 mt-8">{repo.description}</div>
                    <div className="text-amber-800 mt-8 w-full text-start">Delivery only on <b>Monday to friday </b> at  <b>1 - 7 pm</b> </div>
                    <div className="mt-8 flex items-end justify-between w-full">
                        <div className="border border-amber-800 flex items-center  gap-x-4 rounded-lg">
                            <div onClick={()=>dispatch(decrementByAmount(1))} className="text-amber-800 font-bold text-xl border-r border-amber-800 p-2 cursor-pointer hover:bg-amber-800 hover:text-white">-</div>
                            <div className="text-amber-800 font-bold text-xl p-2">{count.value}</div>
                            <div onClick={()=>dispatch(incrementByAmount(1))} className="text-amber-800 font-bold text-xl border-l border-amber-800 p-2 cursor-pointer hover:bg-amber-800 hover:text-white">+</div>
                        </div>
                        <div className="font-bold text-xl">{`IDR ${repo.priceSale?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`}</div>
                    </div>
                    <div onClick={()=>{
                        dispatch(addToCart({...repo, count: count.value}))
                        toast.success("Success add to cart")
                    }} className="flex items-center justify-center px-6 py-2 mt-8 bg-amber-800 rounded-lg text-xl text-white dark:text-white font-bold w-full cursor-pointer">Add To Cart</div>
                    <div className="flex items-center justify-center px-6 py-2 mt-8 bg-amber-800 rounded-lg text-xl text-white dark:text-white font-bold w-full cursor-pointer">Ask To Staff</div>
                    
                </div>
            </div>
            <div className="relative bg-gray-50">
            <div className=" md:absolute p-4 w-full flex items-center justify-center gap-x-4 rounded-lg top-0 md:-top-20">
                {/* <div className="bg-white p-4 shadow-xl text-amber-800 h-40 w-full md:w-3/4 flex flex-col items-center justify-between md:p-8  md:flex-row rounded-lg">
                    <div className='md:w-1/4'>
                        <div className="font-bold mb-4 text-black dark:text-black text-xl md:text-3xl">
                            Check our promo today!
                        </div>
                        <div className="text-md font-light">Let's see the deals and pick yours!</div>
                    </div>
                    <CustomButton title={"See Promo"} styles={"md:text-2xl px-10 bg-yellow-500 text-amber-800"}/>
                </div> */}
                <div className="bg-white md:w-1/4 w-full p-4 md:p-8 rounded-lg shadow-xl">
                    <div className="text-md font-extrabold mb-4">Choose Size</div>
                    <div className="flex items-center justify-center gap-x-8">
                        <div className="rounded-full py-2 px-4 text-sm flex items-center justify-center bg-yellow-500 cursor-pointer">R</div>
                        <div className="rounded-full py-2 px-4 text-sm flex items-center justify-center bg-yellow-500">L</div>
                        <div className="rounded-full py-2 px-4 text-sm flex items-center justify-center bg-yellow-500">XL</div>
                    </div>
                </div>
                <div className="bg-white md:w-2/4 w-full p-4 md:p-8 rounded-lg shadow-xl">
                    <div className="flex items-center justify-between gap-x-4">
                        <Image src={repo.photo} alt={repo.name} height={20} width={20} className='h-20 w-20 rounded-full object-cover'/>
                        <div className="flex items-center gap-x-8">
                            <div className="text-xl font-bold">Checkout</div>
                            <FaArrowCircleRight className='h-12 w-12 text-yellow-500'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer />
        </div>
    )
}

export default SingleProduct


type Product = {
    _id: string;
    merchantId: string;
    name: string;
    priceBuy: number;
    priceSale: number;
    suplier: string;
    condition: string;
    category: string;
    description: string;
    photo: string;
    stock: number;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  
  export const getServerSideProps: GetServerSideProps<{
    repo: Product
  }> = async (context) => {
    const { params } = context
    //@ts-ignore
    const id = params?.id
    console.log({ idparams: id });
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_APP_HOST}/api/product?id=${id}`)
  
    const repo = data.product
    return { props: { repo } }
  }