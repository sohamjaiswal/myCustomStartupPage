//Clock stuff here

function realtimeClock(){

  var rtClock = new Date()

  var hours = rtClock.getHours()
  var minutes = rtClock.getMinutes()
  var seconds = rtClock.getSeconds()


  //Add AM and PM system
  var amPm = (hours < 12) ? "AM" : "PM"

  //Convert hours component to 12 hour format
  hours = (hours > 12) ? hours -12 : hours

  //Pad the hours, minutes and seconds with leading zeroes
  hours = ("0" + hours).slice(-2)
  minutes = ("0" + minutes).slice(-2)
  seconds = ("0" + seconds).slice(-2)

  //Display the clock
  document.querySelector('.clock').innerHTML =
    hours + " : " + minutes + " : " + seconds + " " + amPm
  var t =
   setTimeout(realtimeClock, 500)

}

//Search stuff here

const searchInput = document.querySelector(".search-input input")
const searchButton = document.querySelector(".search-icon")

searchInput.onkeydown = function(e){
    if (e.keyCode == 13){
        let search = searchInput.value
        window.open('https://www.duckduckgo.com'.concat("/?q=", search.replace(/\s/g, "+"),"&t=h_&ia=web"), '_blank').focus();
    }
}

searchButton.addEventListener("click", () => {
  let search = searchInput.value
  if (search) {
    window.open('https://www.duckduckgo.com'.concat("/?q=", search.replace(/\s/g, "+"),"&t=h_&ia=web"), '_blank').focus();
  }
})

// searchIcon.addEventListener("click", () => {
//     searchIcon.parentElement.classList.add("change")
//     searchInputWrapper.classList.add("change")

//     setTimeout (() => {
//         searchInput.focus()
//     }, 100)
// })

// closeIcon.addEventListener('click', () =>{
//     searchIcon.parentElement.classList.remove("change")
//     searchInputWrapper.classList.remove("change")
// })
