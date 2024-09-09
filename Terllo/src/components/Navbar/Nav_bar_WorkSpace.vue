<template >
  <div class="flex flex-col  rounded-md bg-white   shadow-lg  font-serif  left-1  w-96 z-40  top-0   ">
    <div class="flex justify-between items-center px-1 py-5">
        <button @click="emit('back',null )" type="button" class="hover:bg-slate-100 rounded-md px-2 py-1"><span class="fas fa-angle-left"></span></button>
        <p  class="text-md font-bold">WorkSpace</p>
        <button
          type="button "
          class="hover:bg-slate-100 rounded-md px-2 py-1"
          @click="emit('exit',null)"
        >
          <span class="fas fa-xmark"></span>
        </button>
      </div>
    <div class="Current Workspace w-full flex flex-col gap-5 p-5 ">
        <p class="text-sm ">Current Workspace</p>
        <div class="flex items-center gap-5 text-sm">
            <p class="px-4 py-2 rounded-md bg-green-600">T</p>
            <p>Terllo WorkSpace</p>
        </div>
    </div>
    <hr>
    <div class="Your Workspaces w-full flex gap-5 flex-col p-5  ">
        <p class="text-sm">your Workspace</p>
        <div class="flex text-sm items-center gap-5 cursor-pointer py-3  rounded-md hover:bg-slate-100 ">
            <p class="px-4 py-2 rounded-md bg-green-600">T</p>
            <p>Terllo WorkSpace</p>
        </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
let emit =defineEmits(['back','exit'])

</script>

<style>

</style>