const canvas = document.createElement('canvas')
const body = document.querySelector('body')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight
body.appendChild(canvas)

class Square {
    constructor(x,y,totalWidth,TotalHeight){
        this.x = x
        this.y = y
        this.totalWidth = totalWidth
        this.totalHeight = TotalHeight
        this.height = 0
        this.width = 0
        this.hypotenuse = 0
        this.lastWitdh = 0
        this.lastHeight = 0
        this.maxHypotenuse = Math.sqrt((this.totalWidth**2)+(this.totalHeight**2))
        this.angulo = Math.asin(this.totalHeight/this.maxHypotenuse) * (180/Math.PI)
        this.sin = this.totalHeight/this.maxHypotenuse
        this.cos = this.totalWidth/this.maxHypotenuse
    }

    draw(){
        c.beginPath()
        c.rect(this.x,this.y,this.height,this.width)
        c.stroke()
        c.closePath()

        c.beginPath()
        c.rect(this.x,this,y,210,210)
        c.stroke()
    }

    update(){
        this.hypotenuse += 3
        this.width = this.hypotenuse * this.sin
        this.height = this.hypotenuse * this.cos
        // this.y = (canvas.height/2) - (this.height/2)
        this.x = (canvas.width/2) - (this.width/2)


        this.draw()
    }
}

var square = new Square(canvas.width/2,canvas.height/2,window.innerWidth,window.innerHeight)

console.log(square)
function animate(){
    requestAnimationFrame(animate)

    c.clearRect(0,0,canvas.width,canvas.height)
    square.update()
}

animate()

addEventListener('click',() => {
    for (let index = 0; index < 200; index++) {
        square.update()
    }   
})