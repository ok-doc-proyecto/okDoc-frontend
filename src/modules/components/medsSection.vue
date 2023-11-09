<script setup>
import { onBeforeMount,onMounted, ref } from 'vue';
import medComponent from '../components/medComponent.vue'
import medDetail from '../components/medDetail.vue'
import axios from 'axios'
import {gsap} from 'gsap';
let allDocs = ref([]);

const emits = defineEmits();

let actualDocInfo;

const getAllDocs = async () => {

    try{

        let response = await axios.get('api/all-docs/');
        allDocs.value = response.data
        return allDocs.value
    }catch(err){
        throw err
    }
}

onBeforeMount(
    async () => {
        try {
            allDocs = await getAllDocs()
        }catch(e){
            console.log(e)
        }
    }
)

// const medComponentTimeline = gsap.timeline({});
//     medComponentTimeline.to('.medComponent',{opacity:0})
// const playComponentTimeline = () =>{
//    // console.log("componentTimeLine called")
//     medComponentTimeline.play();
// }
// const temporalTL = () =>{

// }

let anyComponentClicked = ref(false)
</script>

<template>
    <div>
        <transition name="fade">
            <section
            class="flex w-full flex-col h-full mb-4 gap-2"
            v-if="!anyComponentClicked">
                <medComponent 
                v-for="item in allDocs" 
                :key="item.id" 
                :medico="item" 
                :rating="item.average_rating" 
                class="medComponent shadow-lg inset-0"
                @click="anyComponentClicked = !anyComponentClicked; actualDocInfo = item;console.log(actualDocInfo) "
                >
                </medComponent>            
            </section>
        </transition>
        <transition name="fade">
            <section>
                <medDetail 
                    class="w-full h-full bg-transparent"
                    v-if="anyComponentClicked"
                    :medInfo="actualDocInfo"
                    @close-med-detail="anyComponentClicked = !anyComponentClicked">
                </medDetail>
            </section>
        </transition>
    </div>
</template>



<style lang="scss" scoped>

::-webkit-scrollbar {
    width: 3px;
    height: 10px
  }

::-webkit-scrollbar-track{
    max-height: 20px;
    box-shadow: inset 0px 0px 50px 100px rgba(255,255,255,0.2);
}

::-webkit-scrollbar-thumb{
    background-color: rgb(69, 105, 154);
    border-radius: 5;
}
</style>