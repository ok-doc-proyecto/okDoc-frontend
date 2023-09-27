<script setup>
import baseInput from '../components/baseInput.vue'
import { ref, onMounted } from 'vue';


const emit = defineEmits(['closeLogin'])

const reactiveTextToShow = {
    smallSignIn: 'Sign In',
    bigSignIn: ' Sign In to okDoc',
    smallForgot: 'Forgot',
    bigForgot: 'Forgot Password',
    bigLogError: 'Please, enter valid credentials',
    smallLogError: 'Invalid credentials',
    smallInWith: 'Sign in with',
    bigInWith: 'Or ssign in with'
}
const closeLoginTemplate = (event) => {
    const loginArea = document.getElementById('loginArea');
    if (!loginArea.contains(event.target)) {
        emit('closeLogin')
    }

}
</script>


<template>
    <div @click.stop="closeLoginTemplate" @keydown.esc="logIn = !logIn">
        <div class="flex w-full h-full items-center justify-center">
            <section id="loginArea" class="flex w-80 bg-white shadow-lg shadow-black rounded-3xl">
                <div id="inputList" class="flex flex-col justify-between items-center h-full p-10 rounded-3xl mx-auto">

                    <h1 class="w-full ">Sign in to okDoc</h1>
                    <div>
                        <div id="inputList"
                            class="flex w-full h-9 mx-auto mt-2 border-[1px] border-black rounded-lg hover:border-2 focus:border-2">
                            <baseInput class="flex w-full h-full opacity-80 rounded-lg px-2 focus:border-2"
                                :sendInput="false" placeholder="Email" />
                        </div>

                        <div
                            class="flex w-full h-9 mx-auto mt-2 border-[1px] border-black rounded-lg hover:border-2 focus:border-2">
                            <baseInput class="flex w-full h-full opacity-80 rounded-lg px-2 focus:border-2"
                                :sendInput="true" @sendQuery="getLoginData" placeholder="Password" />
                            <a href="#" class="flex w-20 h-full items-center justify-center hover:text-red-300">Forgot</a>
                        </div>
                        <a href="#"
                            class="flex w-6 border-b-[1px] border-l-[1px] border-r-[1px] border-black rounded-br-lg rounded-bl-lg ml-[210px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-6 mx-auto">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>

                        </a>
                        <span class="flex h-10 w-full items-center justify-content mx-auto my-auto text-red-500 text-xs">{{
                            reactiveTextToShow.smallLogError }}</span>
                        <div id="submit">
                            <a href="#"
                                class="flex w-full h-10 border-none rounded-md bg-red-200 hover:bg-red-400 justify-center items-center hover:text-red-300">Sign
                                In</a>
                        </div>
                    </div>

                    <div class="flex w-full h-12">
                        <div class="flex w-full h-1/2 mr-auto my-auto text-xs">
                            <div class="flex h-1/2 mr-auto my-auto text-xs ">
                                <span>Or sign in with</span>
                            </div>
                            <div class="flex w-1/4 ml-auto items-center justify-between">
                                <a href="#"
                                    class="flex w-6 h-6 mx-auto border-[1px] border-black rounded-full items-center justify-center">
                                    <svg class="flex mx-auto my-auto items-center justify-center"
                                        xmlns="http://www.w3.org/2000/svg" height="1em"
                                        viewBox="0 0 488 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                        <path
                                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                    </svg>
                                </a>
                                <a href="#"
                                    class="flex w-6 h-6 mx-auto border-[1px] border-black rounded-full items-center justify-center">
                                    <svg class="flex mx-auto my-auto items-center justify-center"
                                        xmlns="http://www.w3.org/2000/svg" height="1em"
                                        viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                        <path
                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </div>

    </div>
</template>



<style lang="scss" scoped></style>