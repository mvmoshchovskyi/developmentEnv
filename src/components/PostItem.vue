<script setup lang="ts">
import { IPost } from '@/types/post.ts';

const emit = defineEmits<{
  remove: [post: IPost];
}>();

const props = defineProps<{ post: IPost }>();

const removePost = (post: IPost) => {
  emit('remove', post);
};
</script>

<template>
  <div class="post">
    <div>
      <div><strong>Name:</strong>{{ props.post.title }}</div>
      <div><strong>Description:</strong>{{ props.post.body }}</div>
    </div>
    <div class="post__btns">
      <custom-button
        @click="removePost(post)"
      >
        Remove
      </custom-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/variables' as *;

.post {
  padding: $base-padding;
  border: 2px solid $secondary-color;
  border-radius: 5px;
  margin-top: $base-margin;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
