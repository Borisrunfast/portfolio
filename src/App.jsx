import Canvas from './Background/Canvas'
import Header from './Header/Header'
import About from './About/About'
import Projects from './Projects/Projects'
import EmailMe from './EmailMe/EmailMe'
import Footer from './Footer/Footer'

function App() {
    return ( 
        <div className='any-text h-fit w-fit scroll-smooth overflow-hidden animate-fadein' style={{animationDuration: '1s'}}>
            
            <Header />
            <About />
            <Projects />
            <EmailMe />
            <Footer />
            <Canvas />
        </div> 
    )
}

export default App