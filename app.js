const startTimer = document.querySelector('#startTimer')
const pauseTimer = document.querySelector('#pauseTimer')
let displayTimer = document.querySelector('#displayTimer')
let [second, minute, hour] = [0, 0, 0]
let start = null

startTimer.addEventListener('click', () => {
    if(startTimer.innerText === 'Start'){
        startTimer.innerText = 'Stop'
        startTimer.classList.add('btn-danger')
    } else {
        startTimer.innerText = 'Start'
        startTimer.classList.remove('btn-danger')
        // clearInterval(start)
    }
    if(start!==null){
        clearInterval(start)
      }
    start = setInterval(timer, 1000)
})

pauseTimer.addEventListener('click', () => {
    clearInterval(start)
})

function timer() {
    second +=1
    if(second === 60){
        second = 0
        minute += 1
    } if(minute === 60){
        minute = 0
        hour += 1
    }

    displayTimer.innerText = `${hour}h:${minute}m:${second}s`
}

console.log(second, minute, hour)