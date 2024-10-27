<script setup lang="ts">
import PostItem from '@/components/PostItem.vue';
import { Post } from '@/types/post.ts';

const emit = defineEmits<{
  remove: [post: Post];
}>();

const props = withDefaults(defineProps<{
  posts: Post[]
}>(), {
  posts: () => [] as Post[],
});

const removePost = (post: Post): void => {
   emit('remove', post);
};
</script>

<template>
  <div v-if="posts.length > 0">
    <h3>Post List</h3>
    <post-item
      v-for="post in props.posts"
      :key="post.id"
      :post="post"
      @remove="removePost"
    />
  </div>
  <h2
    v-else
    style="color: red"
  >
    List is empty
  </h2>
</template>

<style scoped lang="scss">
@use '../styles/variables' as *; // Import all variables


</style>
