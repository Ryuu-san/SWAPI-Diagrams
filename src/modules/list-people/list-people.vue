<template>
    <div class="flex flex-col">
        <div class="grid grid-cols-4 text-center uppercase px-4 pt-6 font-medium text-xs text-gray-300 font-sans pb-4 sm:pb-12">
            <span>Name</span>
            <span>Height</span>
            <span>Birth year</span>
            <span>Gender</span>
        </div>
        <div class="grid px-4">
            <Human
                v-for="people in listPeople" 
                :key="people.name"
                :parameters="people"
                class="grid grid-cols-4 py-2 text-center text-xs font-medium text-gray-900 border-b border-gray-100 border-solid"
            />
        </div>
    </div>
</template>
 
<script setup lang="ts">
    import Human from '@/components/human/human.vue'
    import { computed } from 'vue'
    import { useDefaultStore } from '@/stores/default'

    const store = useDefaultStore()

    store.getListPeople()

    const listPeople = computed(() => store.$state.peoples)
</script>