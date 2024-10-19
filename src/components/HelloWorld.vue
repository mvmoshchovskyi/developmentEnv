<script setup lang="ts">
import { ref } from 'vue';

const message = ref('Hello, Vue with Vite!');

</script>

<template>
         <h1>{{ message }}</h1>
</template>

<style lang="scss" scoped>
h1 {
  color: green;
  font-size: 2em;
  margin: 20px;
}
</style>
