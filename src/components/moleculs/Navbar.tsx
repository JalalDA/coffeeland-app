import React, { Fragment, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image'
import logo from '@/assets/images/mylogo.png'
import CustomButton from '../atoms/CustomButton';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducers';
import { IoMdChatbubbles, IoMdPower } from 'react-icons/io'
import { useAppDispatch } from '@/store';
import { logout } from '@/store/features/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { getFailed, getSuccess } from '@/store/features/userSlice';
import { IoPersonCircleSharp } from "react-icons/io5";

type NavbarProps = {
    bgcolor?: string,
}

const Navbar = ({ bgcolor = "" }: NavbarProps) => {
    const token = useSelector((state: RootState) => state.auth.token)
    const id = useSelector((state: RootState) => state.auth.id)

    const navbarItem = [
        {
            name: "Beranda",
            action: "/"
        },
        {
            name: "Product",
            action: "/products"
        },
        {
            name: "Your Cart",
            action: token ? "/cart" : "/"
        },
        {
            name: "History",
            action: "/history"
        },
    ]
    const router = useRouter()
    const searchParams = useSearchParams()
    //@ts-ignore
    const i = searchParams.get("i")

    const dispatch = useAppDispatch()
    const cart = useSelector((state: RootState) => state.cart.cart)
    const user = useSelector((state: RootState) => state.user.user)

    const getUser = async () => {
        try {
            const user = await axios.get(`${process.env.NEXT_PUBLIC_APP_HOST}/api/user?id=${id}`)
            dispatch(getSuccess(user.data?.user))
        } catch (error) {
            console.log({ error });
            dispatch(getFailed())
        }
    }

    useEffect(() => {
        if(id){
            getUser()
        }
    }, [])

    return (
        <Disclosure as="nav" className={`${bgcolor} z-20 py-2 w-full `}>
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div onClick={()=>router.replace("/")} className="flex cursor-pointer items-center gap-x-2">
                                <div className="flex-shrink-0">
                                    <h1 className="text-black dark:text-black font-semibold text-lg">
                                        <Image src={logo} alt='logo' height={40} width={40} />
                                    </h1>
                                </div>
                                <div className="text-xl font-bold">Coffeeland</div>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center space-x-4">
                                    {navbarItem.map((item, index) => (
                                        <div key={index} className='relative'>
                                            {token && cart.length !== 0 && index === 2 && <div className="text-white h-6 w-6 rounded-full absolute text-center bottom-4 -right-4 bg-yellow-500">{cart.length}</div>}
                                            <div onClick={() => {
                                                if (index === 2 && !token || index === 3 && !token) {
                                                    return toast.error("Please login first")
                                                }
                                                router.push(`${item.action}?i=${index}`)
                                            }} key={index} className={`${Number(i) === index ? "font-extrabold text-center text-md md:text-md text-amber-900 " : "text-black dark:text-black"} hover:text-amber-900 font-bold cursor-pointer`}>{item.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="md:flex hidden items-center justify-center gap-x-4">
                                {
                                    token ?
                                        <div className='flex items-center justify-center gap-x-4'>
                                            <input type='text' placeholder='Search . . . ' className='px-4 py-2 border border-gray-100 rounded-xl outline-yellow-500' />
                                            <IoMdChatbubbles className='h-8 w-8 text-yellow-500' />
                                            <Menu>
                                                <Menu.Button>
                                                    {
                                                        user.photo ?
                                                            <Image src={user.photo} alt='Profile' height={32} width={32} className='object-cover h-8 w-8 rounded-full' />
                                                            :
                                                            <IoPersonCircleSharp className='h-10 w-10 text-gray-500' />
                                                    }
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute top-14 z-50 right-14 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div className="px-1 py-1 ">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        onClick={() => {
                                                                            router.push("/profile")
                                                                        }}
                                                                        className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                    >
                                                                        Profile
                                                                        <IoPersonCircleSharp className='ml-2 h-10 w-10' />
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        onClick={() => {
                                                                            dispatch(logout(""))
                                                                        }}
                                                                        className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                    >
                                                                        Logout
                                                                        <IoMdPower className='ml-2' />
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                        </div>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div> :
                                        <div className='md:flex hidden items-center justify-center gap-x-4 text-white dark:text-white'>
                                            <CustomButton onClick={() => router.push("/login")} title={"Login"} styles={"bg-yellow-500 hover:scale-105 duration-200 text-white dark:text-white"} />
                                            <CustomButton onClick={() => router.push("/signup")} title={"Signup"} styles={"hover:scale-105 duration-200"} />
                                        </div>
                                }
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <Disclosure.Button className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        // <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        <AiOutlineClose className='text-yellow-500' />
                                    ) : (
                                        // <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        <AiOutlineBars className='text-yellow-500' />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>
                    <ToastContainer autoClose={1000} />
                    <Disclosure.Panel className="md:hidden px-2">
                        <div className="px-2 mt-1 pb-3 space-y-1 sm:px-3">

                            {navbarItem.map((item, index) => (
                                <div onClick={() => { router.push(`${item.action}?i=${index}`) }} key={index} className={`${Number(i) === index ? "font-extrabold text-md md:text-3xl text-amber-800" : "text-black"} hover:text-amber-800`}>{item.name}</div>
                            ))}
                        </div>
                        {
                            token ?
                                <div className='flex items-center justify-center gap-x-4 w-full'>
                                    <input type='text' placeholder='Search . . . ' className='px-4 py-2 border border-gray-100 w-3/4 rounded-xl outline-yellow-500' />
                                    <IoMdChatbubbles className='h-8 w-8 text-yellow-500' />
                                    <Menu>
                                        <Menu.Button>
                                            {
                                                user.photo ?
                                                    <Image src={user.photo} alt='Profile' height={32} width={32} className='object-cover h-8 w-8 rounded-full' />
                                                    :
                                                    <IoPersonCircleSharp className='h-10 w-10 text-gray-500' />
                                            }
                                        </Menu.Button>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute top-56 z-50 right-0 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="px-1 py-1 ">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={() => {
                                                                    router.push("/profile")
                                                                }}
                                                                className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                            >
                                                                Profile
                                                                <IoPersonCircleSharp className='ml-2 h-10 w-10' />
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={() => {
                                                                    dispatch(logout(""))
                                                                }}
                                                                className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                            >
                                                                Logout
                                                                <IoMdPower className='ml-2' />
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div> :
                                <div className='items-center justify-between gap-y-4 flex-col gap-x-4 w-full text-white dark:text-white'>
                                    <CustomButton onClick={() => router.push("/login")} title={"Login"} styles={"bg-yellow-500 hover:scale-105 duration-200"} />
                                    <CustomButton onClick={() => router.push("/signup")} title={"Signup"} styles={"hover:scale-105 duration-200 mt-4"} />
                                </div>
                        }
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;
