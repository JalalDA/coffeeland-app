// components/ImageOverlay.tsx
import { StaticImageData } from 'next/image';
import React from 'react';
import Image from 'next/image';
import Button from './Button';
import {FaSearch} from 'react-icons/fa'

interface ImageOverlayProps {
    imageUrl: string | StaticImageData;
    overlayText: string;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({ imageUrl, overlayText }) => {
    return (
        <div className="relative">
            {/* <img src={imageUrl} alt="Gambar" className="w-full h-auto" /> */}
            <Image className='h-[28rem] md:h-[40rem] w-full object-cover' height={200} width={200} src={imageUrl} alt='imageurl' />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="bg-black text-white p-4 opacity-50 h-full w-full">
                </div>
                <div className="font-bold flex md:flex-row flex-col items-start md:p-20  w-full h-full justify-between absolute text-2xl md:text-6xl text-white">
                    <div className='p-4 w-full md:w-1/2'>
                        Start Your Day with Coffee and Good Meals
                        <div className="text-xl font-light md:text-xl md:mb-20 md:font-bold mt-4 md:mt-8">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</div>
                        <Button styles={"bg-yellow-500 w-full md:w-1/3 py-4 mt-8 text-yellow-900 font-extrabold text-xl"} title={"Get Started"}/>
                    </div>
                    <div className="md:w-1/2 w-full mb-4 flex items-center text-xl justify-center">
                        <div className="bg-white flex items-center justify-center gap-x-2 text-black rounded-full p-4 w-1/2">   
                            <FaSearch/> 
                            <input type="text" className='text-md w-full outline-none text-black' placeholder='Search . . .'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageOverlay;
