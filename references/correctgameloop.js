"use strict"
let canvas
let ctx
window.onload = init

function init(){
  canvas = document.getElementById("canvas")
  ctx = canvas.getContext("2d")
  window.requestAnimationFrame(gameLoop)
}

let rect1 = {x: 0, y: 0, w: 32, h: 32}

function gameLoop(){
  draw()
  window.requestAnimationFrame(gameLoop)
}

function draw(){
  ctx.fillRect(
    rect1.x,
    rect1.y,
    rect1.w,
    rect1.h
  )
}