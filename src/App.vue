<script setup>
import { RouterView } from 'vue-router';
import siteHeader from './views/siteHeader.vue'
import login from './views/login.vue'
import {ref} from 'vue';

  const props = defineProps({
    loggingIn:{
      type: Boolean,
    }
  })

  const logIn = ref(false);
</script>

<template >
  <div class="flex w-screen h-screen">
    <login 
    class="fixed inset-0 h-full w-full bg-gray-700 opacity-70"
    @close-login="logIn = !logIn"
    v-if="logIn"
    />
    <siteHeader
    @open-login="logIn = !logIn"
    class="flex top-0 h-20 p-2 w-1/2 mx-auto"
    >Click me
    </siteHeader>
    <RouterView/>
  </div>
  
</template>

<style lang="scss">
/* */
@import './assets/tailwind.css'

</style>
