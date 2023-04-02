import Canvas from './Background/Canvas'
import Header from './Header/Header'
import About from './About/About'
import Projects from './Projects/Projects'
import EmailMe from './EmailMe/EmailMe'

function App() {
    return ( 
        <div className='any-text h-fit w-fit scroll-smooth overflow-hidden'>
            
            <Header />
            <About />
            <Projects />
            <EmailMe />
            <Canvas />
        </div> 
    )
}

export default App