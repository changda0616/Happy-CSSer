const zoomBtn = document.querySelector('button')
const triangles = document.querySelectorAll('.triangle')
const info = document.querySelector('.info')
const states = ['wide', 'medium', 'narrow']
let pointer = 1
zoomBtn.addEventListener('click', () => {
  triangles.forEach((triangle) => {
    triangle.className = 'triangle ' + states[pointer];
  })
  info.className =  'info '+ states[pointer]
  zoomBtn.className = states[pointer]
  if (pointer === 2) pointer = 0
  else pointer++
})