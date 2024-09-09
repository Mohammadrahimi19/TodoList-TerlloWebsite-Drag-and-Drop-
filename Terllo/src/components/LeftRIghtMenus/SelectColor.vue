<template>
  <div class=" absolute top-0 w-full">
    <div class="  right-2 bg-white h-full">
      <div class="flex justify-between px-5 items-center text-lg py-5">
        <span @click="back()" class="fas fa-angle-left cursor-pointer"></span>
        <p>ChangeBackground</p>
        <span @click="closeMenu.CloseMenu(true)"  class="fas fa-xmark cursor-pointer"></span>
      </div>
      <hr />
      <div class="grid grid-cols-2  gap-5 px-5 py-2  ">
        <div v-for="color in colors" :key="color" :class="[color ]"  @click="SetColor(color)"  class="w-32 h-32 p-3 cursor-pointer hover:opacity-75     rounded-lg">
        </div>
      </div>
      <hr />
      <div class="grid grid-cols-4  gap-5 px-5 py-2  ">
        <div v-for="color in colors" :key="color" :class="[color ]"  @click="SetColor(color)" class="w-10 h-10 p-3 cursor-pointer hover:opacity-75     rounded-lg">
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ChangeColorBackGround,CloseMenu,BackGroundImage } from '@/Stores/Stores.js';
import { ref } from 'vue';
let BackgroundColor = ChangeColorBackGround()
let closeMenu = CloseMenu()
let BackGroundImage2 = ref(BackGroundImage().SetBackGround)
let SetColor = (NewColor)=>{
  BackgroundColor.setNewColor(NewColor)  
  BackGroundImage2.value({})
}


import { reactive ,defineEmits} from 'vue';
let emit = defineEmits(['return'])
let back= ()=>{
    emit('return',null)
}


let colors = reactive(['bg-red-300','bg-red-500','bg-blue-500','bg-yellow-200','bg-red-300','bg-red-500','bg-blue-500','bg-yellow-200'])
</script>

<style>
</style>