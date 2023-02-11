<script setup lang="ts">
import SearchPokemon from "./components/SearchPokemon.vue";
import PokemonCard from "./components/PokemonCard.vue";
import PokemonInfo from "./components/PokemonInfo.vue";
</script>

<template>
  <div class="home-pokedex">
    <div class="list-pokemon">
      <SearchPokemon />
      <PokemonCard />
    </div>
    <PokemonInfo />
  </div>
</template>

<style lang="css" scoped>
.home-pokedex {
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
</style>
