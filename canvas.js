//============= global data ===============
let canvas
let ctx
let map
let keys = []
let x = 0
let y = 0
//============ initial settings ===========
window.onload = init
function init(){
  canvas = document.getElementById("canvas")
  ctx = canvas.getContext("2d")
  canvas.width = 256
  canvas.height = 256
  window.requestAnimationFrame(gameLoop)

  canvas.onkeydown = canvas.onkeyup = (e) => {
    keys[e.key] = e.type == 'keydown'
    console.log(keys)
  }
}
// desenhe o background apenas
// uma vez para uma melhor performance
function draWbackground(){
  let image 
  image = new Image()
  image.onload = () => {
    map = {
      width: image.width,
      height: image.height
    }
    ctx.drawImage(image, 0, 0, 640, 640);
  }
  image.src = './tilesets/terrain1.png'
}
//============ game loop ===================

function gameLoop(){
  draWbackground()
  ctx.clearRect(x+64,y+64,32,32)
  window.requestAnimationFrame(gameLoop)
}