<template>
  <Suspense>
    <template #default>
      <div>
        <AppNavbar />
        <RouterView v-slot="{ Component }">
          <template v-if="Component">
            <Transition name="fade">
              <KeepAlive>
                <component :is="Component" />
              </KeepAlive>
            </Transition>
          </template>
          <template v-else>
            <div>Завантаження...</div>
          </template>
        </RouterView>
      </div>
    </template>
    <template #fallback>
      <div>Завантаження...</div>
    </template>
  </Suspense>
</template>

<style lang="scss">
</style>
<script setup lang="ts">
import AppNavbar from '@/components/AppNavbar.vue';
</script>
