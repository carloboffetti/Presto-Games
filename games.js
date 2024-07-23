fetch("./games.json").then((response) => response.json()).then(data => {

    // Creazione dei radiobuttons per ogni categoria
    let radioWrapper = document.querySelector('#radioWrapper')

    // Creiamo una funzione per settare i radio buttons in base alle categorie
    function setRadios() {
        // Partendo dall'array data, voglio un array che abbia solo le categorie 
        let radioCategories = data.map((game) => game.category)

        let uniqueCategories = Array.from(new Set(radioCategories))
        console.log(uniqueCategories);

        // radioCategories.forEach( category => {
        //     if(!uniqueCategories.includes(category)){
        //         uniqueCategories.push(category)
        //     }
        // })

        // Creazione dei radiobutton per ogni categoria
        uniqueCategories.forEach(category => {
            let div = document.createElement('div');
            div.classList.add("form-check")
            div.innerHTML = `
                <input class="form-check-input" type="radio" name="categories"
                    id="${category}">
                <label class="form-check-label" for="${category}">
                    ${category}
                </label>
            
            `
            radioWrapper.appendChild(div)
        })

    }

    setRadios()


    let cardsWrapper = document.querySelector('#cardsWrapper')
    function showCards(array) {
        cardsWrapper.innerHTML = '';
        array.forEach((game, i) => {
            let div = document.createElement('div')
            div.classList.add("col-12", 'col-md-3', 'mb-2');
            div.innerHTML = `
            <div class="card">
                <img src="https://picsum.photos/${200 + i}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-truncate">${game.name}</h5>
                    <p class="card-text fw-light">${game.category}</p>
                    <p class="text-end fs-5">${game.price}</p>
                </div>
            </div>
            `
            cardsWrapper.appendChild(div)

        })
    }
    showCards(data)


    let radios = document.querySelectorAll(".form-check-input")
    // console.log(radios);

    function filterByCategory(array) {
        // Il metodo find ritorna il primo elemento di un array che soddisfa una condizione
        let checked = Array.from(radios).find((input) => input.checked)
        let categoria = checked.id
        console.log(categoria);


        if (categoria == 'All') {
            return array
        } else {
            let filtered = array.filter((game) => game.category == categoria)
            return filtered
        }

    }

    radios.forEach(radio => {
        radio.addEventListener("click", () => {
            globalFilter()
        })
    })



    //FILTRO PER PREZZO
    let inputRange = document.querySelector('#inputRange')
    let numberPrice = document.querySelector('#numberPrice')
    function setInputPrice() {
        let prices = data.map(game => game.price)
        let maxPrice = Math.ceil(Math.max(...prices))
        let minPrice = Math.floor(Math.min(...prices))

        inputRange.min = minPrice
        inputRange.max = maxPrice
        inputRange.value = maxPrice

        numberPrice.innerHTML = `${maxPrice} &euro; `

    }

    setInputPrice()

    function filterByPrice(array){
        let filtered = array.filter( (game) => game.price <= inputRange.value )
        return filtered
    }

    inputRange.addEventListener( "input", ()=>{
        globalFilter()
        numberPrice.innerHTML = inputRange.value
    } )
    


    // Filtro per parola
    let wordInput = document.querySelector('#wordInput');

    function filterByWord( array ){
        let filtered = array.filter(game => game.name.toLowerCase().replaceAll(" ", "").includes( wordInput.value.toLowerCase().replaceAll(" ", "")))
        return filtered
    }

    wordInput.addEventListener(  'input', ()=>{
        globalFilter()
    })



    function globalFilter(){
        let filteredByPrice = filterByPrice(data)
        let filteredByWord = filterByWord(filteredByPrice)
        let filteredByCategory = filterByCategory(filteredByWord)
        showCards(filteredByCategory)
    }

    globalFilter();




})

