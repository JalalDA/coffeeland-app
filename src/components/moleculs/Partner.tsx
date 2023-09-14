import React from 'react'

type Props = {}

const Partner = (props: Props) => {
    const partners = [
        {
            img: ""
        },
    ]
    return (
        <div className='p-16 bg-gray-50 flex flex-col gap-y-8 items-center justify-center w-full'>
            <div className="text-3xl text-center font-semibold w-1/4">
                Our Partner
            </div>

        </div>
    )
}

export default Partner