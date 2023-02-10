<template>
  <div></div>
</template>

<script setup>
import { onMounted } from "vue";
import HttpService from "@/core/services/HttpService";

const service = new HttpService();

onMounted(async () => {
  try {
    // const teste = await service.getPokemonList("eevee");
  } catch (erro) {
    console.log("Ocorreu Um Erro");
  }
});
</script>

<style lang="scss" scoped></style>
