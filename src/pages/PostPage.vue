<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useFetch } from '@/composables/useFetch.ts';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import { ISortOption, SortOptionValues, SortOptionNames } from '@/types/sort.ts';
import { IPost } from '@/types/post.ts';
import { POST_URL } from '@/constants/url.ts';
import CustomInput from '@/components/UI/CustomInput.vue';
import { AxiosHeaders } from 'axios';

const searchQuery = ref('');
const posts = ref<IPost[]>([]);
const selectedSort = ref('');
const sortOptions = reactive<ISortOption[]>([
  { value: SortOptionValues.Title, name: SortOptionNames.Title },
  { value: SortOptionValues.Description, name: SortOptionNames.Description },
]);
const page = ref(1);
const limit = ref(10);
const totalPage = ref(0);

const getParams = () => ({
  _page: page.value,
  _limit: limit.value,
});

const { error, refresh } = useFetch<IPost[]>(POST_URL, {
  getParams,
  onSuccess: (data: IPost[], headers: Partial<AxiosHeaders>) => {
    // When data is fetched successfully, count page and set the posts
    totalPage.value = Math.ceil(headers['x-total-count'] / limit.value);
    posts.value = data;
    // posts.value = [...posts.value, ...data];//// Set posts for infinity scroll
  },
});

const dialogVisible = ref(false);

const showDialog = (): void => {
  dialogVisible.value = true;
};

const changePage = (pageNumber: number): void => {
  page.value = pageNumber;
  refresh();
};

const createPost = (newPost: IPost): void => {
  posts.value.push(newPost);
  dialogVisible.value = false;
  // refresh();
};

const removePost = (post: IPost): void => {
  const index = posts.value.findIndex(p => post.id === p.id);
  if (index !== -1) {
    posts.value.splice(index, 1);
  }
};

const sortedPosts = computed((): IPost[] => {
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

const sortedAndSearchedPosts = computed((): IPost[] => {
  return sortedPosts.value.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

// console.log($env)
// infinity scroll
// const loadMorePosts = () => {
//   page.value += 1; // Increment page number
//   if (page.value < totalPage.value) {
//     refresh(); // Fetch new posts for the updated page
//   }
// };


// watch(page, () => {
//   refresh();
// });
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
  <div class="posts">
    <h1>Page with posts</h1>
    <custom-input
      v-focus
      placeholder="Search..."
      v-model="searchQuery"
    />
    <div class="posts__btns">
      <custom-button
        @click="showDialog"
      >
        Create Post
      </custom-button>

      <custom-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>

    <custom-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </custom-dialog>

    <div v-if="error" class="error-message">
      <p>An error occurred while fetching posts: {{ error }}</p>
    </div>

    <post-list
      v-if="!error"
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
    />

    <!--    infinity scroll-->
    <!--    <div-->
    <!--      class="observer"-->
    <!--      v-intersection="loadMorePosts"-->
    <!--    > </div>-->


    <div class="page__wrapper">
      <div
        v-for="pageNumber in totalPage"
        class="page"
        :key="pageNumber"
        :class="{
              'current-page': page === pageNumber,
            }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '../styles/variables' as *;

.posts {
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

.page {
  &__wrapper {
    display: flex;
    margin-top: $base-margin;
  }

  border: 1px solid #000000;
  padding: $base-padding;
}

.current-page {
  border: 2px solid $secondary-color;
}

.observer {
  height: 100px; /* Height for the observer element */
  background-color: lightgray; /* Styling for visibility */
}
</style>
