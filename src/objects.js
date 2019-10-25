

class Atom {

    constructor({ randomRate, color }) {
        this.position = [Math.random() * WIDTH, Math.random() * HEIGHT]
        this.radius = radius;
        this.randomRate = randomRate;
        this.color = color;
    }

    move = () => {
        this.position[0] += random(this.randomRate) - this.randomRate / 2; // ramdom value between -(randomRate/2) and +(randomRate/2)
        this.position[1] += random(this.randomRate) - this.randomRate / 2;

        if (this.position[0] - this.radius / 2 > WIDTH) this.position[0] = - this.radius // avoid getting out of canvas
        if (this.position[1] - this.radius / 2 > HEIGHT) this.position[1] = - this.radius;
    }

    create = () => {
        this.move();
        fill(this.color);
        noStroke();
        circle(this.position[0], this.position[1], this.radius);
    }


    // 1 ) CREATE COLLISION CHECK FUNCTION




    // 3 ) CREATE DETECT FUNCTION




    // 4 ) CREATE EAT FUNCTION




}