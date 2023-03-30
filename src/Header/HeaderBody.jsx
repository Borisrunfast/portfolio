function HeaderBody() {



    return ( 
        <div className='w-11/12 h-4/6 m-auto flex items-center'>
            <div className='w-4/6 h-auto'>
                
                <h1 className="text-5xl" data-text='WELCOME TO MY WEBSITE'>
                    WELCOME TO MY WEBSITE
                </h1>
                
                <h2 className="text-3xl">
                    MY NAME IS <span  className='' data-text='BORIS'>BORIS</span> AND I AM A <span className=''>20
                    </span> YEAR OLD <span className='' data-text='WEB-DEVELOPER'>WEB-DEVELOPER</span>
                </h2>
            </div>

            <div className='w-2/6 h-auto'>
                <div className="bg-black w-60 h-60"></div>
            </div>
        </div>
    )
}

export default HeaderBody