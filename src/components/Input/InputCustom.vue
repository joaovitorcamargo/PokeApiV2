<script setup lang="ts">
import setup from "./setupComposable/setup";
import commonProps from "./props/commonProps";

defineProps(commonProps);
const emit: any = defineEmits(["update:modelValue"]);
const { onInput } = setup(emit);
</script>

<template>
  <input type="text" :value="modelValue" v-bind="$attrs" @input="onInput" />
</template>
