<script setup>
    //import dropDown from '../elements/dropDown.vue';
    import baseInput from '../elements/baseInput.vue';
    import { ref, defineComponent, onMounted, computed, inject } from 'vue';
    import {tools} from '../../global-functions/tools'
    import {useStore} from 'vuex'

    const displayDropdowns = ref({
        search:false,
        userElements:false 
    })
    
    let searchDropdownItems = ref([
        { name: "Item 1", link: "#", selected: "true" },
        { name: "Item 2", link: "#", selected: "false" },
        { name: "Item 3", link: "#", selected: "false" },
    ]);

    let userDropDownItems = ref(([
        { name: "Logout", link: "#"},
        { name: "Config", link: "#"},
       // { name: "Item 3", link: "#"},
    ]))

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
                    <div class="flex flex-col">
                        <button class=" w-20 select-header"
                        @click="displayDropdowns.search = !displayDropdowns.search">Select</button>
                        <ul v-if="displayDropdowns.search" class="flex flex-col justify-center align-middle absolute w-20 mt-7 options">
                          <li class="text-center" v-for="item in searchDropdownItems">{{ item.name }}</li>
                        </ul>
                    </div>
                    <!-- <dropDown 
                        class=" right-0 w- border-l-2 border-great-blue-300 xs:hidden"
                        :items="searchDropdownItems"/> -->
                </div>
                
            </div>
            <button 
                id="Login" 
                class="h-3/5 w-[70px] bg-great-blue-200 hover:bg-great-blue-300 font-Roboto font rounded-lg shadow-md text-center align-middle sm:hidden"
                @click="openLoginTemplate"
                v-if="!storeVariables.loggedIn.value">
                Login
            </button>
            <div
                class=" h-10 w-16 bg-great-blue-200 hover:bg-great-blue-300 font-Roboto rounded-2xl shadow-md justify-center align-middle sm:hidden"
                v-else>
                <div class="w-full h-full flex flex-col relative">
                    <button 
                        class=" w-full h-full select-header"
                        @click="displayDropdowns.userElements = !displayDropdowns.userElements">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="40" height="30"
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                            class=" w-full mr-0 lucide lucide-user-cog">
                            
                            <circle cx="18" cy="15" r="3"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M10 15H6a4 4 0 0 0-4 4v2"/>
                            <path d="m21.7 16.4-.9-.3"/>
                            <path d="m15.2 13.9-.9-.3"/>
                            <path d="m16.6 18.7.3-.9"/>
                            <path d="m19.1 12.2.3-.9"/>
                            <path d="m19.6 18.7-.4-1"/>
                            <path d="m16.8 12.3-.4-1"/>
                            <path d="m14.3 16.6 1-.4"/>
                            <path d="m20.7 13.8 1-.4"/>
                        </svg>
                    </button>
                    <ul v-if="displayDropdowns.userElements" class="flex top-10 flex-col absolute justify-center align-middle w-full options">
                      <li class="text-center" v-for="item in userDropDownItems">{{ item.name }}</li>
                    </ul>
                </div>
                
                <!-- {{ storeVariables.loggedIn ? storeVariables.userInfo.value.name: ''}} -->
                
                </div>
        </div> 
    </header>
</template>



<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap');
</style>