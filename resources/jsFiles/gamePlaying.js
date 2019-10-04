// global variables
const canvas = document.getElementById("gameScreen");
const context = canvas.getContext("2d");

//object construction
let state = new GameState();

//player and chaser objects
let player1 = new Player(60);

let activeChaser = new Player(30);

//obsicle objects
let cars = []
let arrayNum = 0

for (let carLocation = 105; carLocation < canvas.height; carLocation += 120) {
    
    cars[arrayNum] = new Car(carLocation)
    cars[arrayNum + 1] = new Car(carLocation + 30)
    
    arrayNum += 2
}

//game loop process
    // update the game worlds data
function update() {
// add the movement to chaser player and cars    
    window.addEventListener('keydown', event => {
        if (event.keyCode == 39) {
            player1.movePlayer()
        }    
    })

    activeChaser.moveChaser();

    // this needs to be changed into a loop
    cars[0].moveObstacle();
    cars[1].moveObstacle();
    cars[2].moveObstacle();
    cars[3].moveObstacle();
    cars[4].moveObstacle();
    cars[5].moveObstacle();
    cars[6].moveObstacle();
    cars[7].moveObstacle();

    //still need to add collision detection

}

// draws the game world
function draw () {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    // static objects
    state.drawBoard()

    // movable objects
    player1.drawThis('purple')
    activeChaser.drawThis('red')

    cars[0].drawObstacle()
    cars[1].drawObstacle()
    cars[2].drawObstacle()
    cars[3].drawObstacle()
    cars[4].drawObstacle()
    cars[5].drawObstacle()
    cars[6].drawObstacle()
    cars[7].drawObstacle()
}

function gameLoop() {

    update()
    draw()

    window.requestAnimationFrame(gameLoop)
}

window.requestAnimationFrame(gameLoop)



