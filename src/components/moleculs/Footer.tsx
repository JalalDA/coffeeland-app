import Image from 'next/image'
import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

type Props = {}

const Footer = (props: Props) => {
    const sosmed = [
        {
            name : FaTwitter
        },
        {
            name : FaFacebook
        },
        {
            name : FaInstagram
        },
    ]
  return (
    <div className='w-full md:pt-32 bg-gray-100 flex md:flex-row flex-col gap-10 items-start justify-between p-4 md:p-16'>
        <div className="flex flex-col md:w-1/4 gap-y-8">
            <div className="flex items-center gap-x-4">
                <Image src={'/images/logo.png'} alt='logo' height={24} width={24} className='object-cover'/>
                <div className="text-xl font-bold">Coffeeland</div>
            </div>
            <div className="text-md">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</div>
            <div className="flex items-center gap-x-4">
                {
                    sosmed.map((item, index)=>{
                        const Icon = item.name
                        return (
                            <div key={index} className="p-2 bg-yellow-500 rounded-full">
                                <Icon className='text-amber-900'/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="text-md">© 2020 Coffeeland</div>
        </div>
        <div className="md:w-1/2 flex-col md:flex-row w-full flex items-start justify-start md:justify-end gap-x-20 p-4 gap-y-10 md:px-16">
            <div className="flex flex-col gap-y-4">
                <div className="text-xl font-bold">Product</div>
                <div className="text-sm font-light">Download</div>
                <div className="text-sm font-light">Pricing</div>
                <div className="text-sm font-light">Location</div>
                <div className="text-sm font-light">Countries</div>
                <div className="text-sm font-light">Blogs</div>
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="text-xl font-bold">Engage</div>
                <div className="text-sm font-light">Coffeeland?</div>
                <div className="text-sm font-light">FAQ</div>
                <div className="text-sm font-light">Privacy Policy</div>
                <div className="text-sm font-light">Terms Of Services</div>
                <div className="text-sm font-light">About Us</div>
            </div>
        </div>
    </div>
  )
}

export default Footer