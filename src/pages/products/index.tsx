import CardProduct from '@/components/atoms/CardProduct'
import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

const Products = ({repo}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const promos = [
    {
      name: "HAPPY MOTHER'S DAY",
      img: "/images/mother.png",
      text: "Get one of our favorite menu for free!"
    },
    {
      name: "JUMAT BERKAH",
      img: "/images/jumat.png",
      text: "Buy 1 Get 1 for every single coffee"
    },
    {
      name: "HAPPY MOTHER'S DAY",
      img: "/images/mother.png",
      text: "Get one of our favorite menu for free!"
    },
    {
      name: "HAPPY HALLOWEEN",
      img: "/images/halloween.png",
      text: "Do you like chicken wings? Get 1 free only if you buy pinky promise"
    },
  ]
  return (
    <div className='bg-white text-black '>
      <Head><title>Product</title></Head>
      <Navbar />
      <div className="flex flex-col-reverse md:flex-row items-start w-full border-t border-gray-100">
        {/* promo sidebar */}
        <div className="w-full md:mt-0 mt-12 p-4 md:w-1/4 md:flex items-start justify-start md:p-8 flex-col border-r border-gray-100">
          <div className="text-amber-800 text-center w-full font-bold">Promo Today</div>
          <div className="text-sm text-light text-center">Coupons will be updated every weeks. Check them out! </div>
          <div className="flex flex-col gap-4 mt-8">
            {promos.map((item, index) => (
              <div key={index} className="bg-yellow-300  cursor-pointer p-2 rounded-lg flex items-center justify-start gap-x-2">
                <Image src={item.img} alt={item.name} height={80} width={80} className='object-cover' />
                <div className="flex flex-col gap-y-2">
                  <div className="text-md font-bold ">{item.name}</div>
                  <div className="text-sm">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center px-6 py-2 mt-4 bg-amber-800 rounded-lg text-xl text-white dark:text-white font-bold w-full cursor-pointer">Apply Coupon</div>
          <div className='text-xs mt-8'>Terms and Condition <br />
            1. You can only apply 1 coupon per day <br />
            2. It only for dine in <br />
            3. Buy 1 get 1 only for new user <br />
            4. Should make member card to apply coupon</div>
        </div>

        {/* produk section */}
        <div className="w-full md:w-3/4 p-4 md:px-12 md:py-4 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8">
          {
            repo.map((item, index)=>(
              <CardProduct _id={item._id} key={index} priceSale={item?.priceSale} name={item.name} photo={item.photo}/>
            ))
          }
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Products


export const getServerSideProps: GetServerSideProps<{
  repo: any[]
}> = async () => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_APP_HOST}/api/product?merchantId=${process.env.NEXT_PUBLIC_MERCHANT_ID}`)
  return { props: { repo : data.products } }
}