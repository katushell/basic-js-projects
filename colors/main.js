const btn = document.querySelector('.colorBtn')
const bodyBackground = document.querySelector('body')
const hexNumber = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const hex = document.querySelector('.hex')

btn.addEventListener('click', getHex)

function getHex() {
    let  hexCol = '#'
    for (i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * hexNumber.length)
        hexCol += hexNumber[random]
    }

    bodyBackground.style.backgroundColor = hexCol
    bodyBackground.style.transition = '0.2s ease'
    hex.innerHTML = hexCol
}