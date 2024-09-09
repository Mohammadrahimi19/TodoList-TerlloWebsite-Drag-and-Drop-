<template>
  <div class="absolute right-16 xl:top-16  bg-white  lg:top-24 md:top-24 sm:top-24 xs:top-24  w-96   ">

    <div class="realtive bg-red-100 rounded-md flex flex-col gap-10 ">
      <div class="items-end  w-full bg-blue-800 h-24 rounded-t-lg flex flex-col  pb-3 pr-8 justify-end  ">
        <div class="text-white  text-sm">
          <p>Mohamamd Rahimi</p>
          <p>MohammadRahimi@gmail.com</p>
        </div>  
      </div>
  
      <div>
        <div class="w-32 h-32 rounded-full text-center pt-10 text-5xl  border-yellow-500 border-2 top-8 left-6  bg-blue-400 absolute">MR</div>
        <span class="fas fa-xmark absolute right-2 top-2 text-white cursor-pointer" @click="exit()"></span>
      </div>
      <div class="flex flex-col gap-2">
        <div class="hover:bg-slate-100 cursor-pointer ">
          <p class="px-5 py-2">Edit Profile info</p>
        </div>
        <hr>
        <div class="hover:bg-slate-100 cursor-pointer ">
          <p class="px-5 py-2">View members Board activity </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["exit"]);
let exit = () => {
  emit("exit", null);
};

</script>

<style>

</style>3