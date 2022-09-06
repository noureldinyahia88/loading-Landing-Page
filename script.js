let bg = document.querySelector('.bg')
let loadingText = document.querySelector('.loading-text')

let load = 0;

let x = setInterval(bluring, 30)
function bluring() {
    load++

    if(load > 99){
        clearInterval(x)
    }
    loadingText.innerText = `${load}%`
    loadingText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}