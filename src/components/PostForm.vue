<script setup lang="ts">
import { reactive } from 'vue';
import { Post } from '@/types/post.ts';

const emit = defineEmits<{
  create: [post: Post]
}>();

const post = reactive<Post>({ title: '', description: '', id: 1 });

const createPost = (): void => {
  const newPost = { ...post, id: Date.now() };
  emit('create', newPost);
  post.title = '';
  post.description = '';
};
</script>

<template>
  <form @submit.prevent="createPost">
    <h4>Create post</h4>
    <input
      class="input"
      type="text"
      placeholder="Name"
      v-model="post.title"
    />
    <input
      class="input"
      type="text"
      placeholder="Description"
      v-model="post.description"
    />
    <button class="btn">Create</button>
  </form>
</template>

<style scoped lang="scss">
@use '../styles/variables' as *; // Import all variables
form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 2px solid $secondary-color;
  padding: $base-padding;
  margin-top: $base-margin;
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
