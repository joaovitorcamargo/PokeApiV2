<script setup lang="ts">
import { pokemonStore } from "@/stores/pokemon";

const storePokemons = pokemonStore();

const getCurrentPokemon = storePokemons.getCurrentPokemon;
</script>

<template>
  <div class="pokemon-info">
    <div v-if="storePokemons.getCurrentPokemon?.sprites">
      <div class="pokemon-image">
        <img :src="storePokemons.getCurrentPokemon.sprites.front_default" />
      </div>
      <span></span>
    </div>
    <div v-else>Nenhum Pokemon Selecionado</div>
  </div>
</template>

<style scoped>
.pokemon-info {
  margin-top: 4rem;
  position: relative;
  border-radius: 15px;
  box-shadow: 0px 0px 20px -7px rgba(0, 0, 0, 0.75);
  height: 700px;
}
.pokemon-image {
  position: absolute;
  /* background-color: red; */
  display: flex;
  top: -140px;
  justify-content: center;
  width: 100%;
}
.pokemon-image > img {
  width: 300px;
}
</style>
