import React from 'react'

function Project({displayData}) {

    const html = []
    const displayW = ['w-11/12', 'w-2/5', 'w-3/12']

    for (let i = 0; i < displayData.length; i++) {
        html.push(
        <img 
            className={displayW[displayData.length - 1] + ' max-sm:h-auto'}
            key={i} 
            src={displayData[i].url + ''} 
            alt={displayData[i].alt}
        />)
    }


    return (
        <div className=''>
            <h2 className='pb-8'>{displayData[0].name}</h2>
            <div className='flex    max-lg:flex-col'>

                <div id="display-project" className='flex flex-wrap gap-2 w-2/4 justify-center    max-lg:w-full'>
                    {html}

                </div>
                <div className='w-2/4    max-lg:w-full'>
                <p className='mb-8 font-normal    max-sm:text-sm     max-lg:text-lg'>{displayData[0].description}</p>
                <button className='button-decor    max-lg:float-right'>GitHub</button>

                </div>
            </div>
        </div>
    )
}

export default Project