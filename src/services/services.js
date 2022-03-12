import axios from "axios"
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
const service = axios.create({BASE_URL})

const pokeinfoById = async(pokemonId = 1) => {
    const {data} = await service.get(`${BASE_URL}/${pokemonId}`)
    console.log(data.sprites.front_default);
    return data.sprites.front_default
}

export default pokeinfoById
