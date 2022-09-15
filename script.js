const pokemons = [
    {
        name: 'abra',
        img: 'images/abra.png'
    },
    {
        name: 'abra',
        img: 'images/abra.png'
    },
    {
        name: 'bellsprout',
        img: 'images/bellsprout.png'
    },
    {
        name: 'bellsprout',
        img: 'images/bellsprout.png'
    },
    {
        name: 'bulbasaur',
        img: 'images/bulbasaur.png'
    },
    {
        name: 'bulbasaur',
        img: 'images/bulbasaur.png'
    },
    {
        name: 'caterpie',
        img: 'images/caterpie.png'
    },
    {
        name: 'caterpie',
        img: 'images/caterpie.png'
    },
    {
        name: 'charmander',
        img: 'images/charmander.png'
    },
    {
        name: 'charmander',
        img: 'images/charmander.png'
    },
    {
        name: 'ditto',
        img: 'images/ditto.png'
    },
    {
        name: 'ditto',
        img: 'images/ditto.png'
    },
]



const grid = document.querySelector('.grid')
const overlay = document.querySelector('#overlay')
const modal = document.querySelector('#modal')
const result = document.querySelector('#result')
const reset = document.querySelector('#reset')

reset.addEventListener('click', () => resetBoard())

let chosenPokemon = []
let chosenPokemonID = []
let capturedPokemon = []

const resetBoard = () => {
    console.log('button clicked')
    chosenPokemon = []
    chosenPokemonID = []
    capturedPokemon = []
    grid.innerHTML= ''
    modal.classList.remove('active')
    overlay.classList.remove('active')
    createBoard()
}

const emptyChosenPokemon = () => {
    chosenPokemon = []
    chosenPokemonID = []
}

const checkForMatch = () => {
    const pokemonCards = document.querySelectorAll('img')
    const firstPokemonID = chosenPokemonID[0]
    const secondPokemonID = chosenPokemonID[1]
    if (chosenPokemon[0] === chosenPokemon[1]) {
        capturedPokemon.push(chosenPokemon)
    } else {
        pokemonCards[firstPokemonID].setAttribute('src', 'images/pokeball.png')
        pokemonCards[secondPokemonID].setAttribute('src', 'images/pokeball.png')
    }
    emptyChosenPokemon()
    if(capturedPokemon.length >= 6) {
        modal.classList.add('active')
        overlay.classList.add('active')
    }
}

const flipCard = (event) => {
    const pokemonID = event.target.getAttribute('data-id')
    chosenPokemonID.push(pokemonID)
    chosenPokemon.push(pokemons[pokemonID].name)
    event.target.setAttribute('src', pokemons[pokemonID].img)
    if (chosenPokemon.length === 2) {
        setTimeout(checkForMatch, 200)
    }
}

const createBoard = () => {
    pokemons.sort(() => 0.5 - Math.random())
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = document.createElement('img')
        pokemon.setAttribute('src', 'images/pokeball.png')
        pokemon.setAttribute('data-id', i)
        pokemon.addEventListener('click', flipCard)
        grid.appendChild(pokemon)
    }
}

createBoard()