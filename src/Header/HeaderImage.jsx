import React from 'react'
import images from './imagesData'

function TextImage({ imageId }) {

const show = [' hidden', ' hidden', ' hidden']

switch (imageId) {
    case 0: show[0] = ''
    break
    case 1: show[1] = ''
    break
    case 2: show[2] = ''
}

    return (
        <>
            <img src={images[0].url} alt={images[0].alt} className={'header-img absolute    max-sm:w-[200px] max-sm:h-[200px]    max-lg:w-[350px] max-lg:h-[350px]' + show[0]}/>
            <img src={images[1].url} alt={images[1].alt} className={'header-img absolute    max-sm:w-[200px] max-sm:h-[200px]    max-lg:w-[350px] max-lg:h-[350px]' + show[1]}/>
            <img src={images[2].url} alt={images[2].alt} className={'header-img absolute    max-sm:w-[200px] max-sm:h-[200px]    max-lg:w-[350px] max-lg:h-[350px]' + show[2]}/>
        </>
    )
}

export default TextImage