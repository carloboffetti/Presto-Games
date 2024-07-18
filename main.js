





//EVENTI: azioni che il nostro sito svolge quando avviene l'interazione dell'utente o del browser
let navbarCustom = document.querySelector(".navbarCustom")
let logo = document.querySelector("#logo")
window.addEventListener("scroll", () => {
    let scrollValue = window.scrollY;

    if (window.innerWidth > 600) {
        if (scrollValue > 20) {
            navbarCustom.style.width = "100%"
            logo.style.width = "10%"
            navbarCustom.style.top = "0"
        } else {
            navbarCustom.style.width = "60%"
            logo.style.width = "15%"
            navbarCustom.style.top = "40px"
        }
    }
})


//! CHIAMATE ASINCRONE: funzioni che vengono eseguite solo una volta che il codice sincrono è stato completato. IN JS sono delle chiamate che vengono eseguito dopo TUTTO il resto del codice sincrono, a prescindere da dove le inseriamo.

// setInterval() : chiama una funzione a intervalli definiti e continua a chiamarla finchè non interrompiamo il loop.


//vuole 2 parametri, callback, la durata dell'intervallo espressa in millisecondi

//clearInterval() : interrompe il loop

let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');


function createInterval(total, finalNumber, time) {
    let counter = 0
    let interval = setInterval(() => {
        if (counter < total) {
            counter++
            finalNumber.innerHTML = counter
        } else {
            clearInterval(interval)
        }
    }, time)
}

//!INTERSECTION OBSERVER : è un osservatore che controlla se uno o più elementi scegli da noi, vengano intersecati sul browser.
//La keyword new crea un'oggetto partendo da una classe di riferimento. Crea un'istanza di quella classe. 
// VUOLE UN PARAMETRO, una callback, inseriremo tutti gli elementi che renderemo noti per essere intersecati.  Quando passiamo gli elementi, lui li mette in un array, quindi possiamo utilizzare i metodi degli array.
// PER OGNI ELEMENTO che ti rendo noto, dovrai fare qualcosa.


let check = true;
let observer = new IntersectionObserver((entries) => {

    entries.forEach((el) => {
        if (el.isIntersecting && check) {
            createInterval(100, firstNumber, 50)
            createInterval(80, secondNumber, 80)
            createInterval(150, thirdNumber, 30)
            check = false;
        }
    })
});
// CHI DEVE OSSERVARE
observer.observe(firstNumber)
// console.dir(observer);
// setTimeOut(): fa partire un blocco di istruzioni appena è passato un tempo deciso da noi

// setTimeout( ()=>{
//     check = true;
// }, 5000 )

const games = [
    { name: 'Red Dead Redemption 2', category: 'Adventure', price: 29.99 },
    { name: 'Diablo IV', category: 'Action RPG', price: 80 },
    { name: 'Crash Bandicoot', category: 'Adventure', price: 20, img: 'media/crash.jpg' },
    { name: 'Call of Duty MW3', category: 'FPS', price: 30,  img: 'media/mw3.jpg'  },
    { name: 'Battlefield 4', category: 'FPS', price: 39.99,  img: 'media/battlefield.jpg'  },
    { name: 'The First Descendant', category: 'Shooter Looter', price: 0,  img: 'media/theFirstDescendant.avif'  },
]

let gamesWrapper = document.querySelector('#gamesWrapper')

games.forEach((game, i) => {
    if( i >= (games.length - 4)){

        let div = document.createElement('div')
        div.classList.add('col-6', 'col-lg-3', 'mb-3', 'mb-md-0')
        div.innerHTML = `
        <div class="card">
            <img src="${game.img}" class="card-img-top imgCard" alt="...">
                <div class="card-body">
                    <h4>${game.name}</h4>
                    <p class="card-text">${game.category}</p>
                    <p>${game.price == 0 ? 'Free to play' : game.price + '$'}</p>
                    <div class="d-flex align-items-center justify-content-end">
                        <a href="" class="btn btn-orange">Acquista</a>
                    </div>
                </div>
            </div>
        `
        gamesWrapper.appendChild(div)
    }


})