import Image from 'next/image'
import React from 'react'

export default function Box_Img_L_I({ cornerImg }) {
    return (

        <div className="h-full flex">
            <div className="w-24 sm:w-64 h-96 mx-auto relative">
                <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px]">
                    <div className="absolute left-0 w-[15px]">
                        <Image src={cornerImg} alt="Description" layout="fixed" className="transform rotate-180 " />
                    </div>
                    <div className="bg-black w-full h-full"></div>
                </div>
            </div>
        </div>
    )
}
