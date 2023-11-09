 <script setup>
import {ref,computed} from 'vue'
import filterSection from '../components/filterSection.vue'
import medsSection from '../components/medsSection.vue'
import siteHeader from '../components/siteHeader.vue'
import login from '../views/login.vue'
import {useStore} from 'vuex'

const store = useStore
const storeVariables={
    loggedIn: computed(() => store.state.loggedIn),
    userInfo: computed(() => store.state.userInfo),
}


const logIn = ref(false);

</script>
<template>
     <login class=" loginSection fixed z-auto h-full w-full backdrop-blur-md" 
            @close-login="logIn = !logIn" 
            v-if="logIn">
      
    </login>
    <filterSection></filterSection>

    <siteHeader 
      @open-login="logIn = !logIn" 
      class="flex w-96 top-0 h-20 p-2 mx-auto"
      id="header">
    </siteHeader>

    <section 
      id="" 
      class=" flex flex-col mx-auto h-4/5 w-[600px] items-center justify-center left-0 p-2 pt-7">
      <medsSection id="medsListSection" class="flex bg-great-blue-200  p-2 h-full w-full overflow-y-auto">
      </medsSection>
    </section>
</template>

<style>

</style>
