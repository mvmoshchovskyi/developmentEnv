<script setup lang="ts">
import { reactive, ref } from 'vue';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import { Post } from '@/types/post.ts';
import CustomDialog from '@/components/UI/CustomDialog.vue';
import CustomButton from '@/components/UI/CustomButton.vue';

const posts = reactive<Post[]>([
  { id: 1, title: 'JS', description: 'post description 1' },
  { id: 2, title: 'Python', description: 'post description 2' },
  { id: 3, title: 'Java', description: 'post description 3' },
  { id: 4, title: 'CC', description: 'post description 3' },
]);

const dialogVisible = ref(false);

const showDialog = () => {
  dialogVisible.value = true;
};

const createPost = (newPost: Post): void => {
  posts.push(newPost);
  dialogVisible.value = false;
};

const removePost = (id: number): void => {
  const index = posts.findIndex(post => post.id === id);
  if (index !== -1) {
    posts.splice(index, 1); // Remove the post using splice
  }
};

</script>

<template>
  <div class="app">
    <h1>Page with posts</h1>
    <custom-button
      style="margin: 15px 0"
      @click="showDialog"
    >
      Create Post
    </custom-button>
    <custom-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </custom-dialog>
    <post-list :posts="posts" @remove="removePost"/>
  </div>
</template>

<style lang="scss">
@use 'styles/variables' as *;

.app {
  padding: $base-padding;
}

</style>
