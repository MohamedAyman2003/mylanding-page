let statsBox = document.getElementsByClassName( "stats" )[0]
let boxs = document.querySelectorAll( ".box .number" )
let start = false

window.onscroll = function () {
    if ( window.scrollY >= statsBox.offsetTop) {
        if ( !start ) {
         boxs.forEach((el)=> counter(el))
        }
        start = true
        
    }
}
boxs.forEach((el)=> counter(el))

function counter(box) {
     let goal = box.dataset.goal
    let start = setInterval(() => {
        box.textContent++
        if ( box.textContent == goal ) {
              clearInterval(start)
          }
    }, 10 );
  
}


// 

// the width completle

let mainBox = document.querySelector( ".our-skills" )
let span = document.querySelectorAll( ".the-progress span" )

window.onscroll = function () {
    if ( window.scrollY >= mainBox.offsetTop  ) {
        span.forEach((el) => {
            el.style.width = el.dataset.width
        });
    }
}



// set the time and date


let theDay = document.querySelector( ".days" )
let theHours = document.querySelector(".hours")
let theMinutes = document.querySelector(".minutes")
let theSeconds = document.querySelector(".seconds")

let myDate = new Date("dec 31 2023 23:59:59").getTime()
console.log(myDate)
let counters = setInterval(() => {
    let theDate = new Date().getTime()
    let diff = myDate - theDate
    theDay.innerHTML = Math.floor( diff / 1000 / 60 / 60 / 24 )
    theHours.innerHTML = Math.floor( diff % ( 1000 * 60 * 60 * 24 ) / ( 1000 * 60 * 60 ) )
    theMinutes.innerHTML = Math.floor( diff % ( 1000 * 60 * 60 ) / ( 1000 * 60 ) )
    theSeconds.innerHTML = Math.floor(diff % ( 1000 * 60) / ( 1000))
    console.log(theMinutes)
}, 1000);








