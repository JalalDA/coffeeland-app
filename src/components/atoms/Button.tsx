import React from 'react'

type Props = {
    title : String | React.ReactNode,
    onClick? : ()=> void;
    styles? : String
}

const Button = (props: Props) => {
  return (
    <div onClick={props.onClick} className={`${props.styles} text-sm font-bold flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:border `}>
        {props.title}
    </div>
  )
}

export default Button