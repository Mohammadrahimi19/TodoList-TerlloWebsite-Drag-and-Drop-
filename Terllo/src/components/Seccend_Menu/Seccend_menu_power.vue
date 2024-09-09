<template>
  <div>
    <div
      class="absolute right-32 md:right-3 sm:right-3 xs:right-2  xl:top-16  lg:top-24  md:top-24 sm:top-24 xs:top-24  flex flex-col  bg-white rounded-md text-sm gap-5 sm:w-1/4 xs:w-1/2 lg:w-1/4 md:w-1/4">
      <div class="flex justify-between items-center px-5 py-4">
        <div></div>
        <p class="text-md font-bold">Power-Ups</p>
        <button
          type="button "
          class="hover:bg-slate-100 rounded-md px-2 py-1"
          @click="exit()"
        >
          <span class="fas fa-xmark"></span>
        </button>
      </div>
      <div class="w-full flex gap-5 py-2  items-center flex-col p-3">
        <img class="w-1/2 h-1/2" src="../../assets/image/Power_Ups.png" alt="PowerUps">
        <p class="text-center ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus veritatis alias, corporis quis cum nulla harum quos dolor tempore iste recusandae volu</p>
        <button class="w-full py-2 px-5 bg-blue-600 text-white mb-2  rounded-lg">Add Power_Ups</button>
      </div>
  
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["exit"]);
let exit = () => {
  emit("exit", null);
};
</script>

<style>
</style>