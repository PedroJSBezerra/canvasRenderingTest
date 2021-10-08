let canvas = document.getElementById('canvas')
canvas.width = 512
canvas.height = 512
let ctx = canvas.getContext("2d")

//draw square
let rect = () => {
  ctx.fillStyle = "green"
  ctx.fillRect(10, 10, 50, 50)
}
rect()
//draw rectangle
let line = () => {
  ctx.strokeStyle='blue';
  ctx.moveTo(70, 10)
  ctx.lineTo(70, 60)
  ctx.stroke()
}
line()
//draw circle
let circle = () => {
  ctx.strokeStyle = "red"
  ctx.beginPath()
  ctx.arc(110, 35, 25, 0, 2*Math.PI)
  ctx.fillStyle = "yellow"
  ctx.fill()
  ctx.stroke()
}
circle()
//bezier curve
let curved = () => {
  let c = ctx
  c.fillStyle = 'red';
  c.beginPath();
  c.moveTo(10,30);
  c.bezierCurveTo(50,90,159,-30,200,30);
  c.lineTo(200,90);
  c.lineTo(10,90);
  c.closePath();
  c.fill();
  c.lineWidth = 4;
  c.strokeStyle = 'black';
  c.stroke(); 
}