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
.isLargeScreen {
  display: flex;
}
.isSmallScreen {
  display: none;
}
.home-pokedex {
  position: relative;
  padding-top: 4rem;
  display: grid;
  column-gap: 40px;
  grid-template-columns: 2fr 1fr;
  height: 100vh;
}
.list-pokemon {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
@media only screen and (max-width: 600px) {
  .list-pokemon {
    align-items: unset;
  }
}
@media only screen and (max-width: 1240px) {
  .isLargeScreen {
    display: none;
  }
  .isSmallScreen {
    display: flex;
  }
  .home-pokedex {
    grid-template-columns: 1fr;
  }
}
</style>
