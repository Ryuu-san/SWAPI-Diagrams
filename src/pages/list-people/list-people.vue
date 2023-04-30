<template>
  <section class="h-screen flex flex-col">
    <div class="w-full flex justify-center space-x-2 mb-2 sm:mb-8">
      <router-link 
        class="p-2 bg-blue-900 rounded-b-lg text-white text-sm" 
        to="/"
      >List People</router-link>
      <router-link 
        class="p-2 bg-blue-600 rounded-b-lg text-white text-sm" 
        to="/diagram"
      >Diagram</router-link>
    </div>
    <div class="bg-white mx-4 rounded-lg sm:mx-24">
      <ListPeople/>
      <Paginations/>
    </div>
  </section>
</template>

<script setup lang="ts">
  import ListPeople from '@/modules/list-people/list-people.vue'
  import Paginations from '@/modules/paginations/paginations.vue'
</script>
