// components/ImageOverlay.tsx
import { StaticImageData } from 'next/image';
import React from 'react';
import Image from 'next/image';

interface ImageOverlayProps {
    imageUrl: string | StaticImageData;
    children : React.ReactNode
}

const ImageHistory: React.FC<ImageOverlayProps> = ({ imageUrl, children }) => {
    return (
        <div className="relative">
            {/* <img src={imageUrl} alt="Gambar" className="w-full h-auto" /> */}
            <Image className='h-[60rem] md:h-screen w-full object-cover' height={200} width={200} src={imageUrl} alt='imageurl' />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="bg-black text-white p-4 opacity-50 h-full w-full">
                </div>
                <div className="h-[60rem] md:h-screen overflow-scroll font-bold flex flex-col items-center md:p-20  w-full justify-start absolute text-white">
                        <div className="font-bold text-2xl text-center">Let’s see what you have bought!</div>
                        <div className="text-md font-light">Long press to delete item</div>
                        {children}
                </div>
            </div>
        </div>
    );
};

export default ImageHistory;
