<script setup lang="ts">
import { ref } from 'vue';

const message = ref('Hello, Vue with Vite!');

function handleClick(): void {
  // console.log('click');
}

</script>

<template>
  <h1>{{ message }}</h1>
  <button @click="handleClick">Add</button>
</template>

<style lang="scss" scoped>
h1 {
  color: green;
  font-size: 2em;
  margin: 20px;
}
</style>
