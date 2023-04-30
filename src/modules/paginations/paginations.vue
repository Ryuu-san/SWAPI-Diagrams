<template>
    <div class="flex justify-center flex-wrap my-4 sm:my-16">
        <Pagination
            v-for="page in quantityPeople" 
            :key="page"
            :count="page"
            @selectPage="selectPage"
        />
    </div>
</template>

<script setup lang="ts">
   import Pagination from '@/components/pagination/pagination.vue'
   import { computed } from 'vue'
   import { useDefaultStore } from '@/stores/default'

    const store = useDefaultStore()

    const quantityPeople = computed(() => store.quantityPages)

    const selectPage = ((page: number)=>{
        store.getPagePeople(page)
    })
</script>