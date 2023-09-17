import CustomButton from '@/components/atoms/CustomButton'
import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import { RootState } from '@/store/reducers'
import Head from 'next/head'
import Image from 'next/image'
import React, { ChangeEvent, useRef, useState } from 'react'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { FaPencilAlt } from "react-icons/fa";
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import Loading from '@/components/atoms/Loading'

type Props = {}

const Profile = (props: Props) => {
    const user = useSelector((state: RootState) => state.user.user)
    const [image, setImage] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null)
    const [isLoadingImg, setIsLoadingImg] = useState<Boolean>(false)
    const [editAbleContact, setEditAbleContact] = useState<Boolean>(false)
    const [editAbleDetails, setEditAbleDetails] = useState<Boolean>(false)
    const [gender, setGender] = useState<string | undefined>(user.gender)
    const [loadingProfile, setLoadingProfile] = useState(false)

    const genders = [
        "Male",
        "Female"
    ]
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target?.result as string);
                setFile(file)
            };
            reader.readAsDataURL(file);
        }
    };
    const emailRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const adressRef = useRef<HTMLInputElement>(null)
    const usernameRef = useRef<HTMLInputElement>(null)
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const birthdayRef = useRef<HTMLInputElement>(null)

    const body = {
        username : usernameRef.current?.value,
        email : emailRef.current?.value,
        phone : phoneRef.current?.value,
        address : adressRef.current?.value,
        birthDay : birthdayRef.current?.value,
        firstName : firstNameRef.current?.value,
        lastName : lastNameRef.current?.value,
        gender : gender
    }
    const updateImage = async () => {
        setIsLoadingImg(true)
        if (!file) {
            return
        }
        try {
            const formData = new FormData()
            formData.append("image", file)
            const data = await axios.patch(`${process.env.NEXT_PUBLIC_APP_HOST}/api/user/updateimage?id=${user._id}`, formData)
            console.log({ data });
            toast.success("Success update user")
        } catch (error) {
            console.log({ error });
            toast.error("something went wrong, try again")
        }
        setIsLoadingImg(false)
    }
    const updateProfile = async () =>{
        setLoadingProfile(true)
        try {
            const response = await axios.patch(`${process.env.NEXT_PUBLIC_APP_HOST}/api/user?id=${user._id}`, body)
            console.log({response});
        } catch (error) {
            console.log({error});
            toast.error("Something went wrong, try again")
        }
        setLoadingProfile(false)
    }
    return (
        <div className='bg-white'>
            <Head><title>Profile</title></Head>
            <Navbar />
            <ToastContainer autoClose={1000} />
            <div style={{
                backgroundImage: `url("/images/bgprofile.png")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
            }} className="bg-white md:px-28 md:py-16 p-4">
                <div className="text-xl font-bold text-white dark:text-white">User Profile</div>
                <div className="flex gap-y-4 flex-col md:flex-row items-start justify-between mt-4 gap-x-8 w-full">
                    <div className="bg-white relative shadow-xl w-full md:w-2/5 flex flex-col h-[24rem] items-center justify-center p-8 rounded-xl">
                        <div className="relative">
                            <div className="absolute cursor-pointer right-8 bottom-4 h-8 w-8 rounded-full bg-amber-800 flex items-center justify-center">
                                <FaPencilAlt className='absolute h-4 w-4 text-white cursor-pointer' />
                                <input onChange={handleImageChange} accept='image/*' className='cursor-pointer' type="file" style={{ opacity: 0 }} />
                            </div>
                            {
                                image ?
                                    <Image src={image} alt='profileimg' height={100} width={100} className='object-cover h-60 w-60 shadow-xl rounded-full' /> :
                                    user.photo ?
                                        <Image src={user.photo} alt='profileimg' height={100} width={100} className='object-cover h-60 w-60 shadow-xl rounded-full' /> :
                                        <IoPersonCircleSharp className='h-60 w-60 shadow-xl rounded-full text-gray-400' />
                            }
                        </div>
                        <div className="text-md mt-2 font-bold">{user.username}</div>
                        <div className="text md font-light">{user.email}</div>
                        {
                            image && <CustomButton onClick={updateImage} title={isLoadingImg ? <Loading /> : "Save Image"} styles={"text-white dark:text-white mt-2 text-md"} />
                        }
                        <div className="absolute bottom-0 h-4 rounded-b-xl w-full bg-amber-800"></div>
                    </div>
                    <div className="relative bg-white shadow-xl w-full md:w-3/5 h-[30rem] md:h-[24rem] rounded-xl">
                        <div onClick={() => {
                            setEditAbleContact(true)
                            emailRef.current?.focus()
                            console.log({ emailRef: emailRef.current?.value });

                        }} className="absolute cursor-pointer right-4 top-4 h-8 w-8 rounded-full bg-amber-800 flex items-center justify-center">
                            <FaPencilAlt className='absolute h-4 w-4 text-white cursor-pointer' />
                            {/* <input onChange={handleImageChange} accept='image/*' className='cursor-pointer' type="file" style={{ opacity: 0 }} /> */}
                        </div>
                        <div className="text-md font-bold p-8">Contacts</div>
                        <div className="mt-4 grid px-8 overflow-scroll md:grid-cols-2 grid-cols-1 gap-y-16 gap-x-8">
                            <div className="flex flex-col gap-y-2 border-b border-gray-500 pb-2">
                                <div className="text-gray-500 font-light">Email Adress : </div>
                                <input ref={emailRef} disabled={!editAbleContact} type="text" className='outline-none' defaultValue={user.email} />
                            </div>
                            <div className="flex flex-col gap-y-2 border-b border-gray-500 pb-2">
                                <div className="text-gray-500 font-light">Phone Number : </div>
                                <input ref={phoneRef} disabled={!editAbleContact} type="text" className='outline-none' defaultValue={user.phone} />
                            </div>
                            <div className="flex flex-col gap-y-2 border-b border-gray-500 pb-2">
                                <div className="text-gray-500 font-light">Delivery Adress : </div>
                                <input ref={adressRef} disabled={!editAbleContact} type="text" className='outline-none' defaultValue={user.address} />
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
                        <CustomButton onClick={updateProfile} styles={"w-full text-white dark:text-white"} title={loadingProfile ? <Loading/> : "Save Change"} />
                        <CustomButton styles={"w-full bg-yellow-500"} title={"Cancel"} />
                        <CustomButton styles={"w-full bg-white text-black dark:text-black"} title={"Edit Password"} />
                        <CustomButton styles={"w-full bg-white text-black dark:text-black"} title={"Logout"} />
                    </div>
                    <div className=" relative bg-white shadow-xl w-full md:w-3/5 h-[32rem] md:h-[24rem] rounded-xl">
                        <div onClick={() => {
                            setEditAbleDetails(true)
                            usernameRef.current?.focus()
                            console.log({ usernamelRef: usernameRef.current?.value });

                        }} className="absolute cursor-pointer right-4 top-4 h-8 w-8 rounded-full bg-amber-800 flex items-center justify-center">
                            <FaPencilAlt className='absolute h-4 w-4 text-white cursor-pointer' />
                            {/* <input onChange={handleImageChange} accept='image/*' className='cursor-pointer' type="file" style={{ opacity: 0 }} /> */}
                        </div>
                        <div className="text-md font-bold px-8 py-4">Details</div>
                        <div className="mt-4 grid px-8 grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                            <div className="flex flex-col gap-y-2 border-b border-gray-500 pb-2">
                                <div className="text-gray-500 font-light">username : </div>
                                <input ref={usernameRef} disabled={!editAbleDetails} type="text" className='outline-none' defaultValue={user.username} />
                            </div>
                            <div className="flex flex-col gap-y-2 border-b border-gray-500 pb-2">
                                <div className="text-gray-500 font-light">DD/MM/YY : </div>
                                <input ref={birthdayRef} disabled={!editAbleDetails} type="date" className='outline-none' defaultValue={user.createdAt} />
                            </div>
                            <div className="flex flex-col gap-y-2 border-b border-gray-500 pb-2">
                                <div className="text-gray-500 font-light">firstname : </div>
                                <input ref={firstNameRef} disabled={!editAbleDetails} type="text" className='outline-none' defaultValue={user.username} />
                            </div>
                            <div className="flex flex-col gap-y-2 border-b border-gray-500 pb-2">
                                {
                                    genders.map((item, index) => (
                                        <div onClick={() => { setGender(item) }} key={index} className="flex items-center jsutify-center gap-x-4 cursor-pointer">
                                            <div className={item === gender ? `flex items-center jutify-center bg-yellow-500 border-4 p-2 rounded-full border-amber-800` : "flex items-center jutify-center bg-white border-4 p-2 rounded-full border-gray-200"}></div>
                                            {item}
                                        </div>
                                    ))
                                }
                                {/* <div className="flex items-center jsutify-center gap-x-4">
                                    <div className="flex items-center jutify-center bg-white border-4 p-2 rounded-full border-gray-200"></div>
                                    Female
                                </div> */}
                            </div>
                            <div className="flex flex-col gap-y-2 border-b border-gray-500 pb-2">
                                <div className="text-gray-500 font-light">lastname : </div>
                                <input ref={lastNameRef} disabled={!editAbleDetails} type="text" className='outline-none' defaultValue={user.username} />
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