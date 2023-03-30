import Nav from './Nav'
import HeaderBody from './HeaderBody'

function Header() {

    return (
        <header className='w-screen h-screen'>
            <div className='m-auto w-11/12 h-1/6 sm:flex justify-between items-center'>
                <div className='text-center'>
                    <h4 className=' text-2xl'>BORISAS J. GUZITAJEVAS</h4>
                    <h2 className=' text-2xl'>WEB-DEVELOPER</h2>
                </div>
                <Nav />
            </div>

            <HeaderBody />

        </header>
    )
}

export default Header