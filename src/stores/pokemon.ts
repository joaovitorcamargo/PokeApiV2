import getPokemonsByEvoluitonChain from "@/core/helpers/getPokemonsByEvoluitonChain";
import HttpService from "@/core/services/HttpService";
import { defineStore } from "pinia";
import { ResponseCode } from "@/core/types/enumResponseCode";

const service = new HttpService();

export const pokemonStore = defineStore({
  id: "pokemon",
  state: () => ({
    pokemons: [] as Array<any>,
    currentPokemon: {} as any,
  }),
  actions: {
    async actionsPokemonList(name: string) {
      try {
        const data = await service.getPokemonList(name.toLowerCase());
        const result = await getPokemonsByEvoluitonChain(data);
        this.pokemons = result;
      } catch (error: any) {
        if (error.response.status === ResponseCode.NotFound) {
          console.log("Nenhum Pokemon Encontrado");
        }
      }
    },
    async setCurrentPokemon(pokemon: {}) {
      this.currentPokemon = pokemon;
    },
  },
  getters: {
    getPokemons: (state) => state.pokemons,
    getCurrentPokemon: (state) => state.currentPokemon,
  },
});
