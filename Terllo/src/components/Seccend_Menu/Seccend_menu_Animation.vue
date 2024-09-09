<template>
  <div>
    <div
    class="absolute right-32 md:right-3 sm:right-3 xs:right-2 xl:top-16  lg:top-24  md:top-24 sm:top-24 xs:top-24  flex flex-col bg-white  rounded-md text-sm  py-2"
  >
    <div class="flex justify-between items-center px-5 py-4">
      <div></div>
      <p class="text-xl ">Automation</p>
      <button
        type="button "
        class="hover:bg-slate-100 rounded-md px-2 py-1"
        @click="exit()"
      >
        <span class="fas fa-xmark"></span>
      </button>
    </div>
    <div v-for="item in AutomationMenu" :key="item.Name" class="cursor-pointer hover:bg-slate-100 px-5 py-2">
      <div class="flex gap-2 items-center">
        <span :class="item.Span"></span>
        <p class="text-lg">{{ item.Name }}</p>
      </div>
      <div>
        <p class="px-2 text-sm" >
          s magnam reprehenderit, minima atque nemo temporibus commodi quia
        </p>
      </div>
    </div>
  
    
  </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

 

const AutomationMenu = reactive([
    {
        Name:'Ruls',
        Span:'fas fa-book-atlas',
    },
    {
        Name:'Buttons',
        Span:'fab fa-cc-jcb',
    },
    {
        Name:'Email Reports',
        Span:'fas fa-envelope',
    },
    {
        Name:'send FeedBack',
        Span:'fas fa-comment',
    },

])


const emit = defineEmits(["exit"]);
let exit = () => {
  emit("exit", null);
};




</script>

<style>

</style>