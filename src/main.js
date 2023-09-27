import { createApp } from 'vue'
import './assets/tailwind.css' 
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons'
import {gsap} from 'gsap'
import {registerLicense} from '@syncfusion/ej2-base'
import axios from 'axios'

registerLicense()
// library.add(fas);

axios.defaults.baseURL = '//localhost:8000';
const app = createApp(App)
app.component('fa',FontAwesomeIcon)
app.use(router, axios)
app.mount('#app')