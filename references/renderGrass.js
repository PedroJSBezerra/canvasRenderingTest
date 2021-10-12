let canvas = document.getElementById('canvas')
let canvasWidth = 480
let canvasHeight = 480
let blockSize = 32

canvas.width = canvasWidth
canvas.height = canvasHeight
let ctx = canvas.getContext("2d")


//render compound grass
const renderGrass = () => {
  //image
  let grass = (dx, dy) => {
    let image = new Image()
    image.src = './JapaneseVillage.png' // 256 x 1312
    let area = 256/8  // square area
    let sx = 0
    let sy = blockSize
    image.onload = () => {
      ctx.drawImage(
        image,                  //image
        0, 32*2, area, area,    //source (x,y,w,h)
        dx, dy, area, area      //destination (x,y,w,h)
      )
    } 
  }
  let grassPositions = []

  let width = 15
  let height = 15
  let startTop = 0
  let startLeft = 0
  for(h = startTop; h < height; h++){
    for(w = startLeft ; w < width; w++){
      grassPositions.push([h*blockSize, w*blockSize])    
    }
  }
  grassPositions.forEach(pos => {
    let dy = pos[0]
    let dx = pos[1]
    //callback para cada posição
    grass(dx,dy)
  })
}
renderGrass()