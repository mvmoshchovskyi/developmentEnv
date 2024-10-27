<script setup lang="ts">
import PostItem from '@/components/PostItem.vue';
import { IPost } from '@/types/post.ts';

const emit = defineEmits<{
  remove: [post: IPost];
}>();

const props = withDefaults(defineProps<{
  posts: IPost[]
}>(), {
  posts: () => [] as IPost[],
});

const removePost = (post: IPost): void => {
  emit('remove', post);
};
</script>

<template>
  <div v-if="posts.length > 0">
    <h3>Post List</h3>
    <transition-group
      name="post-list"
    >
      <post-item
        v-for="post in props.posts"
        :key="post.id"
        :post="post"
        @remove="removePost"
      />
    </transition-group>
  </div>
  <h2
    v-else
    style="color: red"
  >
    List is empty
  </h2>
</template>

<style scoped lang="scss">
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.post-list-move {
  transition: transform 0.8s ease;
}
</style>
