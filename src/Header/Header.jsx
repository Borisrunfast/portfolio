import Nav from './Nav'
import HeaderBody from './HeaderBody'

function Header() {

    return (
        <header className='mb-2 w-screen h-screen'>
            <div className='m-auto w-10/12 h-1/6 flex justify-between items-center     max-lg:flex-col max-lg:mt-2'>
                <div className='text-center animate' style={{animationDuration: '1s'}}>
                    <h4 className='text-2xl    max-sm:text-sm    max-lg:text-4xl'>BORISAS J. GUZITAJEVAS</h4>
                    <h2 className='text-2xl    max-sm:text-lg    max-lg:text-4xl'>WEB-DEVELOPER</h2>
                </div>
                <Nav />
            </div>

            <HeaderBody />

        </header>
    )
}

export default Header