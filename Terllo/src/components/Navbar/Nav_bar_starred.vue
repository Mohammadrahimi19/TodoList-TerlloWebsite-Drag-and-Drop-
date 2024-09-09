<template >
  <div class=" bg-white rounded-lg z-40 lg:left-52 md:left-0  sm:left-0    top-0  ">
    <div class="flex justify-between items-center px-1 py-5">
        <button @click="emit('back',null )" type="button" class="hover:bg-slate-100 rounded-md px-2 py-1"><span class="fas fa-angle-left"></span></button>
        <p  class="text-md font-bold">Starrdd</p>
        <button
          type="button "
          class="hover:bg-slate-100 rounded-md px-2 py-1"
          @click="emit('exit',null)"
        >
          <span class="fas fa-xmark"></span>
        </button>
      </div>
    <div class="flex p-2 items-center gap-4 hover:bg-slate-100 rounded-lg cursor-pointer">
        <div class="w-10 h-10 bg-blue-600 rounded-lg "></div>
        <div class="flex flex-col text-sm">
            <p>reza</p>
            <p>Terllo spacing</p>
        </div>
        <div class="ml-auto">
            <span class="fas fa-star text-yellow-500"></span>
        </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['back','exit'])
</script>

<style>

</style>