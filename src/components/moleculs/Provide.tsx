import React from 'react'
import Image from 'next/image'

type Props = {}

const Provide = (props: Props) => {
    const checks = [
        {
            name : "High quality beans"
        },
        {
            name : "Healthy meals, you can request the ingredients"
        },
        {
            name : "Chat with our staff to get better experience for ordering"
        },
        {
            name : "Free member card with a minimum purchase of IDR 200.000."
        },
    ]
  return (
    <div className='flex flex-col md:flex-row items-center mt-44 bg-white justify-between'> 
        <Image width={600} height={600} src={"/images/teamwork.png"} alt='teamwork'/>
        <div className="md:w-1/2 w-full p-4 flex items-center justify-center flex-col">
            <div className="w-full md:w-3/4 text-3xl font-bold">We Provide Good Coffee and Healthy Meals</div>
            <div className="text-md w-full md:w-3/4 font-light mt-8">You can explore the menu that we provide with fun and have their own taste and make your day better.</div>
            <div className="text-md w-full md:w-3/4 flex flex-col gap-y-4 font-light mt-8">
                {checks.map((item, index)=>(
                    <div key={index} className="flex items-center gap-x-4">
                        <Image height={20} width={20} src={"/images/checklist.png"} alt='checklist'/>
                        <div className="text-md font-light ">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Provide