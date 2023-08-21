<script setup>
  import {ref} from 'vue';

  const props = defineProps({
    sendInput:{
      type: Boolean,
      required: true,
      default:false,
    } 
  })
  const emit = defineEmits(['sendQuery'])
  
  const query = ref('');

  const newQuery = (inputValue) =>{
        
        if (props.sendInput){
          emit('sendQuery',query.value)
          query.value ='';
        } 
        else {
          console.log('sendInput is false');
        }
      }

</script>

<template>
    <input 
      name="input"
      class="focus:outline-none"
      v-model="query"
      @keydown.enter="newQuery"/>
</template>

<style>
</style>