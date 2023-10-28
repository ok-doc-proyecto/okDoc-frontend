<script setup>
import { RouterView } from 'vue-router';
import siteHeader from './modules/components/siteHeader.vue'
import medsSection from './modules/views/medsSection.vue'
import login from './modules/views/login.vue'
import filterSection from './modules/components/filterSection.vue'
import { computed, onMounted, ref,provide } from 'vue';
import {useStore} from 'vuex'

const store = useStore()


const bluePadlet = {
  greatBlue300: "#6CB9D8"
} 

const generalStates = {
  loggedIn:ref(false),
  approveSignIn:(userData)=>{
    console.log('Welcome back!')
  },
  userInfo:{},
}



const logIn = ref(false);

provide('generalStates',generalStates)
</script>

<template>

  <main class="flex flex-col w-screen h-screen">
  
    <filterSection></filterSection>

    <login class=" loginSection fixed z-auto h-full w-full backdrop-blur-md" @close-login="logIn = !logIn" @sign-in="generalStates.approveSignIn" v-if="logIn">
    </login>

    <siteHeader 
      @open-login="logIn = !logIn" 
      class="flex w-96 top-0 h-20 p-2 mx-auto"
      id="header">
      Click me
    </siteHeader>
    
    <section 
      id="" 
      class=" flex flex-col mx-auto h-4/5 w-[600px] items-center justify-center left-0 p-2 pt-7">
      <medsSection id="medsListSection" class="flex bg-great-blue-200  p-2 h-full w-full overflow-y-auto">
      </medsSection>
      <RouterView />
    </section>
  </main>


</template>

<style lang="scss">
@import './assets/tailwind.css';

#medsListSection {
  box-shadow:
    0px 0px 10px 5px rgba(156, 215, 229, 0.5),
    0px 0px 10px 5px rgba(156, 215, 229, 0.5),
    inset 0px 0px 30px 5px rgba(255,255,255,0.3),

    0px 0px 10px 10px rgba(0, 0, 0, 0.1)
}
.loginSection{
  background-color: rgba(0,0,0,0.5);
}


</style>
