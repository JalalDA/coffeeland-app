import React from 'react'
import Button from '../atoms/Button'

type Props = {}

const Promo = (props: Props) => {
    return (
        <div className="relative bg-gray-50">
            <div className=" md:absolute p-4 w-full flex items-center justify-center rounded-lg top-0 md:-top-20">
                <div className="bg-white p-4 shadow-xl text-amber-800 h-40 w-full md:w-3/4 flex flex-col items-center justify-between md:p-8  md:flex-row rounded-lg">
                    <div className='md:w-1/4'>
                        <div className="font-bold mb-4 text-black dark:text-black text-xl md:text-3xl">
                            Check our promo today!
                        </div>
                        <div className="text-md font-light">Let's see the deals and pick yours!</div>
                    </div>
                    <Button title={"See Promo"} styles={"md:text-2xl px-10 bg-yellow-500 text-amber-800"}/>
                </div>
            </div>
        </div>
    )
}

export default Promo