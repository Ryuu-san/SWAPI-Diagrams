import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useDefaultStore = defineStore('default', ()=> {
  let quantityPeople = ref(0)
  let peoples = ref<never | object>([])
  let activePage = ref(1)

  const getPeople = (page: number) =>{
    let defaultPage = 1

    if(page) defaultPage = page

    return axios({
      method: 'get',
      url: `https://swapi.dev/api/people/?page=${defaultPage}`
    })
  } 

  const getListPeople = async() =>{
    const data = await getPeople(1)

    setQuantityPeople(data.data.count)
    setPeoples(data.data.results)
    setActivePage(1)
  }

  const getPagePeople = async(page: number) =>{
    const data = await getPeople(page)

    setPeoples(data.data.results)
    setActivePage(page)
  }

  const setPeoples = (data: object) =>{
    peoples.value = data
  }

  const setActivePage = (data: number) =>{
    activePage.value = data
  }

  const setQuantityPeople = (data: number) =>{
    quantityPeople.value = data
  }

  const quantityPages = computed(() =>{
    return Math.ceil(quantityPeople.value / 10)
  })

  return {
    quantityPeople, peoples, activePage, getListPeople, getPagePeople, quantityPages
  }
})
