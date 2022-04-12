const canvas = document.querySelector('canvas')
const canvasContext = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Ball{
    
    constructor(x,y,xVelocity,yVelocity,radius,color){
        this.x = x
        this.y = y
        this.xVelocity = xVelocity
        this.yVelocity = yVelocity
        this.radius = radius
        this.color = color
    }

    draw(){
        canvasContext.beginPath()
        canvasContext.arc(this.x,this.y,this.radius,0,Math.PI * 2, false)
        canvasContext.fillStyle = this.color
        canvasContext.fill()
        canvasContext.stroke()
        canvasContext.closePath()
    }

    update(){
        if(this.y + this.radius + this.yVelocity > canvas.height){
            this.yVelocity = -this.yVelocity * 0.9            
        }else{
            this.yVelocity += 1
        }

        if(this.x + this.radius + this.xVelocity > canvas.width || this.x - this.radius <=  0){
            this.xVelocity = -this.xVelocity
        }

        this.x += this.xVelocity
        this.y += this.yVelocity
        
        this.draw()
    }
}

function randNumber(max,min) {
    return Math.random() * (max - min + 1) + min
}

const colors = [
    "#10B053",
    "#9400FF",
    "#30FC85",
    "#FCA817",
    "#B07819"
]

var ballArray = []
function init(){
    ballArray = []
    for (let index = 0; index < 1; index++) {
        const ballColor = colors[parseInt(randNumber(colors.length, 0))]
        const radius = randNumber(30,10)
        const x = randNumber(canvas.width - radius,0)
        const y = randNumber(canvas.height - radius,0)
        const xVelocity = randNumber(2,-2)
        const yVelocity = randNumber(5,1)
        console.log(new Ball(x,y,xVelocity,yVelocity,radius,ballColor))
        ballArray.push(new Ball(x,y,xVelocity,yVelocity,radius,ballColor))
    }

    animate()
}

function animate(){
    requestAnimationFrame(animate)
    canvasContext.clearRect(0,0,canvas.width,canvas.height)

    for (let index = 0; index < ballArray.length; index++) {
        ballArray[index].update()
    };
}

init()

addEventListener("click",()=>{
    init()
})