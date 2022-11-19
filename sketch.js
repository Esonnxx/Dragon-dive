
class Star {
  constructor() {
    this.X = random(800)
    this.Y = random(800)
    this.colorBuilder()
    this.w = this.w
    this.h = this.h
    this.speed = random(2, 5)


  }

  colorBuilder () {
    var r = 246
    var g = 203
    var b = 28
    this.color = color(r, g, b, 255)

  }

  Draw () {
    let color = this.color
    let color1 = this.color


    fill(246, 203, 28, 150)
    noStroke()
    ellipse(this.X, this.Y - 25, 8, 60)
    noStroke()


    fill(color1)
    ellipse(this.X, this.Y, random(1, 10), random(5, 20))
    fill(255)





  }
  update () {


    this.Y += this.speed


    if (this.Y > 800) {
      this.Y -= 800
    }


  }

}
let starStorage = []
function setup () {



  createCanvas(800, 800)
  background(0)


  for (let i = 0; i < 200; i++) {
    starStorage.push(new Star())

  }
}

function draw () {

  background(0)
  fill(random(0, 1), random(0, 5), 255)



  for (let star of starStorage) {

    star.Draw()
    star.update()
  }

}
