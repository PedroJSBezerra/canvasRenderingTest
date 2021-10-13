//======= FPS COUNTER  =========
let secondsPassed;
let oldTimeStamp;
let fps

function fpscounter(timeStamp, ctx){
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
  ctx.fillText("FPS: " + fps, 10, 22)
}

export {fpscounter}