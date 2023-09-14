import CustomButton from '@/components/atoms/CustomButton'
import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import { RootState } from '@/store/reducers'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { FaPencilAlt } from "react-icons/fa";

type Props = {}

const Profile = (props: Props) => {
    const user = useSelector((state:RootState)=>state.user.user)
    return (
        <div className='bg-white'>
            <Head><title>Profile</title></Head>
            <Navbar />
            <div style={{
                backgroundImage: `url("/images/bgprofile.png")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
            }} className="bg-white md:px-28 md:py-16 p-4">
                <div className="text-xl font-bold text-white dark:text-white">User Profile</div>
                <div className="flex gap-y-4 flex-col md:flex-row items-start justify-between mt-4 gap-x-8 w-full">
                    <div className="bg-white relative shadow-xl w-full md:w-2/5 flex flex-col h-[24rem] items-center justify-center p-8 rounded-xl">
                        {
                            user.photo ? 
                            <Image src={user.photo} alt='profileimg' height={100} width={100} className='object-cover h-60 w-60 shadow-xl rounded-full' /> :
                            <IoPersonCircleSharp className='h-60 w-60 shadow-xl rounded-full text-gray-400'/> 
                        }
                        <div className="text-md mt-2 font-bold">{user.username}</div>
                        <div className="text md font-light">{user.email}</div>
                        <div className="absolute bottom-0 h-4 rounded-b-xl w-full bg-amber-800"></div>
                    </div>
                    <div className=" relative bg-white shadow-xl w-full md:w-3/5 h-[30rem] md:h-[24rem] rounded-xl">
                        <div className="text-md font-bold p-8">Contacts</div>
                        <div className="mt-4 grid px-8 overflow-scroll md:grid-cols-2 grid-cols-1 gap-y-16 gap-x-8">
                            <div className="flex flex-col gap-y-2 border-b border-gray-500 pb-2">
                                <div className="text-gray-500 font-light">Email Adress : </div>
                                <input type="text" className='outline-none' defaultValue={user.email} />
                            </div>
                            <div className="flex flex-col gap-y-2 border-b border-gray-500 pb-2">
                                <div className="text-gray-500 font-light">Phone Number : </div>
                                <input type="text" className='outline-none' defaultValue={user.phone} />
                            </div>
                            <div className="flex flex-col gap-y-2 border-b border-gray-500 pb-2">
                                <div className="text-gray-500 font-light">Delivery Adress : </div>
                                <input type="text" className='outline-none' defaultValue={user.address} />
                            </div>
                        </div>
                        <div className="absolute bottom-0 h-4 rounded-b-xl w-full bg-amber-800"></div>
                    </div>
                </div>

                {/* detail */}
                <div className="text-xl font-bold mt-8 text-white dark:text-white">Detail User</div>
                <div className="flex flex-col-reverse gap-y-4 md:flex-row-reverse items-start justify-between mt-4 gap-x-8 w-full">
                    <div className=" relative shadow-xl w-full md:w-2/5 flex flex-col gap-y-4 h-[24rem] items-center justify-center p-8 rounded-xl">
                        <div className="text-xl font-bold text-white dark:text-white">Do you want to save change?</div>
                        <CustomButton styles={"w-full text-white dark:text-white"} title={"Save Change"}/>
                        <CustomButton styles={"w-full bg-yellow-500"} title={"Cancel"}/>
                        <CustomButton styles={"w-full bg-white text-black dark:text-black"} title={"Edit Password"}/>
                        <CustomButton styles={"w-full bg-white text-black dark:text-black"} title={"Logout"}/>
                    </div>
                    <div className=" relative bg-white shadow-xl w-full md:w-3/5 h-[32rem] md:h-[24rem] rounded-xl">
                        <div className="text-md font-bold px-8 py-4">Details</div>
                        <div className="mt-4 grid px-8 grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                            <div className="flex flex-col gap-y-2 border-b border-gray-500 pb-2">
                                <div className="text-gray-500 font-light">username : </div>
                                <input type="text" className='outline-none' defaultValue={user.username} />
                            </div>
                            <div className="flex flex-col gap-y-2 border-b border-gray-500 pb-2">
                                <div className="text-gray-500 font-light">DD/MM/YY : </div>
                                <input type="date" className='outline-none' defaultValue={user.createdAt} />
                            </div>
                            <div className="flex flex-col gap-y-2 border-b border-gray-500 pb-2">
                                <div className="text-gray-500 font-light">firstname : </div>
                                <input type="text" className='outline-none' defaultValue={user.username} />
                            </div>
                            <div className="flex flex-col gap-y-2 border-b border-gray-500 pb-2">
                                <div className="flex items-center jsutify-center gap-x-4">
                                    <div className="flex items-center jutify-center bg-yellow-500 border-4 p-2 rounded-full border-amber-800"></div>
                                    Male
                                </div>
                                <div className="flex items-center jsutify-center gap-x-4">
                                    <div className="flex items-center jutify-center bg-white border-4 p-2 rounded-full border-gray-200"></div>
                                    Female
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-2 border-b border-gray-500 pb-2">
                                <div className="text-gray-500 font-light">lastname : </div>
                                <input type="text" className='outline-none' defaultValue={user.username} />
                            </div>
                        </div>
                        <div className="absolute bottom-0 h-4 rounded-b-xl w-full bg-amber-800"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile