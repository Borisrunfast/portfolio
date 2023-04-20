import React, { useRef, useEffect } from 'react'


function Canvas() {
  const canvasRef = useRef(null)

  let mouse = {}
  let starsArr = []
  let starAmount = window.innerWidth / 10

  // updates mouse position
  function handleMouseMove(event) {
    mouse = { x: event.clientX, y: event.clientY, radius: 5000 }
  }

  // renders the background
  const renderFrame = () => {
    // pre-sets for the renderer
    const canvas = canvasRef.current
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const ctx = canvas.getContext('2d')


    // star particle constructer
    class StarParticle {
        constructor() {
          // general particle data
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
          this.size = Math.random() * 2
          this.speedX = Math.random()  / 15 - .033
          this.speedY = Math.random()  / 15 - .033
          
          // mouse relevant data
          this.dx = 0
          this.dy = 0
          this.vx = 0
          this.vy = 0
          this.ease = 0.1
          this.distance = 0
          this.friction = Math.random() * 0.6  + 0.15
          this.force = 0
          this.angle = 0
        }

        // draws stars and shadows for stars
        drawStar(color) {
          ctx.fillStyle = color
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.shadowColor = color
          ctx.shadowBlur = 10
          ctx.fill()
        }
        
        
        // updates all relevant featurs for star particles
        update() {
          this.dx = mouse.x - this.x
          this.dy = mouse.y - this.y
          this.distance = this.dx * this.dx + this.dy * this.dy
          this.force = -mouse.radius / this.distance
          
          // if the star is withn the mouse radius, it calculates the direction in whitch the star flyes
          if (this.distance < mouse.radius) {
            this.angle = Math.atan2(this.dy, this.dx)
            this.vx += this.force * Math.cos(this.angle)
            this.vy += this.force * Math.sin(this.angle)
          }
          // if star is of screen reset the velocity and position of the star particle
          if (this.x > canvas.width || this.y > canvas.height) {
            this.x = Math.random() * canvas.width
            this.y = Math.random() * canvas.height
            this.vx = 0
            this.vy = 0
          }
          
          // renders the velocity/position of the particle in said update
          this.x += (this.vx *= this.friction) + this.speedX
          this.y += (this.vy *= this.friction) + this.speedY
        }
      }
    
      
    // adds or removes X Bacground Stars into an array depending on screen width.

    if (starsArr.length < starAmount) {
      for (let i = 0; i < starAmount - starsArr.length; i++) {
        starsArr.push(new StarParticle())
      } 
    }

    // Draws and renders behavier all stars on the screen
    for (let i = 0; i < starsArr.length; i++) {
      starsArr[i].drawStar("#ffffff")
      starsArr[i].update()
    }


    // sets the current mouse position
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener(
      'mousemove',
      handleMouseMove
      )
  }
  }

  // Animates the canvas infinetly without updating the moduel itself

  function tick() {
    if (!canvasRef.current) return
    renderFrame()
    requestAnimationFrame(tick)
  }
  
  useEffect(() => {
    requestAnimationFrame(tick)
  })

  return <canvas className='background-canvas fixed top-0 left-0' ref={canvasRef} />
}

export default Canvas