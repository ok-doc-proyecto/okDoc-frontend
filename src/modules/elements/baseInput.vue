<script setup>
import { ref } from 'vue';

const props = defineProps({
  sendInput: {
    type: Boolean,
    required: true,
    default: false,
  },
})
const emit = defineEmits(['addFilter','sendQuery','bringValueToParent'])

const inputValue = ref('');

const newQuery = () => {

  if (props.sendInput) {
    emit('sendQuery')
  }
  else if(props.sendFilter){
    emit('addFilter')
  } 
  else{
    console.log('sendInput is false');
  }


}

</script>

<template>
  <input 
    name="input" 
    class="focus:outline-none" 
    v-model="inputValue"
    @keydown.enter="newQuery" />
</template>

<style></style>