<template>
  <div  class="flex flex-col bg-white rounded-lg py-8 text-sm w-96">
    <div>
      <p class="text-sm px-5 text-slate-500 font-bold">ACCOUNT</p>
    </div>
    <div
      class="flex gap-3 items-center cursor-pointer hover:bg-slate-200 px-10 py-3"
    >
      <div class="w-10 h-10 rounded-full bg-fuchsia-700 text-center pt-2">
        MR
      </div>
      <div class="flex flex-col px-2">
        <p>Mohammad Rahimi</p>
        <p class="text-sm">MohammadRahimi@gmailcom</p>
      </div> 
    </div>
    <div class="cursor-pointer hover:bg-slate-200 px-10 py-3">
      <p>Switch</p>
    </div>
    <div
      class="flex justify-between cursor-pointer hover:bg-slate-200 px-10 py-3"
    >
      <p>Mangement Account</p>
      <span class="fas fa-arrow-up-right-from-square"></span>
    </div>
    <hr />
    <!-- //  -->
    <div class="flex flex-col">
      <ul class="flex flex-col ">
        <li class="text-sm font-bold px-5 text-slate-500">Terllo</li>
        <li
          class="p-3 cursor-pointer hover:bg-slate-300 px-10"
          v-for="item of MenuAccount"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
   
    </div>
    <!--  -->
    <hr>
    <div class="flex items-center p-5 gap-3 hover:bg-slate-300 cursor-pointer">
       <span class="fas fa-user-group"></span>
       <p>Create WorkSpace</p>
    </div>
    <hr>
    <!--  -->
    <hr>
    <div class="flex flex-col">
        <p class="px-10 py-3 hover:bg-slate-200 cursor-pointer">Help</p>
        <p class="px-10 py-3 hover:bg-slate-200 cursor-pointer">ShortCut</p>
    </div>
    <hr>
    <!--  -->
    <div>
        <p class="px-10 py-5 hover:bg-slate-200 cursor-pointer">logOut</p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const MenuAccount = reactive([
  "profile and visiblity",
  "Activity",
  "Cards",
  "Setting",
  "Theme",
]);



</script>

<style>
</style>