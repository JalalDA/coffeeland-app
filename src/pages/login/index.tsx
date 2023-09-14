import Button from '@/components/atoms/Button'
import Loading from '@/components/atoms/Loading'
import Footer from '@/components/moleculs/Footer'
import Promo from '@/components/moleculs/Promo'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useAppDispatch } from '@/store'
import { loginSuccess } from '@/store/features/authSlice'
import { toast, ToastContainer } from 'react-toastify'

type Props = {}

const Login = (props: Props) => {
    const [showPass, setShowPass] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()


    const dispatch = useAppDispatch()
    const login = async()=>{
        try {
            if(!email || !password){
                return alert("Please fill this from")
            }
            setIsLoading(true)
            const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_HOST}/api/auth/login`, {
                email,
                password
            })
            console.log({response});
            if(response.status === 200){
                dispatch(loginSuccess(response.data))
                toast.success("Login Success")
                router.push('/')
            }
        } catch (error) {
            console.log({error});
            //@ts-ignore
            toast.error(error.response?.data?.msg || "Something wrong, try again later")
        }
        setIsLoading(false)
    }
    return (
        <div key={"asdasd"}>
            <Head><title>Login</title></Head>
            <ToastContainer autoClose={1000}/>
            <div className="relative flex items-center w-full bg-white justify-between">
                <Image className='hidden md:block w-1/2 h-[50rem]' height={400} width={400} src={"/images/authimage.png"} alt='authimg' />
                <div className="absolute hidden md:block top-0 w-1/2 h-[50rem] bg-black opacity-50 "></div>
                <div className='w-full md:w-1/2 md:p-8 p-4 flex items-center justify-start flex-col h-[40rem] md:h-[50rem]'>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center justify-center gap-x-2">
                            <Image src={'/images/logo.png'} alt='logo' height={24} width={24} />
                            <div className="text-xl font-bold">Coffeeland</div>
                        </div>
                        <Button onClick={()=>router.push("/signup")} title={"Sign Up"} styles={"bg-yellow-500 text-amber-800"} />
                    </div>
                    <div className="text-3xl text-amber-900 font-bold mt-4">Login</div>
                    <form action="" className='mt-8 bg-white h-screen shadow-xl rounded-lg w-full md:w-4/5 md:p-8 p-4'>
                        <div className="mb-4 flex flex-col w-full">
                            <label className='font-bold' htmlFor="email">Email Adress :</label>
                            <input id='email' name='email' onChange={e=>setEmail(e.target.value)} type="text" className='mt-2 p-2 outline-yellow-500 border border-gray-100 rounded-lg' />
                        </div>
                        <div className="mb-4 flex flex-col w-full">
                            <label className='font-bold' htmlFor="password">Password :</label>
                            <div className="relative w-full">
                                <div onClick={()=>{
                                    setShowPass(!showPass)
                                }} className='cursor-pointer'>
                                    {showPass ? <FaEyeSlash className='top-5 absolute right-4' /> : <FaEye className='top-5 absolute right-4' />}
                                </div>
                                <input id='password' name='password' onChange={e=>setPassword(e.target.value)} type={showPass ? "text" : "password"} className='mt-2 p-2 w-full outline-yellow-500 border border-gray-100 rounded-lg' />
                            </div>
                        </div>
                        <div onClick={()=>router.push("/forgot")} className="text-sm cursor-pointer text-amber-800 font-bold underline">Forgot password?</div>
                        <Button onClick={login} title={isLoading ? <Loading/> : "Login"} styles={"mt-12 bg-yellow-500 text-amber-800 text-md md:text-xl"} />
                        <div className="bg-white mt-4 md:mt-8 shadow-xl w-full py-4 rounded-lg font-bold text-center cursor-pointer">Login With Google</div>
                    </form>
                </div>
            </div>
            <Promo />
            <Footer />
        </div>
    )
}

export default Login