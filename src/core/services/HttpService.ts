import axios from "axios";

class HttpService {
  private defaultUrl = "";

  public constructor(defaultUrl = "https://pokeapi.co/api/v2") {
    this.defaultUrl = defaultUrl;
  }

  public async getPokemonList(name: string) {
    const {
      data: {
        evolution_chain: { url },
      },
    } = await axios.get(`${this.defaultUrl}/pokemon-species/${name}`);
    const {
      data: {
        chain: { evolves_to },
      },
    } = await this.getEvolutionChainPokemon(url);
    return evolves_to;
  }

  public async getEvolutionChainPokemon(url: string) {
    return axios.get(url);
  }
}

export default HttpService;
