<script setup lang="ts">
import { onMounted } from "vue";
import HttpService from "@/core/services/HttpService";
import InputCustom from "@/components/Input/InputCustom.vue";

const service = new HttpService();

onMounted(async () => {
  try {
    // logica inserida aqui
  } catch (erro) {
    console.log("Ocorreu Um Erro");
  }
});
</script>

<template>
  <div>
    <InputCustom />
  </div>
</template>

<style lang="scss" scoped></style>
