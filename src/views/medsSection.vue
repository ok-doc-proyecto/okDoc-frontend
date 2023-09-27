<script setup>
import { onMounted, ref } from 'vue';
import medComponent from '../components/medComponent.vue'
import axios from 'axios'

let allDocs = ref([]);

const emits = defineEmits();

const getAllDocs = async () => {

    try{

        let response = await axios.get('all-docs/');
        allDocs.value = response.data
        return allDocs.value
    }catch(err){
        throw err
        /*if(err.response){
          console.error('server responded with status', err.response.status);
          console.error('response data:', err.response.data);
        }else if(err.request){
            console.error('No response recieved', err.request)
        } else{
            console.error('Error setting up the request:',err.  message)
        }/*/
    }
}

onMounted(
    async () => {
        try {
            allDocs = await getAllDocs()
        }catch(e){
            console.log(e)
        }
    }
)
</script>

<template>
    <div class="flex flex-col mb-4">
        <medComponent v-for="item in allDocs" :medico="item" :key="item.id" :rating="item.average_rating" class=" mb-2 shadow-lg inset-0">
        </medComponent>
    </div>
</template>



<style lang="scss" scoped></style>