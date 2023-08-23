<script setup>
import { RouterView } from 'vue-router';
import siteHeader from './views/siteHeader.vue'
import login from './views/login.vue'
import openButton from './components/openButton.vue'
import {computed, onMounted, ref} from 'vue';
import {gsap} from 'gsap';
import axios from 'axios';

  const bluePadlet ={
        greatBlue300 : "#6CB9D8"
   }

  const props = defineProps({
    loggingIn:{
      type: Boolean,
    }
  })

  const logIn = ref(false);

  const bgColor=ref('');
  
  const setBgColor = computed(()=>{
    return isHovered.value ? 'red' : bluePadlet.greatBlue300
  })
  
  const isHovered = ref({
    filterSection:false
  });

  const firstAnmitaion = () =>{
    gsap.from('')
  }
</script>

<template>
  <main class="flex w-screen h-screen">
      <section 
        id="filterSection"
        class="absolute top-0 left-0 w-72 h-full transform -translate-x-[240px] transition-transform duration-300 ease-in-out"
        @mouseenter="isHovered.filterSection = !isHovered.filterSection"
        @mouseleave="isHovered.filterSection = !isHovered.filterSection"
        :class="{'translate-x-0':isHovered.filterSection}">

        <div
          id="filterSectionContent"
          class="flex h-full">
          <div 
            id="hidenFilter" 
            class=" w-5/6 h-full bg-blue-200 ">
          
            <div class="w-full h-20"> 
              <button 
                ref="Logo" 
                class="h-20 w-20 bg-great-blue-300 rounded shadow-md text-center sm:hidden">
                Logo
              </button>
            </div>
            <div class="flex h-1/2 w-full justify-center"> Toolbox </div>
            <div class="flex h-1/2 w-full justify-center"> Toolbox </div>
          </div>  
            <openButton 
              id="visibleFilter" 
              class="flex w-1/12 h-full items-center justify-center transition duration-100 rounded-r-lg shadow-lg"
              :style='setBgColor'>
            </openButton>
        </div> 
      </section>
      
      <section
        id=""
        class="flex flex-col mx-auto h-full w-1/2 items-center justify-center left-0">
        <login 
          class="fixed inset-0 z-auto h-full w-full bg-gray-700 opacity-70"
          @close-login="logIn = !logIn"
          v-if="logIn"/>
        
          <siteHeader
            @open-login="logIn = !logIn"
            class="flex top-0 h-20 p-2">
            Click me
          </siteHeader>
        

        <section class="flex  h-full w-full lg:flex-col">
          <div id="filterOptions" class=" w-1/2 h-[400px]"></div>
          <div id="" class=" w-1/2 h-full"></div>
        </section>

        <!--<nav class="flex h-12 w-12 bg-great-blue-300 rounded-xl hover:h-24 hover:w-24">

          <a 
            id="navBar"
            class="grid grid-cols-2 grid-rows-2 h-5/6 w-5/6 bg-great-blue-300 rounded-2xl mx-auto my-auto"
            href="#">
          </a>
        </nav>-->
        <RouterView/>
      </section> 
  </main>
  
</template>

<style lang="scss">
/* */
@import './assets/tailwind.css'

</style>
