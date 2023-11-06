<script setup>
import baseInput from '../elements/baseInput.vue'
import {login,userValidation} from '../../services/authService'
import { ref, onMounted, reactive, inject } from 'vue';
import { useStore, mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import users from '../../global-functions/userObjectsErase'

const store = useStore()


const emit = defineEmits(['closeLogin'])

const reactiveTextToShow = {
    hideText: true,
    smallSignIn: 'Sign In',
    bigSignIn: ' Sign In to okDoc',
    smallForgot: 'Forgot',
    bigForgot: 'Forgot Password',
    bigLogError: 'Please, enter valid credentials',
    smallLogError: 'Invalid credentials',
    smallInWith: 'Sign in with',
    bigInWith: 'Or sign in with'
}
const closeLoginTemplate = (event) => {
    const loginArea = document.getElementById('loginArea');
    if (!loginArea.contains(event.target)) {
        emit('closeLogin')
    }
}

const formData = {
    user: ref(''),
    password: ref(''),
    passwordVisibility: ref(false),
}
const handleLoginSubmit = (e) => {
    e.preventDefault();
    const introducedInfo = {
        user: formData.user.value,
        password:formData.password.value
    }
    const jsonData = JSON.stringify(introducedInfo);
    const serverResponse = userValidation(jsonData)

    if (serverResponse.valid === true ){
        console.log(serverResponse)
        approveLogin(serverResponse.data)
    } else{
        console.log(serverResponse.message)
    }

    formData.user.value = '';
    formData.password.value = '';
}

const approveLogin = (e) => {
    store.commit('logIn', e)
    emit('closeLogin')
}


</script>

<template>
    <div @click.stop="closeLoginTemplate" @keydown.esc="logIn = !logIn">
        <div class="flex w-full h-full items-center justify-center">
            <section id="loginArea" class="flex srelative sw-80 bg-white py-5 pl-7 shadow-lg shadow-black rounded-3xl">
                <div id="inputList" class="flex flex-col items-center w-60 h-full rounded-3xl mx-auto box-border">

                    <h1 class="w-full text-center pb-4">okDoc</h1>
                    <form @submit="handleLoginSubmit">

                        <label>
                            User
                            <input name="email" type="email"
                                class="flex flex-col w-full h-9 mb-4 opacity-80 mx-auto border-[2px] border-black rounded-lg focus:outline-none"
                                placeholder="Email" v-model="formData.user.value" required />
                        </label>

                        <div class="flex">
                            <label>
                                Password
                                <div class="flex w-full h-9 ">
                                    <div class="flex w-full h-full border-[1px] border-black rounded-lg">
                                        <input name="password"
                                            :type="formData.passwordVisibility.value ? 'text' : 'password'"
                                            class="flex w-full h-full opacity-80 rounded-lg px-2 focus:outline-none"
                                            placeholder="Password" v-model="formData.password.value" required />
                                        <a href="#" class="flex w-20 h-full items-center justify-center hover:text-red-300">
                                            Forgot
                                        </a>
                                    </div>
                                </div>
                            </label>
                        </div>

                        <span :class="{ invisible: reactiveTextToShow.hideText }"
                            class="flex h-10 w-full items-center justify-content mx-auto my-auto text-red-500 text-xs">{{
                                reactiveTextToShow.smallLogError }}</span>
                        <input type="submit" value="Sign In"
                            class="flex w-full h-10 border-none rounded-md opacity-80 bg-red-200 hover:opacity-100 justify-center items-center" />
                    </form>

                    <div class="flex w-full h-12">
                        <div class="flex w-full h-1/2 mr-auto my-auto text-xs">
                            <div class="flex h-1/2 mr-auto my-auto text-xs ">
                                <a class="pointer text-base hover:text-red-300" href="#">Sign Up</a>
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
                                <a href="#" id="passwordField"
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
                <div class=" w-8">
                    <button id="showPassword-button" @mousedown="formData.passwordVisibility.value = true"
                        @mouseup="formData.passwordVisibility.value = false"
                        class="flex cursor-default w-full justify-center align-middle">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-6 mt-[147px] mx-auto transition-opacity duration-300"
                            :class="formData.passwordVisibility.value == true ? 'opacity-100' : 'opacity-50'">

                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>

                    <!-- <a href="#"
                        class="flex h-5 w-1 mt-[147px] items-center justify-center border-b-[1px] border-t-[1px] border-r-[1px] border-black rounded-br-md rounded-tr-md box-border overflow-hidden hover:w-6 transition-all duration-200">
                        
                    </a> -->
                </div>
            </section>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.invisible {
    visibility: hidden
}
</style>