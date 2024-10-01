import Image from 'next/image'
import React from 'react'

import cornerImg from '@/app/assets/box-icon-preview.png'

export default function Box_Img_R_O() {
    return (
        <div className="h-full flex">
            <div className="w-24 sm:w-64 h-96 mx-auto relative">
                <div className="absolute right-0 w-[15px]">
                    <Image src={cornerImg} alt="Description" layout="fixed" />
                </div>
                <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px]">
                    <div className="bg-black w-full h-full"></div>
                </div>
            </div>
        </div>
    )
}
