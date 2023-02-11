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
      data: { chain },
    } = await this.getEvolutionChainPokemon(url);
    return chain;
  }

  public async getEvolutionChainPokemon(url: string) {
    return axios.get(url);
  }

  public async getPokemonByName(name: string) {
    const { data } = await axios.get(`${this.defaultUrl}/pokemon/${name}`);
    return data;
  }
}

export default HttpService;
