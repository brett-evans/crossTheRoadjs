class Car {
    constructor(xAxisParameter) {
        this.xAxis = xAxisParameter;
        this.yAxis = Math.floor(Math.random() * 400);
        this.width = 20;
        this.height = 40;
        this.ySpeed = 4;
        this.direction = Math.floor(Math.random() * 3);
    }

    drawObstacle() {
        context.fillStyle = "#0000b3";//dark blue
        context.fillRect(this.xAxis, this.yAxis, this.width, this.height);
    }
    
    moveObstacle () {
        // start moving in random direction
        if (this.direction == 0 ||this.direction == 1) {
            this.yAxis += this.ySpeed;
        }else if(this.direction == 2 || this.direction == 3) {
            this.yAxis -= this.ySpeed
        }

        //bounce
        if (this.yAxis < 0 || this.yAxis > canvas.height - 40){
            this.ySpeed *= -1

        }
    }
} 