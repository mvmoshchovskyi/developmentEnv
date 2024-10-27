<script setup lang="ts">

defineOptions({
  name: 'custom-dialog',
});

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'update:show', value: boolean): void;
}>();

withDefaults(defineProps<{
    show: boolean;
  }>(),
  {
    show: () => false,
  });

const hideDialog = (): void => {
  emit('update:show', false);
};



</script>

<template>
  <div
    class="dialog"
    v-if="show"
    @click="hideDialog"
  >
    <div
      class="dialog__content"
      @click.stop
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">

.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background: #ffffff;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>
