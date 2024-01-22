<script setup lang="ts">
const props = defineProps<{
  isMonetary: boolean;
  countValue: number;
  description: string;
}>();

const valueFiltered = computed(() => {
  if (props.countValue >= 1000000)
    return (props.countValue / 1000000).toFixed(1) + "M";
  if (props.countValue >= 1000)
    return (props.countValue / 1000).toFixed(1) + "k";

  return props.countValue;
});
</script>
<template>
  <div class="flex justify-start items-end text-gray-100 gap-1">
    <span v-if="props.isMonetary" class="text-xs md:text-lg">R$</span>
    <span class="value text-2xl md:text-5xl lg:text-4xl">{{
      valueFiltered
    }}</span>
  </div>
  <span class="description text-xs md:text-sm text-gray-100">{{
    props.description
  }}</span>
</template>
<style scoped></style>
