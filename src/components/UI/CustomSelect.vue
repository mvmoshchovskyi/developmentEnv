<script setup lang="ts">
defineOptions({
  name: 'custom-select',
});

const emit = defineEmits(['update:modelValue']);

withDefaults(defineProps<{
  modelValue: string;
  options: { value: string; name: string }[];
}>(), {
  options: () => [],
});

const changeOption = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <select
    :value="modelValue"
    @change="changeOption"
  >
    <option
      disabled
      value=""
    >
      Select from list
    </option>

    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<style scoped lang="scss">

</style>
