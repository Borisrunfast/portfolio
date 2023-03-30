import Skills from "./Skills"

function About() {

    return ( 
        <div>
        <div>
            <h2>ABOUT ME</h2>
            <div className='' >
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
        <div>
            <h2>SKILLS</h2>
            <div>
                <Skills />
            </div>
        </div>
    </div>
     )
}

export default About