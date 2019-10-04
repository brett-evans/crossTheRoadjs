function drawRoad (xPosition) {
    //road itself
    context.fillStyle = 'white'
    context.fillRect(xPosition, 0, 60, canvas.height)
    
    // lines down the middle
    for (let yPos = 0; yPos <= canvas.height; yPos += 30) {
        let pathX = xPosition + 30
        let pathY = yPos
        context.beginPath()
        context.moveTo(pathX, pathY)
        context.lineTo(pathX, pathY + 15)
        context.strokeStyle = 'black'
        context.stroke()
    }    
}

class GameState {
    
    drawBoard(){
        for (let roadLocation = 100; roadLocation < canvas.width; roadLocation += 120) {
            drawRoad(roadLocation)
        }    
    }


}