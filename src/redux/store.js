import {createStore} from 'vuex';
import {ref} from 'vue';

const store = createStore({
    state:{
        loggedIn:ref(false),
        userInfo:{},
    },
    mutations:{
        logIn:(state,res)=>{
            state.loggedIn = true
            state.userInfo=res
        }
    },
    actions:{

    },
    getters:{

    }
})

export default store;