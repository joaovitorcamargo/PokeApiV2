<template>
  <div class="pokemons" v-if="storePokemons.getPokemons.length">
    <div
      class="card"
      v-for="(pokemon, index) in storePokemons.getPokemons"
      :key="pokemon.id"
      :class="`${pokemon.types[0].type.name}`"
      @click.prevent="setCurrentPokemon(index)"
    >
      <img :src="pokemon.sprites.front_default" alt="" />
      <span class="pokemon-id"> # {{ pokemon.id }}</span>
      <span class="pokemon-name">{{ pokemon.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { pokemonStore } from "@/stores/pokemon";

const storePokemons = pokemonStore();

function setCurrentPokemon(index: number) {
  storePokemons.setCurrentPokemon(storePokemons.getPokemons[index]);
}
</script>

<style scoped>
@import url("./assets/style/PokemonCard.css");
</style>
