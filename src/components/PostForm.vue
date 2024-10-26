<script setup lang="ts">
import { reactive } from 'vue';
import { Post } from '@/types/post.ts';
import CustomInput from '@/components/UI/CustomInput.vue';

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
    <custom-input
      type="text"
      placeholder="Name"
      v-model="post.title"
    />
    <custom-input
      type="text"
      placeholder="Description"
      v-model="post.description"
    />
    <custom-button
      class="btn__position"
    >
      Create
    </custom-button>
  </form>
</template>

<style scoped lang="scss">
@use '../styles/variables' as *;

form {
  display: flex;
  flex-direction: column;
}

.btn {
  &__position {
    align-self: flex-end;
  }
}
</style>
