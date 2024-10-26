<script setup lang="ts">
import { Post } from '@/types/post.ts';
import PostItem from '@/components/PostItem.vue';

const props = withDefaults(defineProps<{
  posts: Post[]
}>(), {
  posts: () => [] as Post[],
});

</script>

<template>
  <div>
    <h3>Post List</h3>
    <post-item
      v-for="post in props.posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<style scoped lang="scss">
@use '../styles/variables' as *; // Import all variables


</style>
