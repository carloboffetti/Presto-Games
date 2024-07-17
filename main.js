//EVENTI: azioni che il nostro sito svolge quando avviene l'interazione dell'utente o del browser
let navbarCustom = document.querySelector(".navbarCustom")
let logo = document.querySelector("#logo")
console.dir(window)
window.addEventListener("scroll", () => {
    let scrollValue = window.scrollY;

    if(window.innerWidth > 600){
        if (scrollValue > 20) {
            navbarCustom.style.width = "100%"
            logo.style.width = "10%"
            navbarCustom.style.top = "0"
        } else{
            navbarCustom.style.width = "60%"
            logo.style.width = "15%"
            navbarCustom.style.top = "40px"
        }
    }
})