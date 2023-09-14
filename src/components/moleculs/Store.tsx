import React from 'react'
import Image from 'next/image'

type Props = {}

const Store = (props: Props) => {
    return (
        <div className='md:p-16 px-4 py-8 bg-gray-50 flex flex-col gap-y-8 items-center justify-center w-full'>
            <div className="text-3xl text-center font-semibold w-full md:w-1/4">
                Visit Our Store in the Spot on the Map Below
            </div>
            <div className="text-md text-center w-full font-light">See our store in every city on the spot and spen your good day there. See you soon!</div>
            <Image className='w-full mt-20 object-cover mb-20' src={'/images/global.png'} alt='global' height={600} width={600}/>
        </div>
    )
}

export default Store