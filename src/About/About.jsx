import Skills from "./Skills"
import useAnimation from "../hooks/useAnimation"

function About() {
    const [ref, animate] = useAnimation()

    return (
        <div ref={ref} className="mb-8 w-screen min-h-screen flex justify-center items-center">
            <div className={"div-decor w-11/12 flex    max-lg:flex-col" + animate} style={{animationDuration: '2s'}}>
                <div className={"w-2/4 h-auto pb-8    max-lg:w-fit" + animate} style={{animationDuration: '2.25s'}}>


                    <h2 className="mb-8   max-sm:mb-2">ABOUT ME</h2>
                    <div className='text-lg font-normal    max-sm:text-sm     max-lg:text-lg'>
                        <p>I am a Web-Developer who lives in Norway, and I am eager to employ my skills to help out growing businesses.</p>
                        <br/>
                        <p>I am most used to working with JavaScript and React, but am very keen on taking new challenges.</p>
                        <br/>
                        <p>I am very open to learn new applications involving programming. Currently I am working on improving my UI/UX skills, 
                        improving my programming skills by learning different data structures and algorithms. 
                        When I am not programming, I tend to hang out with my family/friends, play my guitar or play video games.
                        </p>
                    </div>


                </div>
                <div className={"w-2/4 h-auto    max-lg:w-fit" + animate} style={{animationDuration: '2.5s'}}>


                    <h2>SKILLS</h2>
                    <div className="w-full h-5/6 grid grid-cols-2 grid-rows-2 items-center justify-center">
                        <Skills />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default About