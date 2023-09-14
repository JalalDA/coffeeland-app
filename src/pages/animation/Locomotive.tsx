import React, { useEffect } from 'react'

type Props = {}

const Locomotive = (props: Props) => {

    // useEffect(()=>{
    //     (
    //         async ()=>{
    //             const LocomotiveScroll = new (await import('locomotive-scroll')).default();
    //         }
    //     )()
    // }, [])
  return (
    <div>
        <div className="bg-blue-500 h-screen w-full mb-2"></div>
        <div className="bg-blue-500 h-screen w-full mb-2"></div>
        <div className="bg-blue-500 h-screen w-full mb-2"></div>
    </div>
  )
}

export default Locomotive