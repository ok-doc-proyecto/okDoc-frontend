<script setup>
    import { ref, defineProps } from 'vue';

    const props = defineProps({
        items:[]
    })
    let dropDownVisible = ref(false)
    //  let items = ref([
    //      { name: , link: "#", selected: "true" },
    //      { name: "Item 2", link: "#", selected: "false" },
    //      { name: "Item 3", link: "#", selected: "false" },
    //  ]);

    let selected = ref("Item 1")
;
</script>

<template>
    <div class="">
        <div class="flex w-20 h-full border-l-0 ">
            <button class="flex w-full h-full hover:text-blue-300 justify-center items-center border-nones"
                @click="dropDownVisible = !dropDownVisible">
                {{ selected }}
            </button>

            <div v-show="dropDownVisible" class="absolute w-[78px] top-14 mx-auto border-none items-center bg-white">
                <a v-for="item in props.items" :href="item.link" @click="selected = item.name, dropDownVisible = !dropDownVisible"
                    class="flex w-full justify-center hover:text-blue-300 mx-auto">
                    {{ item.name }}
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>