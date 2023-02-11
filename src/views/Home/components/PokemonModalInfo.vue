<script setup lang="ts">
import { computed } from "vue";
import { pokemonStore } from "@/stores/pokemon";

const storePokemons = pokemonStore();

const currentImage = computed(() => {
  return storePokemons.getCurrentPokemon.sprites.other["official-artwork"]
    .front_default;
});
const currentPokemon = computed(() => {
  return storePokemons.getCurrentPokemon;
});
</script>

<template>
  <div class="pokemon-info modal">
    <span class="close" @click.prevent="storePokemons.closeModal()">X</span>
    <div
      v-if="storePokemons.getCurrentPokemon?.sprites"
      class="pokemon-info-body"
    >
      <div class="pokemon-image">
        <img :src="currentImage" />
      </div>
      <div class="pokemon-data">
        <span class="pokemon-id"># {{ currentPokemon.id }}</span>
        <span class="pokemon-name">{{ currentPokemon.name }}</span>
        <div class="pokemon-type">
          <div
            v-for="({ type }, index) in currentPokemon.types"
            :key="index"
            :class="`${type.name}`"
          >
            {{ type.name.toUpperCase() }}
          </div>
        </div>
        <div class="pokemon-status">
          <div v-for="(status, index) in currentPokemon.stats" :key="index">
            <div>{{ status.stat.name.toUpperCase() }}</div>
            <div>{{ status.base_stat }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Pesquise por um pokemon</div>
  </div>
</template>

<style scoped>
@import url("@/assets/style/globalStyles/TypePokemonsColor.css");
@import url("./assets/style/PokemonInfo.css");
.modal {
  position: absolute;
  background-color: #fff;
  z-index: 3;
  margin-left: auto;
  margin-right: auto;
  top: -5%;
  left: 0;
  right: 0;
  height: 100%;
  text-align: center;
}
.close {
  position: absolute;
  cursor: pointer;
  top: 10px;
  padding: 15px;
  right: 10px;
  border-radius: 100%;
  background-color: #efefef;
}
@media only screen and (max-width: 600px) {
  .modal {
    width: 100%;
  }
}
</style>
