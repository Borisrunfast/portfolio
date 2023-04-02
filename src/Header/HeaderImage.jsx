import React from 'react'
import images from './imagesData'

function TextImage(props) {
    const {imageId} = props
    let image = images[imageId].url

    return <img src={image} alt={images[imageId].alt} className='header-img    max-sm:w-[200px] max-sm:h-[200px]    max-lg:w-[350px] max-lg:h-[350px]'/>
}

export default TextImage