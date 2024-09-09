<template >
  <div class=" bg-white  rounded-md  top-0 z-40  w-full h-max lg:left-60 sm:left-0 xs:left-0 2xs:left-0 md:left-0">
    <div class="flex justify-between items-center px-1 py-5">
        <button @click="emit('back',null )" type="button" class="hover:bg-slate-100 rounded-md px-2 py-1"><span class="fas fa-angle-left"></span></button>
        <p  class="text-md font-bold">Templates</p>
        <button
          type="button "
          class="hover:bg-slate-100 rounded-md px-2 py-1"
          @click="emit('exit',null)"
        >
          <span class="fas fa-xmark"></span>
        </button>
      </div>
    <div class="w-full flex justify-between items-center py-2 px-5">
      <p class="text-sm ">Top to Tamplates</p>
      <span @click="angleStatus = !angleStatus" :class="angleStatus ?  'fas fa-angle-up': 'fas fa-angle-down'" class=" cursor-pointer p-2  hover:bg-slate-100 rounded-sm"></span>
    </div>
    <hr>
    <transition-group tag="ul" name="fade" class="flex flex-col gap-2  items-center py-2 px-5" v-if="angleStatus" >
      <li class=" w-full h-12 flex  gap-5 p-1 rounded-md cursor-pointer items-center hover:bg-slate-100" v-for="SubMenu of SubMenus" :key="SubMenu.Name">
        <img class=" w-20 rounded-md h-full" :src="SubMenu.src" >
        <p class="text-sm">{{ SubMenu.Name }}</p>

      </li>
    </transition-group>
    <hr>
    <div class="flex items-center gap-5 px-5 py-4">
      <span class="fas fa-images  text-blue-500 "></span>
      <p class="text-sm">See hundreds of templates<br>
         from the Trello community</p>
    </div>
    <div class="flex justify-center">
      <button class="w-full  text-sm  p-2 m-2  bg-slate-500 rounded hover:bg-slate-100 hover:text-slate-500 text-cyan-50 " type="button">ٍExplore</button>
    </div>
  </div>

</template>

<script setup>
import { reactive,ref } from 'vue';
import { defineEmits } from 'vue';
const emit = defineEmits(['back','exit'])
const recive_props = defineProps({
  DropDownValue: {
    type: Object,
    requried: true,
  },
});
const SubMenus = reactive(recive_props.DropDownValue);
console.log(SubMenus);

const angleStatus = ref(true)

</script>

<style>
</style>