import React, { useState, useRef, useEffect } from 'react'
import Project from './Project'

import projectData from './projectData'

function Projects() {
    const [displayData, setDisplayData] = useState([projectData[0], projectData[1]])
    const html = []


    for (let i = 0; i < projectData.length; i++) {
        const holdObj = projectData.filter(item => {
            return item.name === projectData[i].name
        })
        i += holdObj.length - 1
        html.push(
        <img 
            className='w-4/12 object-cover object-top aspect-video'
            key={i} 
            src={holdObj[0].url} 
            alt={holdObj[0].name} 
            tabIndex='0' 
            onFocus={() => displayProject(holdObj[0].name)} 
            onClick={() => displayProject(holdObj[0].name)}
        />)
    }
    
    function displayProject(name) {
        setDisplayData(projectData.filter(item => {
            return item.name === name
        })) 
    }

    function slideRight() {
        const scrollDiv = document.getElementById('slider')
        scrollDiv.scrollLeft += 900
    }

    function slideLeft() {
        const scrollDiv = document.getElementById('slider')
        scrollDiv.scrollLeft -= 900
    }


    return (
        <div id='projects' className='w-screen min-h-screen flex flex-col justify-center items-center    max-sm:mt-16' >
            
            <div className='div-decor w-11/12 h-fit'>
                <h2 className='pb-8'>PROJECTS</h2>

                <div className='w-auto h-64 mb-8 flex overflow-hidden'>
                    <button className='text-8xl w-12 h-full    max-lg:hidden' onClick={slideLeft}>&#8249;</button>
                    <div id='slider' className='w-full flex justify-center overflow-hidden scroll-smooth    max-lg:flex-wrap'>
                        {html}
                    </div>
                    <button className='text-8xl w-12 h-full    max-lg:hidden' onClick={slideRight}>&#8250;</button>

                </div>
            
                <Project displayData={displayData}/>
            </div>
        </div>
    )
}


export default Projects