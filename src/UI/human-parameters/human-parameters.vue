<template>
  <div>
    <span>{{ props.parameters.name }}</span>
    <span>{{ props.parameters.height }}</span>
    <span>{{ props.parameters.birth_year }}</span>
    <span>{{ props.parameters.gender }}</span>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    parameters: Object
  }>()
</script>