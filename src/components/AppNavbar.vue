<script setup lang="ts">
import CustomButton from '@/components/UI/CustomButton.vue';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'app-navbar',
});
const router = useRouter();

const goTo = (url: string): void => {
  router.push(url);
};
</script>

<template>
  <div class="navbar" @click="goTo('/posts')">
    <h1>Welcome Practice</h1>
    <div class="navbar__btns">
      <custom-button @click="goTo('/posts')">Posts</custom-button>
      <custom-button @click="goTo('/about')" style="margin-left: 20px">Info</custom-button>
    </div>
  </div>
</template>

<style lang="scss">
.navbar {
  height: 60px;
  background-color: gray;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  padding: 0 20px;

  &__btns {
    margin-left: auto;
  }
}
</style>
