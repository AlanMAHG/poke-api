'use strict'

let list = document.querySelector("#cards")
let search = document.querySelector("#search")

    

const printView = (pokemon) => { 
    //Creando elementos html++++++++++++++++++
    let cardBox = document.createElement("div")
    let cardPicture = document.createElement("div")

    let barHp = document.createElement("div")
    let barHp2 = document.createElement("div")

    let barAt = document.createElement("div")
    let barAt2 = document.createElement("div")

    let barDe = document.createElement("div")
    let barDe2 = document.createElement("div")

    let barEx = document.createElement("div")
    let barEx2 = document.createElement("div")

    let cardImg = document.createElement("img")
    let cardInfo = document.createElement("div")
    let cardTitle = document.createElement("h5")
    let cardId = document.createElement("h5")
    let cardHp = document.createElement("h5")
    let cardAttack = document.createElement("h5")
    let cardDefense = document.createElement("h5")
    let cardExperience = document.createElement("h5")
    let cardTipo1 = document.createElement("h5")
    // let cardButton = document.createElement("div")
    // let cardMas = document.createElement("button")

    //Estilos CSS++++++++++++++++++ 
    cardPicture.classList.add("card-image")
    cardInfo.classList.add("card-info")
    // cardMas.classList.add("button-mas")
    cardTitle.classList.add("title")
    barHp.classList.add("container")
    barAt.classList.add("container")
    barDe.classList.add("container")
    barEx.classList.add("container")
    barHp2.classList.add("stats","hp")
    barAt2.classList.add("stats","at")
    barDe2.classList.add("stats","de")
    barEx2.classList.add("stats","ex")


    if (pokemon.tipo1 == "grass"){
        cardBox.classList.add("card-body-g", "col-sm-4")
    } else if (pokemon.tipo1 == "fire"){
        cardBox.classList.add("card-body-f", "col-sm-4")
    } else if (pokemon.tipo1 == "poison"){
        cardBox.classList.add("card-body-p", "col-sm-4")
    } else if (pokemon.tipo1 == "water"){
        cardBox.classList.add("card-body-w", "col-sm-4")
    } else if (pokemon.tipo1 == "bug"){
        cardBox.classList.add("card-body-b", "col-sm-4")
    } else if (pokemon.tipo1 == "electric"){
        cardBox.classList.add("card-body-e", "col-sm-4")
    } else if (pokemon.tipo1 == "ground"){
        cardBox.classList.add("card-body-gr", "col-sm-4")
    } else if (pokemon.tipo1 == "fairy"){
        cardBox.classList.add("card-body-fa", "col-sm-4")
    } else if (pokemon.tipo1 == "fighting"){
        cardBox.classList.add("card-body-fig", "col-sm-4")
    } else if (pokemon.tipo1 == "psychic"){
        cardBox.classList.add("card-body-psy", "col-sm-4")
    } else if (pokemon.tipo1 == "rock"){
        cardBox.classList.add("card-body-ro", "col-sm-4")
    } else if (pokemon.tipo1 == "ghost"){
        cardBox.classList.add("card-body-gh", "col-sm-4")
    } else if (pokemon.tipo1 == "ice"){
        cardBox.classList.add("card-body-ice", "col-sm-4")
    } else if (pokemon.tipo1 == "dragon"){
        cardBox.classList.add("card-body-dr", "col-sm-4")
    } else {
        cardBox.classList.add("card-body-n", "col-sm-4")
    }

    //Agregando info del API++++++++++++++++++
    cardTitle.innerText = pokemon.nombre.toUpperCase()
    cardId.innerText =`#0${pokemon.numero}`
    cardHp.innerText = `Hp: ${pokemon.hp}`
    cardAttack.innerText = `Ataque: ${pokemon.ataque}`
    cardDefense.innerText = `Defensa: ${pokemon.defensa}`
    cardExperience.innerText = `Experiencia: ${pokemon.experiencia}`
    
    cardTipo1.innerText = `Tipo: ${pokemon.tipo1}`
    // cardMas.innerText="Más detalles"

    //Agregando atributos a los elementos++++++++++++++++++
    cardImg.setAttribute("src", pokemon.img)
    // cardMas.setAttribute("id","detail")
    // cardMas.setAttribute("type","button")
    // cardImg.setAttribute("id","picture")


    //Creando las tarjetas++++++++++++++++++
    cards.appendChild(cardBox)
    cardBox.appendChild(cardPicture)
    cardBox.appendChild(cardInfo)
    cardPicture.appendChild(cardImg)
    cardInfo.appendChild(cardTitle)
    cardInfo.appendChild(cardId)
    cardInfo.appendChild(cardHp)
    cardInfo.appendChild(barHp)
    barHp.appendChild(barHp2)
    cardInfo.appendChild(cardAttack)
    cardInfo.appendChild(barAt)
    barAt.appendChild(barAt2)
    cardInfo.appendChild(cardDefense)
    cardInfo.appendChild(barDe)
    barDe.appendChild(barDe2)
    cardInfo.appendChild(cardExperience)
    cardInfo.appendChild(barEx)
    barEx.appendChild(barEx2)
    cardInfo.appendChild(cardTipo1)

    // cardInfo.appendChild(cardButton)
    // cardButton.appendChild(cardMas)   
}

// const buscador = (pokemon) => {
//     search.addEventListener("keypress", (event) => {
//         list.innerHTML = " "
//         console.log(pokemon);
//         let objeto = Object.values(pokemon)
//         console.log(objeto);
//         let searching = objeto.filter(word => word.includes(event.target.value))
//         console.log(searching);
//         printView(searching)
//     })
// }

// const verDetalles = document.getElementById("detail")
//     console.log(verDetalles);
//     if(verDetalles){
//         verDetalles.addEventListener("click", (event) => {
//             cardHp.innerText = `Hp: ${pokemon.hp}`
//             cardAttack.innerText = `Ataque: ${pokemon.ataque}`
//             cardDefense.innerText = `Defensa: ${pokemon.defensa}`
//             cardExperience.innerText = `Experiencia: ${pokemon.experiencia}`
//         console.log("siu");
//      })} else {
//          console.log("ouh");
//      }


const getData = (id) => {
    for (id=1; id<=150; id++ ){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => {
            const pokemon = {
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                numero: data.id,
                nombre: data.name,
                experiencia: data.base_experience,
                hp: data.stats[0].base_stat,
                ataque: data.stats[1].base_stat,
                defensa: data.stats[2].base_stat,
                especial: data.stats[3].base_stat,
                tipo1: data.types[0].type.name,         
            }
            // console.log(pokemon);
            printView(pokemon)
            // buscador(pokemon)
        })
    }  
}

getData()

