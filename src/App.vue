<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useFetch } from '@/composables/useFetch.ts';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import { ISortOption, SortOptionValues, SortOptionNames } from '@/types/sort.ts';
import { IPost } from '@/types/post.ts';
import { POST_URL } from '@/constants/url.ts';

const posts = ref<IPost[]>([]);
const selectedSort = ref('');
const sortOptions = reactive<ISortOption[]>([
  { value: SortOptionValues.Title, name: SortOptionNames.Title },
  { value: SortOptionValues.Description, name: SortOptionNames.Description },
]);

const { error, loading } = useFetch<IPost[]>(`${POST_URL}?_limit=10`, {
  onSuccess: (data) => {
    // When data is fetched successfully, set the posts
    posts.value = data; // Set posts to the fetched data
  },
});
const dialogVisible = ref(false);

const showDialog = () => {
  dialogVisible.value = true;
};

const createPost = (newPost: IPost): void => {
  posts.value.push(newPost);
  dialogVisible.value = false;
  // refresh();
};

const removePost = (post: IPost): void => {
  const index = posts.value.findIndex(p => post.id === p.id);
  if (index !== -1) {
    posts.value.splice(index, 1); // Remove the post using splice
  }
};

const sortedPosts = computed(() => {
  return [...posts.value].sort((post1, post2) => {
    const value1 = post1[selectedSort.value as keyof IPost];
    const value2 = post2[selectedSort.value as keyof IPost];

    if (typeof value1 === 'string' && typeof value2 === 'string') {
      return value1.localeCompare(value2);
    }

    // Sort numerically if both are numbers
    if (typeof value1 === 'number' && typeof value2 === 'number') {
      return value1 - value2;
    }

    return 0;
  });
});

// watch(selectedSort, (newSortValue) => {
//   posts.value.sort((post1, post2) => {
//     return post1[newSortValue]?.localeCompare(post2[newSortValue])
//   });
// })
// watch([selectedSort, dialogVisible], ([newSort, newDialogVisible]) => {
//   console.log('Selected Sort:', newSort);
//   console.log('Dialog Visible:', newDialogVisible);
// });

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
      :posts="sortedPosts"
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
