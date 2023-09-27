<script setup>
//import 
const props = defineProps({
    medico: {},
})


console.log()
</script>


<template>
    <div class="medStyles w-full h-20 pl-1 bg-bodyWhite rounded-lg flex items-center hover:h-44 transition-height duration-1000">
        <img alt="Med Image" class=" w-20 h-5/6 rounded-md items">
        <div class="flex flex-col h-full w-full mx-auto cursor-pointer">
            <h1 class="text-center h-5">{{ medico.name }} {{ medico.surname }}</h1>
        </div>
        <div class="flex justify-center align-middle h-20 w-40">
        
                <fieldset class="rating-wrap">
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                </fieldset>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/*.medStyles{
    box-shadow:inset 0px 0px 3px 2px rgba(0, 0, 0, 0.3);  
}*/
</style>