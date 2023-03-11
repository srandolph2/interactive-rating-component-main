console.log("hello")

const mainContainer = document.querySelector(".main-container") 
const thanksContainer = document.querySelector(".thanks-container")

const submit = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")

const rates = document.querySelectorAll(".rate") //WHEN USING querySelector DONT FORGET "." and "#" !!!
const rating = document.getElementById("rating")

//To make thank you page appear
submit.addEventListener("click", () => {
    thanksContainer.classList.remove('hidden')
    mainContainer.classList.add('hidden')
    //or mainContainer.style.display = "none"
})

rateAgain.addEventListener("click", () =>{
    thanksContainer.classList.add('hidden')
    mainContainer.classList.remove('hidden')
})

//PUTS THE NUMBER IN THE RATING SENTENCE
rates.forEach((rate) =>{
    rate.addEventListener("click", () =>(
       // console.log(rate.innerHTML)
        rating.innerHTML = rate.innerHTML
    ))
})