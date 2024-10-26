<script setup lang="ts">

defineOptions({
  name: 'custom-input',
});

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (event: 'update:modelValue', value: string | number): void;
}>();

defineProps<{ modelValue: string | number}>();

const updateInput = (event: Event) => {
  const target = event.target as HTMLInputElement; // Use 'event' here
  emit('update:modelValue', target.value); // Emit the updated value
};
</script>

<template>
  <input
    type="text"
    class="input"
    :value="modelValue"
    @input="updateInput"
  >
</template>

<style scoped lang="scss">
.input {
  width: 100%;
  border: 2px solid $secondary-color;
  padding: $base-padding;
  margin-top: $base-margin;
}
</style>
