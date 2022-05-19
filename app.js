'use strict'


let input = document.getElementById('busquedaPokemon');
let result = document.getElementById('result');
let features = document.getElementById('features');
let div = document.createElement('div');
let divimg = document.createElement('div');
function buscarPokemon(){
    axios({
        method : 'GET',
        url : `https://pokeapi.co/api/v2/pokemon/${input.value}`
    })
        .then((response) =>{
            features.appendChild(div);
            result.appendChild(divimg);

            while (divimg.firstChild) {
                divimg.removeChild(divimg.firstChild);
                
            }
            while (div.firstChild) {
                
                div.removeChild(div.firstChild);
            }

            console.log(response);
            let namePoke = document.createElement('p');
            namePoke.textContent = `${response.data.name}`;
            divimg.appendChild(namePoke);

            let imageUrl = response.data.sprites.other.dream_world.front_default;
            let image = document.createElement('img');
            image.setAttribute('id','imgPokemon');
            image.src = imageUrl;
            divimg.appendChild(image);
            
            let idPokemon = document.createElement('p');
            idPokemon.textContent = `${response.data.id}`;
            div.appendChild(idPokemon);

            let type = document.createElement('p');
            type.textContent = `${response.data.types[0].type.name}`;
            div.appendChild(type);

            const uList = document.createElement('ul');
            uList.setAttribute('id','list');
            div.appendChild(uList);
            const list = document.getElementById('list');
            const fragment = document.createDocumentFragment();
            for(const pokeabilities of response.data.abilities){
            const listItem = document.createElement('li')
            listItem.textContent= `${pokeabilities.ability.name}`
            fragment.appendChild(listItem)
            }
            list.appendChild(fragment);
        })
        .catch((error) =>{
            console.log(error);
        })
}