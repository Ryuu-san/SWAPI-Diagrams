<template>
  <HumanParameters 
    :parameters="props.parameters" 
  />
</template>
 
<script setup lang="ts">
  import HumanParameters from '@/UI/human-parameters/human-parameters.vue'
  const props = defineProps<{
    parameters: Object
  }>()
</script>