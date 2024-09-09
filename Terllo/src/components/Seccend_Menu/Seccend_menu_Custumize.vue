<template>
  <div>
    <div
      class="absolute lg:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full   xl:w-1/3  left-32 md:left-3 sm:left-0 xs:left-0 xl:top-16  lg:top-24 md:top-24 sm:top-24 xs:top-24  flex flex-col bg-white rounded-md text-sm "
    >
      <div class="flex justify-between items-center px-5 py-4">
        <div></div>
        <p class="text-xl font-bold">Upgrade for Views</p>
        <button
          type="button "
          class="hover:bg-slate-100 rounded-md px-2 py-1"
          @click="exit()"
        >
          <span class="fas fa-xmark"></span>
        </button>
      </div>
      <div class="px-5 py-2 cursor-not-allowed" disabled>
        <ul class="flex flex-col">
          <li class="flex">
            <div class="flex items-center gap-5 p-2 w-full">
              <span class="fas fa-braille"></span>
              <input disabled type="checkbox" name="chackbox" />
              <label disabled class="flex items-center gap-2" for="checkbox">
                <span class="fas fa-chart-simple"></span>
                <p>Board</p>
              </label>
            </div>
          </li>
          <li v-for="item in SubMenu" :key="item.Name">
            <div class="flex items-center gap-5 opacity-50 p-2 w-full">
              <span class="fas fa-braille"></span>
              <input disabled type="checkbox" name="chackbox" />
              <label disabled class="flex items-center gap-2" for="checkbox">
                <span :class="item.icon"></span>
                <p>{{ item.name }}</p>
              </label>
              <span class="fas fa-lock ml-auto"></span>
            </div>
          </li>
        </ul>
      </div>
      <div class="flex flex-col justify-between p-4 h-40">
        <p class="text-xl">See your work in new ways</p>
        <p class="mx-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis
          exercitationem nobis minus cupiditate dolores architecto omnis ducimus
          maiores tempore similiq
        </p>
      </div>
      <div class="px-4 flex flex-col items-center py-2 gap-3">
        <button
          type="button"
          class="w-full bg-blue-900 p-2 rounded-lg text-white"
        >
          Start free trial
        </button>
        <button type="button" class="px-4 hover:underline">
          Learn more about Trello Premium
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const SubMenu = reactive([
  {
    icon: "fas fa-table",
    name: "Table",
  },
  {
    icon: "fas fa-calendar-days",
    name: "Calender",
  },
  {
    icon: "fas fa-timeline",
    name: "TimeLine",
  },
  {
    icon: "fas fa-dungeon",
    name: "Dashboard",
  },
  {
    icon: "fas fa-map-location-dot",
    name: "Map",
  },
]);
const emit = defineEmits(["exit"]);
let exit = () => {
  emit("exit", null);
};
</script>

<style>
</style>