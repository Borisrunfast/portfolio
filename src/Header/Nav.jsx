import React from 'react'

function Nav() {

    return (

        <ul className='flex'>
            <li><a href="https://github.com/Borisrunfast?tab=overview&from=2023-02-01&to=2023-02-28" target="_blank" rel="noreferrer"><img src='./HeaderImg/gitHub-logo.png' alt="github" />GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/borisas-guzitajevas/" target="_blank" rel="noreferrer"><img src='./HeaderImg/linkedIn-logo.png' target="_blank" alt='linkedin'/>LinkedIn</a></li>
            <li><a href="#home" rel="noreferrer"><img src='./HeaderImg/resume-logo.png' target="_blank" alt='resume'/>Resume</a></li>
        </ul>
    )
}

export default Nav