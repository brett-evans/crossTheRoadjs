class Player {
    constructor( xAxisParam) {
        this.xAxis = xAxisParam;
        this.yAxis = canvas.height/2 - 20;
        this.width = 20;
        this.height = 30;
        this.enemyXSpeed = .2;
        this.playerXSpeed = 0.01
    }

    drawThis(color) {
        if (color == 'purple') {
            context.fillStyle = "#9933ff";//purple
        } else if (color == 'red') {
            context.fillStyle = "#b30000";//dark red 
        }
        
        context.fillRect(this.xAxis, this.yAxis, this.width, this.height);
    }
    //proper movement
    moveChaser () {
        this.xAxis += this.enemyXSpeed;
    }

    //currently stuggleing with this for some reason but this number seems to work for now
    movePlayer() {
        this.xAxis += this.playerXSpeed
    }

} 