function get_pokemon_list(limit, page_number) {
    $.ajax(
        {
            'url': 'https://pokeapi.co/api/v2/pokemon',
            'method': 'GET',
            'data': {limit: limit, offset: page_number * limit},
            'success': function (response) {
                response.results.forEach(pokemon => {
                    new PokemonName(pokemon.name).show()
                    get_pokemon_information(pokemon.name)
                })
                console.log(response.results)
            },
            'error': function (err) {
                console.log(err)
            }
        }
    );
}

function get_pokemon_information(pokemon) {
    $.ajax(
        {
            'url': 'https://pokeapi.co/api/v2/pokemon/' + pokemon,
            'method': 'GET',
            'success': function (response) {
                console.log(response.abilities)
            },
            'error': function (err) {
                console.log(err)
            }
        }
    );
}

class PokemonName {
    constructor(name) {
        this.name = name
    }

    show() {
        let tag = document.createElement('p')
        let text = document.createTextNode(this.name);
        tag.appendChild(text)
        let container = document.getElementById('container').appendChild(tag)
    }
}