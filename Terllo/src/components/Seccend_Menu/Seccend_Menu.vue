<template>
  <div
    ref="FirstgroupStage"
    class="flex justify-between w-full border-2 py-1 lg:px-5 md:px-2 h-max items-center text-xs flex-wrap flex-row z-0"
  >
    <div class="flex flex-row items-center gap-4 justify-start ">
      <div>
        <input
          type="text"
          name="Name"
          id="Name"
          v-model="Name"
          :size="Name.length"
          class="bg-transparent cursor-pointer rounded p-1 ml-3 indent-px hover:bg-stone-300"
        />
      </div>
      <div class="hover:bg-slate-100 rounded-md">
        <span
          @mouseenter="StarStatus = !StarStatus"
          @mouseout="StarStatus = !StarStatus"
          @click="StarStatus = !StarStatus"
          :class="[StarStatus ? 'fa-regular' : 'fas ']"
          class="cursor-pointer fa-star p-1"
        ></span>
      </div>

      <button
        v-for="item in firstGroup"
        :key="item.Name"
        :title="item.title"
        type="button"
        :class="item.class"
        @click="setComponenet(item.component)"
      >
        <span :class="item.span"></span>
        <p class="lg:block md:hidden xs:hidden sm:hidden 2xs:hidden">{{ item.Name }}</p>
      </button>
      <transition-group name="fadeNew">
        <component
         class="z-50"
          @exit="(n) => (activeComponent = n)"
          v-if="activeComponent != null"
          :is="activeComponent"
        >
        </component>
      </transition-group>
    </div>

    <!--  -->
    <div
      class="flex items-center gap-2 justify-end lg:w-max md:w-max sm:w-max  xs:w-full lg:mr-5  md:mr-10 sm:mr-12 xs:mr-12 2xs:mr-12  2xs:w-full  "
    >
      <button
        v-for="button in buttons"
        @click="setComponenet(button.component)"
        :key="button.title"
        :title="button.title"
        class="flex items-center gap-2 p-2  rounded-md hover:bg-slate-100"
      >
        <span :class="button.span"></span>
        <p class="lg:block md:hidden xs:hidden sm:hidden  2xs:hidden">{{ button.Name }}</p>
      </button>

      <div
        @click="setComponenet(Seccend_menu_MR)"
        class="w-8 h-8 pt-1 text-center hover:bg-slate-50 cursor-pointer text-sm rounded-full bg-blue-400"
      >
        MR
      </div>
      <button
        title="Share"
        class="flex items-center gap-2 p-2 rounded-md bg-slate-100"
      >
        <span class="fas fa-user-plus"></span>
        <p class="lg:block md:hidden xs:hidden sm:hidden 2xs:hidden">Share</p>
      </button>
      <div @click="activeComponent = RightMenu">
        <span
          class="ml-auto hover:bg-slate-100 cursor-pointer p-3 rounded-lg fas fa-ellipsis"
        >
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watchEffect } from "vue";
import Seccend_Menu_Workspace from "./Seccend_Menu_Workspace.vue";
import Seccend_menu_Custumize from "./Seccend_menu_Custumize.vue";
import Seccend_menu_power from "./Seccend_menu_power.vue";
import Seccend_menu_Animation from "./Seccend_menu_Animation.vue";
import Seccend_Menu_Filter from "./Seccend_Menu_Filter.vue";
import Seccend_menu_MR from "./Seccend_menu_MR.vue";
import RightMenu from "../LeftRIghtMenus/RightMenu.vue";
let Name = ref("type");
let StarStatus = ref(false);
let activeComponent = ref(null);
let FirstgroupStage = ref(null);
let firstGroup = reactive([
  {
    Name: "Change Visiblity",
    title: "Custumize Views",
    span: "fas fa-user-group",
    component: Seccend_Menu_Workspace,
    class: "flex items-center gap-2 p-2 rounded-md hover:bg-slate-100",
  },
  {
    Name: "Board",
    title: "Board",
    span: "fas fa-chart-simple",
    component: null,
    class: "flex gap-2 p-2 bg-slate-100 items-center rounded-md",
  },
  {
    Name: "",
    title: "Customize View",
    span: "fas fa-angle-down",
    component: Seccend_menu_Custumize,
    class: "px-3 py-2 rounded-md hover:bg-slate-100",
  },
]);
let buttons = reactive([
  {
    Name: "Power-Ups",
    title: "Power-Ups",
    span: "fas fa-rocket",
    component: Seccend_menu_power,
  },
  {
    Name: "Animation",
    title: "Animation",
    span: "fas fa-bolt-lightning",
    component: Seccend_menu_Animation,
  },
  {
    Name: "Filter",
    title: "Filter",
    span: "fas fa-filter",
    component: Seccend_Menu_Filter,
  },
]);
let setComponenet = (component) => {
  activeComponent.value = component;

  document.addEventListener("click", (event) => {
    if (!FirstgroupStage.value.contains(event.target)) {
      activeComponent.value = null;
    }
  });
};




import { CloseMenu } from "@/Stores/Stores";
let closeMenu = CloseMenu();

watchEffect(() => {
  if (closeMenu.Status === true) {
    activeComponent.value = null;
    console.log(activeComponent.value);
    closeMenu.CloseMenu(false);
  }
});
</script>

<style scoped>
.fadeNew-leave-active {
  transition: all 0.5s;
}
.fadeNew-enter-active {
  transition: all 0.5s;
}
.fadeNew-leave-from {
  opacity: 1;
}
.fadeNew-leave-to {
  opacity: 0;
}

.fadeNew-enter-to {
  opacity: 1;
}
.fadeNew-enter-from {
  opacity: 0;
}
</style>