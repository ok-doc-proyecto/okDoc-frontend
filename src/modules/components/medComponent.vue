<script setup>
import { ref } from 'vue';
const props = defineProps({
    medico: {},
})

const emits = defineEmits(['openDoc'])

const openDoc = ()=>{
    emit('openDoc')
}

let isHovered = ref(false)
let animationFinished = ref(false)
//                :class="{'opacity-0':!isHovered,'opacity-1':isHovered}">

</script>


<template>
    <div class=" w-full pl-1 bg-bodyWhite rounded-lg flex items-center">
        <span class="flex h-28 w-20 rounded-md align-items ">
            <div class="opacity-0 my-auto"
                :class="{ 'hidden animate-image-out transition-height duration-[1.5s] transform': !isHovered, 'block animate-image-pop': isHovered }">
                
                <img alt="Med Image" class="  my-auto">
            </div>


        </span>
        <div class=" flex flex-col h-full w-full mx-auto cursor-pointer p-2 justify-center" :class="{'':isHovered}" 
            @mouseenter="isHovered = !isHovered"
            @mouseleave="isHovered = !isHovered">

            <h1 class=" h-10 flex items-center justify-center text-center" :class="{'items-start':isHovered}">
                {{ medico.first_name }} {{ medico.last_name }}</h1>
            <div class="flex w-full transition-height duration-[1s] transform "
                :class="{ 'h-40 transform scale-y-100': isHovered, 'h-0 transform scale-y-0': !isHovered }">
            </div>
        </div>
        <div class="flex justify-center align-middle w-20">
            rating

            <!-- <fieldset class="rating-wrap">
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
            </fieldset> -->
        </div>

    </div>
</template>

<style lang="scss" scoped> .animate-image-out {
     animation: fadeOut 2s ease-in-out forwards
 }

 @keyframes fadeOut {
     0% {
         opacity: 1
     }

     100% {
         opacity: 0;
     }
 }

 .animate-image-pop {
     animation: fadeIn 2s ease-in-out forwards
 }

 @keyframes fadeIn {
     0% {
         opacity: 0;
     }

     100% {
         opacity: 1;
     }
 }

 /*.medComponentParent:hover .medComponentBody{
    height:200px;
    transition:height 1s;
}*/
</style>