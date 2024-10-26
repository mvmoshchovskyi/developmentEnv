<script setup lang="ts">

import { Post } from '@/types/post.ts';

const props = defineProps<{ post: Post }>();
</script>

<template>
  <div class="post">
    <div>
      <div><strong>Name:</strong>{{ props.post.title }}</div>
      <div><strong>Description:</strong>{{ props.post.description }}</div>
    </div>
    <div class="post__btns">
      <button class="btn">Delete</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.post {
  padding: $base-padding;
  border: 2px solid $secondary-color; // Use the variable directly
  border-radius: 5px;
  margin-top: $base-margin;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn {
  margin-top: $base-margin;
  align-self: flex-end;
  color: $secondary-color;
  padding: 10px 15px;
  background: none;
  border: 1px solid $secondary-color;
  border-radius: 20px;

}
</style>
