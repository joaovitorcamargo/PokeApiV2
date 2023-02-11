<script setup lang="ts">
import { reactive, toRefs, computed } from "vue";
import InputCustom from "@/components/Input/InputCustom.vue";
import { pokemonStore } from "@/stores/pokemon";

const storePokemons = pokemonStore();

const data = reactive({
  pokemon: "" as string,
});

const { pokemon } = toRefs(data);

const typePokemon: any = {
  pikachu: "pikachu",
  bulbasaur: "bulbasaur",
  squirtle: "squirtle",
  charmander: "charmander",
};

const currentIcon = computed(() => {
  if (typePokemon[data.pokemon.toLowerCase()]) {
    return typePokemon[data.pokemon.toLowerCase()];
  }
  return "pokeball";
});

async function getPokemon() {
  await storePokemons.actionsPokemonList(data.pokemon);
}
</script>

<template>
  <div class="search-component-pokemon">
    <InputCustom
      placeholder="Ex.: Pikachu..."
      class="search-input-pokemon"
      v-model="pokemon"
      @keyup.enter="getPokemon"
    />
    <button
      class="search-button-pokemon"
      :class="[`search-button-icon-${currentIcon}`]"
      @click.prevent="getPokemon"
    ></button>
  </div>
</template>

<style scoped>
@import url("./assets/style/SearchPokemon.css");
</style>
