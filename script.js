window.document.addEventListener('click', (e) => {
  let hamburguer = document.querySelector('.hamburguer')
  let list = document.querySelector('.list')
  let child = e.target.parentNode.classList.contains("hamburguer")
  let classHamb = e.target.classList.contains("hamburguer")
  let toggleOpen = list.classList.toggle('open')
  classHamb || child? toggleOpen:list.classList.remove('open')
})
let file = document.getElementById('imgFile')

file.addEventListener('change', (file) => {
  let input = file.target;

  let reader = new FileReader();
  reader.onload = function(){
    let dataURL = reader.result;
    let output = document.getElementById('output');
    output.src = dataURL;
  };
  reader.readAsDataURL(input.files[0]);
})