import React from 'react'

type Props = {
    title : String,
    onClick? : ()=> void;
    styles? : String
}

const CustomButton = (props: Props) => {
  return (
    <div onClick={props.onClick} className={`${props.styles} text-md font-bold flex items-center justify-center px-4 py-2 bg-amber-800  rounded-lg cursor-pointer hover:border `}>
        {props.title}
    </div>
  )
}

export default CustomButton