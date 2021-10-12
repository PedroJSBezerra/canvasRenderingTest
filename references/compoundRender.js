let canvas = document.getElementById('canvas')
let canvasWidth = 480
let canvasHeight = 480
let blockSize = 32

canvas.width = canvasWidth
canvas.height = canvasHeight
let ctx = canvas.getContext("2d")

//======= LOAD SPRITE ON PAGE ==============
let image = new Image()
image.src = './JapaneseVillage.png'
// image mapping
image.onload = () => {
  let width = image.width
  let height = image.height
  //valida a imagem
  if( width%blockSize || height%blockSize > 0){
    console.log("Invalid image size! for blocks of 32 x 32 pixels")
    return
  }else{
    console.log("Image is valid.")
  }
  //divisão por blocos
  let columns = width / blockSize
  let rows = height / blockSize
  let allBlocks = []
  for(r = 0; r < rows; r++){
    for(c = 0; c < columns; c++){
      allBlocks.push({
        coordX: c * blockSize,
        coordY: r * blockSize
      })
    }
  }

  //============ GET ELEMENTS FROM SPRITE ==========
  let grass = {
    sx: allBlocks[16].coordX,
    sy: allBlocks[16].coordY,
    sw: blockSize * 1,
    sh: blockSize * 1,
    draw(x,y){
      let sx = grass.sx
      let sy = grass.sy
      let sw = grass.sw
      let sh = grass.sh
      let dw = grass.sw
      let dh = grass.sh
      let grassPositions = []
      let gwidth = x
      let gheight = y
      let startTop = 0
      let startLeft = 0
      for(h = startTop; h < gheight; h++){
        for(w = startLeft ; w < gwidth; w++){
          grassPositions.push([h*blockSize, w*blockSize])    
        }
      }
      grassPositions.forEach(pos => {
        let dy = pos[0]
        let dx = pos[1]
        //callback para cada posição
        ctx.drawImage(
          image,          //image
          sx,sy,sw,sh, //source (x,y,w,h)
          dx, dy, dw, dh  //destination (x,y,w,h)
        )
      })
    }
  }
  let bamboo = {
    
    sx: allBlocks[80].coordX,
    sy: allBlocks[80].coordY,
    sw: blockSize * 2,
    sh: blockSize * 3,
    
    draw(x,y){
      
      let sx = bamboo.sx
      let sy = bamboo.sy
      let sw = bamboo.sw
      let sh = bamboo.sh
      let dx = x
      let dy = y
      let dw = bamboo.sw
      let dh = bamboo.sh
      
      ctx.drawImage(
        image,          //image
        sx,sy,sw,sh, //source (x,y,w,h)
        dx, dy, dw, dh  //destination (x,y,w,h)
      )
    }
  }
  let barrel = {
    
    sx: allBlocks[57].coordX,
    sy: allBlocks[57].coordY,
    sw: blockSize * 1,
    sh: blockSize * 1,
    
    draw(x,y){
      
      let sx = barrel.sx
      let sy = barrel.sy
      let sw = barrel.sw
      let sh = barrel.sh
      let dx = x
      let dy = y
      let dw = barrel.sw
      let dh = barrel.sh
      
      ctx.drawImage(
        image,          //image
        sx,sy,sw,sh, //source (x,y,w,h)
        dx, dy, dw, dh  //destination (x,y,w,h)
      )
    }
  }
  let stone = {
    
    sx: allBlocks[8].coordX,
    sy: allBlocks[8].coordY,
    sw: blockSize * 1,
    sh: blockSize * 1,
    
    draw(x,y){
      
      let sx = stone.sx
      let sy = stone.sy
      let sw = stone.sw
      let sh = stone.sh
      let dx = x
      let dy = y
      let dw = stone.sw
      let dh = stone.sh
      
      ctx.drawImage(
        image,          //image
        sx,sy,sw,sh, //source (x,y,w,h)
        dx, dy, dw, dh  //destination (x,y,w,h)
      )
    }
  }
  let arbust = {
    
    sx: allBlocks[59].coordX,
    sy: allBlocks[59].coordY,
    sw: blockSize * 1,
    sh: blockSize * 1,
    
    draw(x,y){
      
      let sx = arbust.sx
      let sy = arbust.sy
      let sw = arbust.sw
      let sh = arbust.sh
      let dx = x
      let dy = y
      let dw = arbust.sw
      let dh = arbust.sh
      
      ctx.drawImage(
        image,          //image
        sx,sy,sw,sh, //source (x,y,w,h)
        dx, dy, dw, dh  //destination (x,y,w,h)
      )
    }
  }

  //======= RENDERING GRASS ============
  grass.draw(15,15)

  //=========== RENDER SINGLE ELEMENTS ================
  bamboo.draw(0,0)
  barrel.draw(64,64)
  stone.draw(96,64)
  arbust.draw(128,64)

}
