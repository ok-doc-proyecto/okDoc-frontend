
<script setup>
    import baseInput from './baseInput.vue'
    import niceInput from './niceInput.vue'
    const emit = defineEmits(['delete-filter'])


    const props = defineProps({
        filterName: {
            type:String,
            required: true,
            default:'' 
        },
        /*isChecked:{
            type:Boolean,
            default:'false'
        }*/
})

    const deleteFilter = () => {
      emit('delete-filter', props.filterName);
    };

</script>

<template>        
        <label class="flex flex-col h-20 p-1 mb-6 border rounded-2xl ">
            <h1 class="my-auto mx-auto text-xl">{{filterName}}</h1>
            <div class=" filterSection flex justify-between h-8">
                <niceInput class=" my-auto mx-auto w-1/2 h-5"></niceInput>
                <span @click="deleteFilter" class="relative my-auto cursor-pointer mr-2 right-0">
                    Delete
                </span>
            </div>
            
            <!-- <baseInput class=" my-auto mx-auto w-1/2 h-5"></baseInput> -->
        </label>
</template>

<style lang="scss" scoped>
    .filterSection::before{
        content: '';
        
        background-color:rgba(255,255,255,0.5)
    }


</style>