<template>
    <v-chart 
        :option="option_bar" 
        autoresize
    />
</template>

<script setup lang="ts">
    import { watch, ref, reactive, computed } from 'vue'
    import { use } from 'echarts/core'
    import { CanvasRenderer } from 'echarts/renderers'
    import { BarChart } from 'echarts/charts'
    import {
        GridComponent,
        TooltipComponent,
    } from 'echarts/components'
    import VChart from 'vue-echarts'
    import { useDefaultStore } from '@/stores/default'

    use([
        CanvasRenderer,
        BarChart,
        GridComponent,
        TooltipComponent,
    ]);

    const store = useDefaultStore()
    const listPeople = computed(() => store.$state.peoples)
    const listName = ref([])
    const listHeight = ref([])

    store.getListPeople()

    const getListName = () =>{
        listName.value = listPeople.value.map((elem: object) =>{
            return elem.name.split(' ')[0]
        })
    }

    const getListHeight = () =>{
        listHeight.value = listPeople.value.map((elem: object) =>{
            return Number(elem.height)
        })
    }

    const option_bar = reactive({
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: [
            {
                type: 'category',
                data: listName,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Height',
                type: 'bar',
                barWidth: '60%',
                data: listHeight
            }
        ]
    });

    watch(listPeople, () =>{
        getListName()
        getListHeight()
    }, {deep: true})
</script>