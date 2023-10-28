import { createApp } from 'vue'
import './assets/tailwind.css' 
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {gsap} from 'gsap'
import {registerLicense} from '@syncfusion/ej2-base'
import axios from 'axios'
import store from './redux/store'

registerLicense()
// library.add(fas);

axios.defaults.baseURL = '//localhost:8000';
const app = createApp(App)
app.component('fa',FontAwesomeIcon)
app.use(router)
app.use(store)
app.mount('#app')