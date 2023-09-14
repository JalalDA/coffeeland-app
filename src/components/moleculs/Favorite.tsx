import React from 'react'
import Image from 'next/image'
import Button from '../atoms/Button'
import { FaCheck } from "react-icons/fa6";

type Props = {}

const Favorite = (props: Props) => {
    const favorites = [
        {
            name: "Hazelnut Late",
            img: "/images/hazelnut.png",
            list: [
                "Hazelnut Syrup",
                "Wanilla Whipped Cream",
                "Sliced Banana on Top",
                "Ice / Hot"
            ],
            price : 25000
        },
        {
            name: "Pinky Promise",
            img: "/images/pinky.png",
            list: [
                "1 Shot of Coffee",
                "Wanilla Whipped Cream",
                "Chocolate Biscuits",
                "Strawberry Syrup",
                "Sliced strawberry on Top"
            ],
            price : 30000
        },
        {
            name: "Chicken Wings",
            img: "/images/chickenwings.png",
            list: [
                "Wings",
                "Drums Stick",
                "Mayonise And Lemon",
                "Hot Fried",
                "Secret Recipe",
                "Buy 1 Get 1 For Dine In"
            ],
            price : 40000
        },
    ]
    return (
        <div className='md:p-16 p-4 w-full bg-gray-50 flex items-center justify-center flex-col gap-y-8'>
            <div className="text-3xl text-center font-bold text-black">Here are People Favorite</div>
            <div className="text-md font-light text-center">
                Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!
            </div>
            <div className="flex w-full flex-col md:flex-row items-center justify-evenly gap-x-10">
                {
                    favorites.map((item, index)=>(
                        <div key={index} className="relative hover:transform hover:scale-105 duration-200 mt-8 cursor-pointer hover:border-amber-800 border-2 h-[45rem] bg-white flex items-center justify-start gap-y-8 flex-col rounded-lg border-gray-200 p-8">
                            <Image className='rounded-full shadow-xl' height={200} width={200} src={item.img} alt={item.name}/>
                            <div className="text-md font-bold">{item.name}</div>
                            <div className="text-md flex flex-col gap-y-4">
                                {
                                    item.list.map((item, index)=>(
                                        <div key={index} className="flex items-center gap-x-4">
                                            <FaCheck className='text-green-500'/>
                                            <div className="text-sm font-light">{item}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="absolute bottom-4 w-full flex flex-col gap-y-4 items-center justify-center">
                                <div className="text-xl">{`IDR ${item.price}`}</div>
                                <Button title={"Order Now"}/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Favorite