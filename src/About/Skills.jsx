function Skills() {
    const imgArr = ['/images_skill/html-logo.png', '/images_skill/css-logo.png', '/images_skill/JavaScript-logo.png', '/images_skill/react-logo.png']
    const descArr = ['HTML5', 'CSS3', 'JavaScript', 'React']

    const imgHtml = imgArr.map((img, i) => {
        return (
            <div className='w-auto h-auto flex flex-col justify-center items-center' key={i}>
                <img className="w-1/4   max-lg:w-2/4" src={img + ''} alt={descArr[i]}/>
                
                <p className="text-xl    max-sm:text-sm     max-lg:text-xl">{descArr[i]}</p>
            </div>
        )
    })

    return imgHtml
}

export default Skills