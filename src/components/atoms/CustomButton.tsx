import React from 'react'
import { FcGoogle } from "react-icons/fc";

type Props = {
    title : String | React.ReactNode,
    onClick? : ()=> void;
    styles? : String,
    icon? : Boolean
}

const CustomButton = (props: Props) => {
  return (
    <div onClick={props.onClick} className={`${props.styles} text-md font-bold flex items-center justify-center px-4 py-2 bg-amber-800  rounded-lg cursor-pointer hover:border `}>
         {props?.icon && <FcGoogle className='mr-4'/>}
         {props.title}
    </div>
  )
}

export default CustomButton