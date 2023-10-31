import React, {useState} from 'react'
import HeaderImage from './HeaderImage'

function HeaderBody() {
    const [imageId, setImageId] = useState(0)

    return ( 
        <div className='header-animation w-10/12 h-4/6 m-auto flex items-center justify-center    max-lg:flex-col max-lg:h-5/6 max-lg:text-center'>
            <div className='w-4/6 h-auto    max-lg:w-fit max-lg:h-1/6'>
                
                <h1 className="text-6xl mb-8 animate    max-sm:text-xl max-lg:mb-2    max-lg:text-5xl"  style={{animationDuration: '2s'}}>
                    <span onMouseEnter={() => setImageId(0)} data-text='WELCOME TO MY WEBSITE'>WELCOME TO MY WEBSITE</span>
                </h1>
                
                <h2 className="text-3xl w-10/12 text-left animate    max-sm:text-sm max-lg:text-center max-lg:m-auto     max-lg:text-2xl"  style={{animationDuration: '2.5s'}}>
                    MY NAME IS <span onMouseEnter={() => setImageId(1)} className='' data-text='BORIS'>BORIS</span> AND I AM A 21 YEAR OLD <span onMouseEnter={() => setImageId(2)} className='whitespace-nowrap' data-text='WEB-DEVELOPER'>WEB-DEVELOPER</span>
                </h2>
            </div>

            <div className='w-2/6 h-auto flex justify-center items-center animate   max-lg:w-fit max-lg:h-2/4' style={{animationDuration: '2.75s'}}>
                <HeaderImage imageId={imageId}/>
            </div>
        </div>
    )
}

export default HeaderBody
