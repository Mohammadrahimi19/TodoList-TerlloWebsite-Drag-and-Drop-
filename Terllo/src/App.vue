<script setup>
import LeftMenu from "@/components/LeftRIghtMenus/LeftMneu.vue";
import Seccend_Menu from "./components/Seccend_Menu/Seccend_Menu.vue";
import { ChangeColorBackGround } from "./Stores/Stores";
import DragAndDrop_Main from "./components/Main/DragAndDrop_Main.vue";
import { defineAsyncComponent, watchEffect, ref } from "vue";
import loadingHome from "./components/loading/loadingHome.vue";


const AsyncNavbar = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    resolve(import("@/components/Navbar/Nav_bar.vue"));
  });
});
let backgound = ref("");
watchEffect(() => {
  backgound.value = ChangeColorBackGround().color;
});

let loading = ref(false);
setTimeout(() => {
  loading.value = true;
}, 1000);
</script>

<template> 
  <AsyncNavbar class="z-40 relative" :class="backgound" />
  <main class="flex overflow-hidden " :class="backgound">
    <LeftMenu class="relative z-30 drop-shadow-lg" :class="backgound" />
    <transition name="fadeNew">
      <div v-if="loading" class="flex flex-col w-full">
        <Seccend_Menu class="relative z-20" :class="backgound" />
        <DragAndDrop_Main class="relative z-0 overflow-x-auto h-screen" />
      </div>
      <loadingHome v-else class="absolute top-20 left-10" />
    </transition>
  </main>
</template>

<style >
</style>
