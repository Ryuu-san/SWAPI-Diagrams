<template>
  <button type="button">{{ props.count }}</button>
</template>

<script setup lang="ts">
  const props = defineProps<{
    count: Number
  }>()
</script>