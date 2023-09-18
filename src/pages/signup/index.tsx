import Button from '@/components/atoms/Button'
import Footer from '@/components/moleculs/Footer'
import Promo from '@/components/moleculs/Promo'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import axios from 'axios'
import Loading from '@/components/atoms/Loading'
import {toast, ToastContainer} from 'react-toastify'
import { useGoogleLogin } from '@react-oauth/google'
import { useAppDispatch } from '@/store'
import { loginSuccess } from '@/store/features/authSlice'
import CustomButton from '@/components/atoms/CustomButton'

type Props = {}

const Signup = (props: Props) => {
    const [showPass, setShowPass] = useState(false)
    const router = useRouter()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("") 
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useAppDispatch()

    const signUp = async ()=>{
        if(!username || !email || !password || !phone){
            return alert("Please fill the from first")
        }
        setIsLoading(true)
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_HOST}/api/auth/signup`, {
                username,
                email,
                password,
                phone
            })
            console.log({response});
            if(response.status === 200){
                toast.success("Register success, please login")
                router.push("/login")
            }
        } catch (error) {
            console.log({error});
            //@ts-ignore
            toast.error(error?.response?.data?.msg || "Something wrong, try again")
        }
        setIsLoading(false)
    }

    const loginGoogle = useGoogleLogin({
        onSuccess : async ({access_token})=> {
            try {
                const userInfo = await axios.get(
                    'https://www.googleapis.com/oauth2/v3/userinfo',
                    { headers: { Authorization: `Bearer ${access_token}` } },
                  );
                const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_HOST}/api/auth/google`, {
                    email : userInfo.data?.email,
                    username : userInfo.data?.name,
                    photo : userInfo.data?.picture
                })
                dispatch(loginSuccess(response.data))
                router.push("/")
            } catch (error) {
                console.log({error});
            }
        }
    })
    return (
        <div key={"asdasd"}>
            <Head><title>Signup</title></Head>
            <ToastContainer autoClose={1000}/>
            <div className="relative flex items-center w-full bg-white justify-between">
                <Image className='hidden md:block w-1/2 h-[50rem]' height={400} width={400} src={"/images/authimage.png"} alt='authimg' />
                <div className="absolute hidden md:block top-0 w-1/2 h-[50rem] bg-black opacity-50 "></div>
                <div className='w-full md:w-1/2 md:p-8 p-4 flex items-center justify-start flex-col h-[46rem] md:h-[50rem]'>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center justify-center gap-x-2">
                            <Image src={'/images/logo.png'} alt='logo' height={24} width={24} />
                            <div className="text-xl font-bold">Coffeeland</div>
                        </div>
                        <Button onClick={()=>{router.push("/login")}} title={"Login"} styles={"bg-yellow-500 text-amber-800"} />
                    </div>
                    <div className="text-3xl text-amber-900 font-bold mt-4">Signup</div>
                    <form action="" className='mt-8 bg-white shadow-xl rounded-lg w-full md:w-4/5 md:p-8 p-4'>
                    <div className="mb-4 flex flex-col w-full">
                            <label className='font-bold' htmlFor="username">Username :</label>
                            <input id='username' name='username' onChange={(e)=>{setUsername(e.target.value)}} type="text" className='mt-2 p-2 outline-yellow-500 border border-gray-100 rounded-lg' />
                        </div>
                        <div className="mb-4 flex flex-col w-full">
                            <label className='font-bold' htmlFor="email">Email Adress :</label>
                            <input id='email' name='email' onChange={(e)=>{setEmail(e.target.value)}} type="text" className='mt-2 p-2 outline-yellow-500 border border-gray-100 rounded-lg' />
                        </div>
                        <div className="mb-4 flex flex-col w-full">
                            <label className='font-bold' htmlFor="password">Password :</label>
                            <div className="relative w-full">
                                <div onClick={()=>{
                                    setShowPass(!showPass)
                                }} className='cursor-pointer'>
                                    {showPass ? <FaEyeSlash className='top-5 absolute right-4' /> : <FaEye className='top-5 absolute right-4' />}
                                </div>
                                <input id='password' name='password' onChange={(e)=>setPassword(e.target.value)} type={showPass ? "text" : "password"} className='mt-2 p-2 w-full outline-yellow-500 border border-gray-100 rounded-lg' />
                            </div>
                        </div>
                        <div className="mb-4 flex flex-col w-full">
                            <label className='font-bold' htmlFor="phone">Phone Number :</label>
                            <input id='phone' name='phone' onChange={e=>setPhone(e.target.value)} type="number" className='mt-2 p-2 outline-yellow-500 border border-gray-100 rounded-lg' />
                        </div>
                        <div onClick={()=>router.push("/forgot")} className="text-sm text-amber-800 font-bold underline cursor-pointer">Forgot password?</div>
                        <Button onClick={signUp} title={isLoading ? <Loading/> : "Signup"} styles={"mt-12 bg-yellow-500 text-amber-800 text-xl"} />
                        <CustomButton icon={true} styles={"mt-4 bg-white shadow-xl"} onClick={()=>loginGoogle()} title="Sign up With Google"/>
                    </form>
                </div>
            </div>
            <Promo />
            <Footer />
        </div>
    )
}

export default Signup