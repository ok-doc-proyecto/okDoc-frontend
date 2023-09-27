<script setup>
import { RouterView } from 'vue-router';
import siteHeader from './views/siteHeader.vue'
import medsSection from './views/medsSection.vue'
import login from './views/login.vue'
import filterSection from './views/filterSection.vue'
import { computed, onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import axios from 'axios';

const bluePadlet = {
  greatBlue300: "#6CB9D8"
}



const props = defineProps({
  loggingIn: {
    type: Boolean,
  }
})

const logIn = ref(false);

</script>

<template>
  <main class="flex w-screen h-screen box-border">

    <filterSection></filterSection>

    <section id="" class=" flex flex-col mx-auto h-full w-[600px] items-center justify-center left-0 box-border p-2">
      <login class="fixed z-auto h-full w-full bg-gray-700 opacity-70" @close-login="logIn = !logIn" v-if="logIn">
      </login>

      <siteHeader @open-login="logIn = !logIn" class="flex top-0 h-20 p-2 " id="header">
        Click me
      </siteHeader>


      <medsSection id="medsListSection" class=" bg-great-blue-200 flex p-2 h-full w-full lg:flex-col">
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
    //0px 0px 5px 5px rgba(156, 215, 229, 0.7)
  /*box-shadow:
    5px 5px 5px rgba(200, 100, 150, 0.3),
    -5px -5px 5px rgba(200, 100, 150, 0.3);*/
}
</style>
