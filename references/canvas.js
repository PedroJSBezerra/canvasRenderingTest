"use strict"
//============= global data ===============
import { fpscounter } from '../utility.js'
let canvas
let ctx
let keys = {w:false,a:false,s:false,d:false}
let player = {
  size: { x: 32, y: 64},
  position: { x: 64, y:64},
  speed: { x: 3, y: 2},
  spawn: { x: 64, y: 64},
  sprite: {width: 128, height: 192,url: './tilesets/loki.png'}
}
//============ initial settings ===========
window.onload = init
function init(){
  canvas = document.getElementById("canvas")
  ctx = canvas.getContext("2d")
  canvas.style.width = "100%"
  canvas.style.maxWidth = "100vh"
  canvas.width = 256
  canvas.height = 256
  canvas.tabIndex = "1"
  window.requestAnimationFrame(gameLoop)
  keyboard()
}
//============ game loop ===================
function gameLoop(timeStamp){

  if(keys.w){
    player.position.y-=player.speed.y
  }
  if(keys.s){
    player.position.y+=player.speed.y
  }
  if(keys.a){
    player.position.x-=player.speed.x
  }
  if(keys.d){
    player.position.x+=player.speed.x
  }
  
  draWbackground()
  drawPlayer()
  fpscounter(timeStamp, ctx)
  window.requestAnimationFrame(gameLoop)
}
//===== GET AN LARGE IMAGE AND DRAW FIRST ==========
function draWbackground(){
  
  let image 
  image = new Image()
  image.onload = () => {
    ctx.drawImage(image, 0, 0, 640, 640);
  }
  image.src = './tilesets/terrain1.png'
}
function drawPlayer(){
  let image
  let sx = 0
  let sy = 0
  let sw = 128/4
  let sh = 192/4
  let dx = player.position.x
  let dy = player.position.y
  let dw = 128/4
  let dh = 192/4
  image = new Image()
  image.onload = () => {
    
    ctx.drawImage(
      image,
      sx,sy,sw,sh,
      dx,dy,dw,dh
    )
  }
  image.src = player.sprite.url
}
// ========= MULTIPLE KEY DETECTION =============
function keyboard(){
  canvas.onkeydown = canvas.onkeyup = (e) => {
    keys[e.key] = e.type == 'keydown'
  }
}