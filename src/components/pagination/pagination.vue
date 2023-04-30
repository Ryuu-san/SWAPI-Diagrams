<template>
    <PageButton 
        :count="props.count"
        :class="['px-3 py-2 rounded text-xs font-normal', active === count ? 'bg-blue-500 text-white' : 'text-gray-300']"
        @click='emit("selectPage", count)' 
    />
</template>

<script setup lang="ts">
    import PageButton from '@/UI/page-button/page-button.vue'
    import { computed } from 'vue'
    import { useDefaultStore } from '@/stores/default'

    const store = useDefaultStore()

    const active = computed(() => store.activePage)

    const props = defineProps<{
        count: Number
    }>()

    const emit = defineEmits(['selectPage'])
</script>