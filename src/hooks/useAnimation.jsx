import { useState, useEffect, useRef } from 'react'

function useAnimation() {
    const [animate, setAnimate] = useState('')

    const ref = useRef()
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
            setAnimate(' animate')
        } else {
            setAnimate('')
        }
      })
      observer.observe(ref.current)
    }, [])

    return [ref, animate]
}


export default useAnimation