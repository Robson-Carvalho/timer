var seconds = 0
var minutes = 0
var hours = 0
var interval = 0
var click = 0

const checkForTwoDigits = (digit) => {
    if(digit<10){
        return(`0${digit}`)
    }
    return(digit)
}

const start = () => {
    click++
    if(click === 1){
        time()
        interval = setInterval(time, 1000)
    }
}

const pause = () => {
    click = 0
    clearInterval(interval)
}

const stop = () => {
    clearInterval(interval)
    seconds = 0 
    minutes = 0
    hours = 0
    document.getElementById('time').innerText="00:00:00"
}

const time = () => {
    seconds++
    if(seconds==60){
        minutes++
        seconds=0
        if(minutes==60){
            minutes=0
            hours++
        }
    }
    document.getElementById('time').innerText=`${checkForTwoDigits(hours)}:${checkForTwoDigits(minutes)}:${checkForTwoDigits(seconds)}`
}