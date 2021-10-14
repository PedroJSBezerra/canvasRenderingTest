"use strict"
import { fpscounter, keyboard } from './utility.js'
let canvas
let ctx
window.onload = init

function init() {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext("2d")
  canvas.width = 512
  canvas.height = 512
  canvas.tabIndex = "0"
  canvas.style.border = '1px solid #000'
  canvas.style.width = '100%'
  canvas.style.maxWidth = '90vh'
  canvas.style.background = '#99b'
  window.requestAnimationFrame(gameLoop)
  let keys = keyboard(canvas)
  console.log(keys)
}

function gameLoop(timeStamp) {
  draw()
  fpscounter(timeStamp, ctx)
  window.requestAnimationFrame(gameLoop)
}
let x = 0
function draw() {
  x+=1
  if(x>200){
    x=0
  }
  ctx.fillRect(0,0,512,512)
  ctx.clearRect(64+x,64,32,32)
}