let canvas = document.getElementById('canvas')
let canvasWidth = 128
let canvasHeight = 128
let blockSize = 32
const ctx = canvas.getContext("2d")
//for fps
let secondsPassed;
let oldTimeStamp;
let fps


canvas.width = canvasWidth
canvas.height = canvasHeight

window.onload = () => {
  //start the first frame request
  window.requestAnimationFrame(gameLoop)
}

function gameLoop(timeStamp){
  draw(0,32)
  draw(32,32)
  fpscounter(timeStamp)
  //keeping request new frames
  window.requestAnimationFrame(gameLoop)
}

function fpscounter(timeStamp){
  // Calculate the number of seconds passed since the last frame
  secondsPassed = (timeStamp - oldTimeStamp) / 1000
  oldTimeStamp = timeStamp
  // Calculate fps
  fps = Math.round(1 / secondsPassed)
  // Draw number to the screen
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, 84, 32)
  ctx.font = '16px Arial'
  ctx.fillStyle = 'black'
  console.log(fps)
  ctx.fillText("FPS: " + fps, 10, 22)
}

function draw(x,y){
  let randomColor = Math.random() > 0.5? '#ff8080' : '#0099b0'
  ctx.fillStyle = randomColor
  ctx.fillRect(x,y,32,32)
}