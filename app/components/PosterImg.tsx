"use client"

import Image from 'next/image';
import React, { useState } from 'react'

const PosterImg = ({ moviePoster }: { moviePoster: string }) => {
    const [isBroken, setIsBroken] = useState(false);

    return (
        <div className='relative w-full h-[400px] rounded-t-[10px]'>
            {!isBroken && (
                <Image
                    src={moviePoster}
                    alt="Movie Poster"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-[10px]"
                    onError={() => setIsBroken(true)}
                    onLoadingComplete={() => setIsBroken(false)}
                />
            )}

            {isBroken && (
                <div className="h-full w-full rounded-t-[10px] flex justify-center items-center">
                    <p className="text-[#FFFFFF]">Poster Not Available</p>
                </div>
            )}
        </div>
    )
}

export default PosterImg
