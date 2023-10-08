<script setup>


    const emit = defineEmits(['closeMedDetail'])
    
    const closeMedDetail=()=>{
        emit('closeMedDetail')
    }

    const props = defineProps({
    medInfo: {},
})
</script>

<template>
    <div class="flex flex-col">
        <a 
            class="w-full h-5 mt-2 mb-10 cursor-pointer"
            @click="closeMedDetail">
            Back
        </a>

        <div class="flex flex-col align-middle w-full h-full">
            <h1 class="align-middle"> {{ medInfo.first_name }} {{ medInfo.last_name }}</h1>
            {{ medInfo }}
        </div>

    </div>
</template>

<style lang="scss" scoped>

</style>