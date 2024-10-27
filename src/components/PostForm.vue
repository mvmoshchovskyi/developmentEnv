<script setup lang="ts">
import { reactive } from 'vue';
import { IPost} from '@/types/post.ts';

const emit = defineEmits<{
  create: [post: IPost]
}>();

const post = reactive<IPost>({ title: '', body: '' });

const createPost = (): void => {
  const newPost = { ...post, id: Date.now() };
  emit('create', newPost);
  post.title = '';
  post.body = '';
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
      v-model="post.body"
    />
    <custom-button
      class="btn__position"
    >
      Create
    </custom-button>
  </form>
</template>

<style scoped lang="scss">
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
