"use strict"
import {fpscounter} from './utility.js'

//============= global data ===============
let canvas
let ctx
let map
let keys = {w:false,a:false,s:false,d:false}
let player = {
  size: { x: 32, y: 64},
  position: { x: 0, y:0},
  speed: { x: 3, y: 2},
  spawn: { x: 64, y: 64},
}
let y = 0
//============ initial settings ===========
window.onload = init
function init(){
  canvas = document.getElementById("canvas")
  ctx = canvas.getContext("2d")
  canvas.width = 256
  canvas.height = 256
  canvas.tabIndex = "1"
  window.requestAnimationFrame(gameLoop)
  keyboard()
}
//============ game loop ===================
function gameLoop(timeStamp){

  fpscounter(timeStamp, ctx)
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
  ctx.clearRect(
    player.position.x+player.spawn.x,
    player.position.y+player.spawn.y,
    player.size.x,
    player.size.y
  )
  window.requestAnimationFrame(gameLoop)
}
//===== GET AN LARGE IMAGE AND DRAW FIRST ==========
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
// ========= MULTIPLE KEY DETECTION =============
function keyboard(){
  canvas.onkeydown = canvas.onkeyup = (e) => {
    keys[e.key] = e.type == 'keydown'
  }
}