import Button from '@/components/atoms/Button'
import Footer from '@/components/moleculs/Footer'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Forgot = (props: Props) => {
    return (
        <div>
            <Head>
                <title>Forgot Password</title>
            </Head>
            <Image className='h-screen w-full absolute top-0 z-0' src={"/images/forgot.png"} alt='forgot' height={300} width={200} />
            <div className="bg-black opacity-50 z-0 h-screen w-full absolute top-0"></div>
            <div className="h-screen w-full absolute flex flex-col items-center justify-center top-0 text-white z-10 font-bold">
                <div className="text-3xl">
                    Forgot your password?
                </div>
                <div className="text-md">Don’t worry, we got your back!</div>
                <div className="flex flex-col md:flex-row gap-y-4 items-center justify-center gap-x-10 mt-20">
                    <input type='text' placeholder='Enter your email adress to get link' className='bg-white p-4 rounded-lg outline-none w-[20rem] text-black dark:text-black'/>
                    <Button title={"Send"} styles={"text-xl py-4 px-8 bg-yellow-500 text-amber-800 shadow-xl"}/>
                </div>
                <div className="text-md mt-10 text-center">Click here if you didn’t receive any link in 2 minutes</div>
                <Button title={"Resend"} styles={"text-xl py-4 px-10 bg-amber-800 shadow-xl mt-8"}/>
                <div className="mt-4">01:54</div>
            </div>
            <div className="mt-[40rem]">
                <Footer />
            </div>
        </div>
    )
}

export default Forgot