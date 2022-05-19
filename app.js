'use strict'

let result = document.getElementById('result');
const traerDatos = () =>{
    axios({
        method : 'GET',
        url : 'https://pokeapi.co/api/v2/pokemon/110'
    })
        .then((response) =>{
            //console.log(response);
            /* let imageUrl = response.data.sprites.other.dream_world.front_default;
            let image = document.createElement('img');
            image.src = imageUrl;
            result.appendChild(image); */
            const list = document.getElementById('list');
            const fragment = document.createDocumentFragment();
            for(const userInfo of response.data.results){
            const listItem = document.createElement('li')
            listItem.textContent= `${userInfo.name}`
            fragment.appendChild(listItem)
            }
            list.appendChild(fragment);
        })
        .catch((error) =>{
            console.log(error);
        })
}
traerDatos();