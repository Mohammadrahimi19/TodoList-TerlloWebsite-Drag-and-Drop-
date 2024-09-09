<template>
  <div class="p-2 flex gap-3 flex-col absolute bg-slate-200 rounded-md top-20 -right-64">
    <div class="flex justify-between  items-center ">
        <div></div>
        <p class="text-md w-full text-center pl-5  ">Cart Templates</p>
        <button
          type="button "
          class="rounded-md  py-1"
          @click="emit('exit',false)"
        >
          <span class="fas fa-xmark hover:bg-slate-300 rounded-lg p-2"></span>
        </button>
    </div>
    <div class="text-sm px-2 text-center">
        <p>You don’t have any templates</p>
        <p>Create a template to make copying cards easy</p>
    </div>
    <div class="w-full">
        <button class="w-full px-4 py-2 text-white hover:bg-blue-400 bg-blue-600 rounded-md" type="button">Create from Templates</button>
    </div>

  </div>
</template>

<script setup>

import { defineEmits } from "vue";
const emit = defineEmits(["exit"]);

</script>

<style>

</style>