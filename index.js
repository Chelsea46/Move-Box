const movingBox = document.getElementById('moving-box')
const btn = document.getElementById('button')

btn.addEventListener('click', function(){
    let x = movingBox.getAttribute('class')
    if(x === 'moving-box'){
    movingBox.classList.add('right')
    } else {
        movingBox.classList.toggle('left')
    }
})

