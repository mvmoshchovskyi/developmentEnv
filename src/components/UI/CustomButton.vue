<script setup lang="ts">
defineOptions({
  name: 'custom-button',
});
</script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.btn {
  margin-top: $base-margin;
  color: $secondary-color;
  padding: 10px 15px;
  background: none;
  border: 1px solid $secondary-color;
  border-radius: 20px;
}
</style>
