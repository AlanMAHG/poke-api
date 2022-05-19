'use strict'

const apiKey = 'api_key=KGiETzk1yDZl1pw17OSIg2HvTW20rwCjtCPqR8OE'
const URL = 'https://api.nasa.gov/planetary/apod?'
const fullURL = 'https://pokeapi.co/api/v2/pokemon/'

const printView = (view) => {
    //Creando elementos html
    let cardBox = document.createElement("div")
    let cardImg = document.createElement("img")
    let cardInfo = document.createElement("div")
    let cardTitle = document.createElement("h5")
    let cardDate = document.createElement("h5")
    let cardCopy = document.createElement("h5")
    let cardButton = document.createElement("div")
    let cardMas = document.createElement("button")

    //Estilos CSS

    //Agregando info del API
    cardTitle.innerText = element.title

    //Agregando atributos a los elementos

    //Creando las tarjetas
    cards.appenChild(cardBox)
    cardBox.appendChild(cardImg)
    cardBox.appendChild(cardInfo)
    cardBox.appendChild(cardButton)
    cardInfo.appenChild(cardTitle)
    cardInfo.appenChild(cardDate)
    cardInfo.appenChild(cardCopy)
    cardButton.appendChild(cardMas)
    
}


// const showData = async () => { //indica que la funcion va ser asyncrona
//     try{
//         const resultado = await fetch(fullURL)
//         let json = await resultado.json()
//         console.log(json);
//         json.forEach(element => {
//             printView(element.view)
//         });
//     } catch (error) {
//         console.error(error);
//     }   
// }

const printPokemon = (pokemons) => {
    console.log(pokemons);
}

const getData = () => {
    fetch(fullURL)
    .then(response => response.json())
    .then(data => {
        printPokemon(data.results)
    })
}

getData()

