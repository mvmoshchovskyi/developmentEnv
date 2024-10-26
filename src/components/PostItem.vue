<script setup lang="ts">
import CustomButton from '@/components/UI/CustomButton.vue';
import { Post } from '@/types/post.ts';

defineEmits<{
  remove: [id: number];
}>();

const props = defineProps<{ post: Post }>();
</script>

<template>
  <div class="post">
    <div>
      <div><strong>Name:</strong>{{ props.post.title }}</div>
      <div><strong>Description:</strong>{{ props.post.description }}</div>
    </div>
    <div class="post__btns">
      <custom-button
        @click="$emit('remove', props.post.id)"
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
