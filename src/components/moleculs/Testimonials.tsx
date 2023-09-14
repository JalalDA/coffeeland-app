import Image from 'next/image'
import React from 'react'

type Props = {}

const Testimonials = (props: Props) => {
    const testi = [
        {
            name: "Yessika Yuasa",
            addess: "Warsaw, Polland",
            img: "/images/yessika.png",
            msg: "“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!"
        },
        {
            name: "Shana Alexandra Christy",
            addess: "Bali, Indonesia",
            img: "/images/Shana.png",
            msg: "“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte"
        },
        {
            name: "Rebecca",
            addess: "Bali, Indonesia",
            img: "/images/Rebecca.png",
            msg: "“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!"
        },
    ]
    return (
        <div className='p-4 md:pb-32 md:p-16 bg-gray-50 flex flex-col gap-y-8 items-center justify-center w-full'>
            <div className="text-3xl text-center font-semibold w-full md:w-1/4">
                Loved by Thousands of Happy Customer
            </div>
            <div className="text-md text-center font-light">
                These are the stories of our customers who have visited us with great pleasure.
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-evenly w-full">
                {testi.map((item, index) => (
                    <div key={index} className="border-2 hover:transform hover:scale-105 duration-200 border-gray-200 w-[20rem] h-[18rem] rounded-lg hover:border-amber-700 cursor-pointer p-6">
                        <div className="flex items-start w-full gap-x-4">
                            <Image height={100} width={100} className='rounded-full h-20 w-20 object-cover' src={item.img} alt={item.name} />
                            <div className="flex flex-col gap-y-2">
                                <div className="text-md font-bold">{item.name}</div>
                                <div className="text-sm font-light">{item.addess}</div>
                            </div>
                        </div>
                        <div className="text-md font-light mt-8">{item.msg}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials