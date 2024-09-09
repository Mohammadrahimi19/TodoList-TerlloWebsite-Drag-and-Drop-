<template>
  <div
  
    class="absolute left-32 md:left-3 sm:left-0 xs:left-0 xl:top-16  lg:top-24 md:top-24 sm:top-24 xs:top-24  flex flex-col  bg-white rounded-md text-sm  lg:w-1/3 md:1/3 sm:w-1/3 xs:w-full py-2"
  >
    <div class="flex justify-between items-center px-5 py-4">
      <div></div>
      <p class="text-xl font-bold">Change Visiblity</p>
      <button
        type="button "
        class="hover:bg-slate-100 rounded-md px-2 py-1"
        @click="exit()"
      >
        <span class="fas fa-xmark"></span>
      </button>
    </div>
    <div class="cursor-pointer hover:bg-slate-100 px-5 py-2">
      <div class="flex gap-2 items-center">
        <span class="fas fa-lock text-red-950"></span>
        <p>privte</p>
      </div>
      <div>
        <p>
          s magnam reprehenderit, minima atque nemo temporibus commodi quia
          error obcaecati esse molestias nihil velit fuga facere rem unde.
        </p>
      </div>
    </div>
    <div class="cursor-pointer hover:bg-slate-100 px-5 py-2">
      <div class="flex gap-2 items-center">
        <span class="fas fa-user-group"></span>
        <p>WorkSpace</p>
      </div>
      <div>
        <p>
          aspernatur sed dolorem laboriosam quo minus vero officiis modi
          inventore, illo velit molestiae culpa voluptatem. Saepe?
        </p>
      </div>
    </div>
    <div
      class=" opacity-25  px-5 py-2"
      
    >
      <div class="flex gap-2 items-center">
        <span class="fas fa-briefcase"></span>
        <p>Organization</p>
      </div>
      <div>
        <p>
          m maxime dolorem, dicta ullam placeat quam officiis. Asperiores amet
          id quo ullam consequuntur dignissimos repellat adipisci.
        </p>
      </div>
    </div>
    <div class="cursor-pointer hover:bg-slate-100 px-5 py-2">
      <div class="flex gap-2 items-center">
        <span class="fas fa-globe"></span>
        <p>Public</p>
      </div>
      <div>
        <p>
          am! Voluptatibus unde tempora nesciunt esse amet blanditiis molestiae
          laboriosam odit reprehenderit a? Similique quaerat totam harum sunt.
        </p>
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
</style>