
const swiper = new Swiper(".contactSwiper", {
    effect: "cards",
    grabCursor: true,
});

let expertName = document.querySelector("#expertName")
let expertDescription = document.querySelector("#expertDescription")

let contenitoreDescrizione = document.querySelector("#contenitoreDescrizione")


swiper.on("slideChange", () => {
    if (swiper.activeIndex == 0) {
        expertName.innerText = `Alessandra Rossi`
        expertDescription.innerText = `Da oltre 10 anni con noi, esperta in hardware`
    } else if (swiper.activeIndex == 1) {
        expertName.innerText = `Franco Pio`
        expertDescription.innerText = `Un mito nella vendita di giochi!`
    } else if (swiper.activeIndex == 2) {
        expertName.innerText = `Valerio Vacca`
        expertDescription.innerText = `Esperto in Marketing and Sales`
    }
})

