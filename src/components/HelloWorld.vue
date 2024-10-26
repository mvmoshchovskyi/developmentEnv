<script setup lang="ts">
import { ref } from 'vue';

const message = ref('Hello, Vue with Vite!');

function handleClick(): void {
  // console.log('click');
}

</script>

<template>
  <div class="example">
  <h1>{{ message }}</h1>
  </div>
  <button @click="handleClick">Add</button>
</template>

<style lang="scss">
.example {
  background-color: $primary-color; // Використання змінної
  color: white;
  padding: 20px;
}
</style>
