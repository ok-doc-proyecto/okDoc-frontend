<script setup>
import openButton from '../components/openButton.vue'
import baseFilter from '../components/baseFilter.vue'
import baseInput from '../components/baseInput.vue'
import { computed, ref, watch } from 'vue';
import { tools } from '../global-functions/tools'


const filters = [
    { name: 'Zona' },
    { name: 'Obra Social' },
    { name: 'Virtual' },
    { name: 'Especialidad' }
]

let appliedFilters = ref([])

const addFilter = (value) => {

    let newFilter = { name: value.target.text }

    if (tools.containsElement(appliedFilters.value, newFilter.name) === -1) {
        appliedFilters.value.push(newFilter)
        console.log(appliedFilters.value)
    } else {

        console.log('Filter already selected')
    }
}

const computedFilters = computed(()=>{

    return appliedFilters.value.map((item,index)=>({
        name:item.name,
        id:`filter-${index}`
    }))})

const removeFilter= (filterName)=>{
    const index = appliedFilters.value.indexOf(filterName);
    console.log('hi')
    if(index){
        appliedFilters.value.splice(index, 1);
        
    }
}

</script>   


<template>
    <section id="filterSection"
        class="fixed w-96 h-3/4 mt-28 transform -translate-x-[330px] transition-transform duration-700 hover:translate-x-2 ease-in-out">
        <div class="flex w-full h-full bg-transparent justify-center align-middle box-border rounded-lg ">

            <div id="hidenFilter" class="w-full bg-great-blue-200 border border-white shadow-lg box-border">
                <div class="flex flex-col w-full h-1/4 py-1">
                    <div class="flex flex-col justify-center align-middle h-3/4 w-full ">
                        <a v-for="filter in filters" class="cursor-pointer hover:opacity-50 active:color-blue text-center"
                            @click="addFilter">
                            {{ filter.name }}</a>
                    </div>
                </div>
                <div class="flex flex-col h-auto w-full p-2 box-border">
                    Active filters
                    <baseFilter v-for="item in computedFilters" :key="item.id" :filterName="item.name" @delete-filter="removeFilter" class="mb-3"></baseFilter>                    
                </div>
            </div>

            <openButton id="visibleFilter"
                class="flex bg-great-blue-300 opacity-90 w-[50px] h-[35px] ml-2 mt-[370px] items-center justify-center transition duration-1000 ease-in-out rounded-3xl shadow-lg"
                :style='setBgColor'>
            </openButton>

        </div>

    </section>
</template>

<style lang="scss" scoped>
#hidenFilter {
    box-shadow: inset 0 0 100px 50px rgba(255, 255, 255, 0.5)
}
</style>