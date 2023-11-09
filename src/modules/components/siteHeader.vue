<script setup>
    import dropDown from '../elements/dropDown.vue';
    import baseInput from '../elements/baseInput.vue';
    import { ref, defineComponent, onMounted, computed, inject } from 'vue';
    import {tools} from '../../global-functions/tools'
    import {useStore} from 'vuex'


    const store = useStore()
    const storeVariables={
        loggedIn: computed(() => store.state.loggedIn),
        userInfo: computed(() => store.state.userInfo),
    }
    
    
    const emit = defineEmits(['openLogin'])


    const openLoginTemplate = () =>{
        emit('openLogin')
    }
</script>

<template>
    <header>
       <div class="flex w-full h-full justify-center items-center">
            
            <div class="flex flex-grow bg-white h-1/2 py-1 rounded mx-4 shadow-md items-center">
                <div class="flex w-full h-full items-center justify-center ">
                    
                    <baseInput 
                        :sendInput="true" 
                        @send-query="tools.getData"
                        class=" flex-grow "
                        placeholder=" Hi!"/>
                    
                    <dropDown 
                        class=" right-0 w- border-l-2 border-great-blue-300 xs:hidden"/>
                </div>
                
            </div>
            <button 
                id="Login" 
                class="h-3/5 w-[70px] bg-great-blue-200 hover:bg-great-blue-300 font-Roboto font rounded-lg shadow-md text-center align-middle sm:hidden"
                @click="openLoginTemplate"
                v-if="!storeVariables.loggedIn.value">
                Login
            </button>
            <button
                class="h-3/5 w-[70px] bg-great-blue-200 hover:bg-great-blue-300 font-Roboto font rounded-lg shadow-md text-center align-middle sm:hidden"
                v-else>
                {{ storeVariables.loggedIn ? storeVariables.userInfo : ''}}
            </button>
        </div> 
    </header>
</template>



<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap');
</style>