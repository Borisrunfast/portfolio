function Skills() {
    const imgArr = ['./images_skill/html-logo.png', './images_skill/css-logo.png', './images_skill/JavaScript-logo.png', './images_skill/react-logo.png']
    const descArr = ['HTML5', 'CSS3', 'JavaScript', 'React']

    const imgHtml = imgArr.map((img, i) => {
        return <div className='' key={i}><img src={img + ''} alt={descArr[i]}/><p>{descArr[i]}</p></div>
    })

    return imgHtml
}

export default Skills