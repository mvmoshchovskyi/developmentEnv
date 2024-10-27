<script setup lang="ts">
import { reactive, ref } from 'vue';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import { Post } from '@/types/post.ts';
import CustomDialog from '@/components/UI/CustomDialog.vue';
import CustomButton from '@/components/UI/CustomButton.vue';
import { useFetch } from '@/src/composables/useFetch.ts';
import CustomSelect from '@/components/UI/CustomSelect.vue';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const posts = ref<Post[]>([]);
const selectedSort = ref('');
const sortOptions = reactive([
  { value: 'title', name: 'sort by name' },
  { value: 'description', name: 'sort by description' },
]);

const { error, loading } = useFetch<Post[]>(`${URL}?_limit=10`, {
  onSuccess: (data) => {
    // When data is fetched successfully, set the posts
    posts.value = data; // Set posts to the fetched data
  },
});
const dialogVisible = ref(false);

const showDialog = () => {
  dialogVisible.value = true;
};

const createPost = (newPost: Post): void => {
  posts.value.push(newPost);
  dialogVisible.value = false;
  // refresh();
};

const removePost = (post: Post): void => {
  const index = posts.value.findIndex(p => post.id === p.id);
  if (index !== -1) {
    posts.value.splice(index, 1); // Remove the post using splice
  }
};

</script>

<template>
  <div class="app">
    <h1>Page with posts</h1>
    <div class="app__btns">
      <custom-button
        @click="showDialog"
      >
        Create Post
      </custom-button>

      <custom-select
        v-model="selectedSort"
        :options="sortOptions"
      >

      </custom-select>
    </div>

    <custom-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </custom-dialog>

    <div v-if="loading">Loading...</div>

    <div v-if="error" class="error-message">
      <p>An error occurred while fetching posts: {{ error }}</p>
    </div>

    <post-list
      v-if="!loading && !error"
      :posts="posts"
      @remove="removePost"
    />
  </div>
</template>

<style lang="scss">
@use 'styles/variables' as *;

.app {
  padding: $base-padding;

  &__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
  }
}

.error-message {
  color: red;
}
</style>
