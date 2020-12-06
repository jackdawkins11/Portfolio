
//An asteroid stores a location,
//a velocity, and details about drawing it
class Asteroid {
    //Initialize a new asteroid
    constructor(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.r = Math.random() * MAXRADIUS

        //These 3 star colors are stolen from this codepen
        //https://codepen.io/alexandredees/pen/wseEi
        var rand = Math.random()
        if (rand <= 0.5) {
            this.fillStyle = "rgba(255, 255, 255, 1)"
            this.shadowColor = "rgba(255, 255, 255, 0.5)"
            this.shadowBlur = 3
        }
        else if (rand > 0.75) {
            this.fillStyle = "rgba(255, 254, 196, 1)"
            this.shadowColor = "rgba(255, 254, 196, 0.5)"
            this.shadowBlur = 4
        }
        else {
            this.fillStyle = "rgba(192, 247, 255, 1)"
            this.shadowColor = "rgba(192, 247, 255, 0.5)"
            this.shadowBlur = 7
        }
    }

    //Move it as if one unit of time has passed
    update() {
        this.x += this.vx
        this.y += this.vy
    }

    //Check if the asteroid has left the screen
    inBounds(w, h) {
        return this.x < w && this.y < h
    }

    //Draw the asteroid to the canvas
    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
        ctx.fillStyle = this.fillStyle
        ctx.shadowColor = this.shadowColor
        ctx.shadowBlur = this.shadowBlur
        ctx.fill()
    }
}

const MAXVELOCITY = 5
const AVGSLOPE = 10
const PROBNEWASTEROID = 0.1
const MAXRADIUS = 15

class Simulation {
    //This stores the state of the simulation
    constructor(width, height) {
        //
        this.asteroids = []
        this.width = width
        this.height = height
        this.paused = false
    }

    //Draw the current state of the simulation to the screen
    paint(canvas, ctx) {
        //clear the screen
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        //draw each asteroid
        for (let asteroid of this.asteroids) {
            asteroid.draw(ctx)
        }
    }

    //Calls update on each asteroid
    //Deletes all out of bounds asteroids
    //Possibly creates a new asteroid
    update() {
        if( this.paused ){
            return
        }
        for (let asteroid of this.asteroids) {
            asteroid.update()
        }
        this.asteroids = this.asteroids.filter((asteroid) => {
            return asteroid.inBounds(this.width, this.height)
        })
        this.randomAsteroids()
    }

    //Possibly adds a new asteroid
    randomAsteroids() {
        if (Math.random() <= PROBNEWASTEROID) {
            this.asteroids.push(
                new Asteroid(
                    Math.random() * this.width,         //random x
                    0,                                  //top of screen
                    Math.random() * MAXVELOCITY / AVGSLOPE - MAXVELOCITY / (AVGSLOPE * 2),  //small random x velocity
                    Math.random() * MAXVELOCITY  //random positive y velocity
                )
            )
        }
    }
}

export { Simulation }