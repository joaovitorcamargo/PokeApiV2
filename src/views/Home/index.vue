<script setup lang="ts">
import SearchPokemon from "@/views/Home/components/SearchPokemon.vue";
import PokemonCard from "@/views/Home/components/PokemonCard.vue";
import PokemonInfo from "@/views/Home/components/PokemonInfo.vue";
import PokemonModalInfo from "@/views/Home/components/PokemonModalInfo.vue";
import { pokemonStore } from "@/stores/pokemon";

const storePokemons = pokemonStore();
</script>

<template>
  <div class="home-pokedex">
    <div class="list-pokemon">
      <SearchPokemon />
      <PokemonCard />
    </div>
    <PokemonInfo class="isLargeScreen" />
    <PokemonModalInfo class="isSmallScreen" v-if="storePokemons.getOpenModal" />
  </div>
</template>

<style lang="css" scoped>
@import url("./components/assets/style/Home.css");
</style>
