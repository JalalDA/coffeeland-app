import React from 'react'
import { FaHeart, FaLocationDot, FaUser } from "react-icons/fa6";

type Props = {}

const Features = (props: Props) => {

    const featureItems = [
        {
            name : "Staff",
            total : "300+",
            icon : FaUser
        },
        {
            name : "Store",
            total : "20",
            icon : FaLocationDot
        },
        {
            name : "Customer",
            total : "900+",
            icon : FaHeart
        },
    ]
    return (
        <div className="relative">
            <div className="absolute p-4 w-full flex items-center justify-center rounded-lg top-0 md:-top-20">
                <div className="bg-white shadow-xl text-amber-800 h-40 w-full md:w-3/4 flex items-center justify-around  md:flex-row rounded-lg">
                    {
                        featureItems.map((item, index)=>{
                            const Icon = item.icon
                            return (
                                <div key={index} className="flex items-center gap-x-4">
                                    <div className="rounded-full bg-yellow-500 flex items-center justify-center p-4">
                                        <Icon/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="md:text-2xl text-xl font-bold text-black dar:text-black">{item.total}</div>
                                        <div className="text-sm md:text-md text-black dar:text-black">{item.name}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Features