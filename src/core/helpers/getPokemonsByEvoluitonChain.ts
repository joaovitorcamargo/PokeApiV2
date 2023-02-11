import HttpService from "../services/HttpService";

const service = new HttpService();

export default async (evolution_chain: any) => {
  const newPokemonList = [];
  newPokemonList.push({ ...evolution_chain.species });

  const evolveToArray = evolution_chain.evolves_to
    .map((evolveTo: any) => {
      newPokemonList.push({ ...evolveTo.species });
      if (evolveTo.evolves_to.length) {
        return {
          ...evolveTo.evolves_to,
          totalEvolution: evolveTo.evolves_to.length,
        };
      }
    })
    .filter((isUndefined: undefined) => isUndefined !== undefined);

  if (evolveToArray.length) {
    evolveToArray.map((evolveTo: any) => {
      for (let index = 0; index < evolveTo.totalEvolution; index++) {
        newPokemonList.push({ ...evolveTo[index].species });
      }
    });
  }

  const pokemons = await Promise.all(
    newPokemonList.map(({ name }) => service.getPokemonByName(name))
  );

  return pokemons;
};
