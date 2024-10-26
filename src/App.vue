<script setup lang="ts">
import { reactive } from 'vue';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import { Post } from '@/types/post.ts';

const posts = reactive<Post[]>([
  { id: 1, title: 'JS', description: 'post description 1' },
  { id: 2, title: 'Python', description: 'post description 2' },
  { id: 3, title: 'Java', description: 'post description 3' },
  { id: 4, title: 'CC', description: 'post description 3' },
]);

const createPost = (newPost: Post): void => {
  posts.push(newPost);
};

</script>

<template>
  <div class="app">
    <post-form @create="createPost"/>
    <post-list :posts="posts"/>
  </div>
</template>

<style lang="scss">
@use 'styles/variables' as *;

.app {
  padding: $base-padding;
}

</style>
