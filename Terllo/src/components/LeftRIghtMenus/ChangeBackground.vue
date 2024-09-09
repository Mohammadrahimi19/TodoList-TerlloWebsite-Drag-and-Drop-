<template>
  <div class="absolute right-10 bg-white h-full 2xs:w-72 lg:w-max md:w-fit sm:w-fit xs:w-fit ">
    <div class="flex justify-between px-5 items-center text-lg py-5">
      <span @click="back()" class="fas fa-angle-left cursor-pointer"></span>
      <p>ChangeBackground</p>
      <span @click="exit()" class="fas fa-xmark cursor-pointer"></span>
    </div>
    <hr />
    <div class="flex gap-3 p-3">
      <div
        class="flex flex-col gap-2 items-center cursor-pointer hover:scale-90 transition-all"
      >
        <img
          class="w-48 h-32 rounded-lg"
          src="../../assets/image/natuer.jpg"
          alt=""
        />
        <p>image</p>
      </div>
      <div
        @click="activeComponent = SelectColor"
        class="flex flex-col gap-2 items-center cursor-pointer hover:scale-90 transition-all"
      >
        <img
          class="w-48 h-32 rounded-lg"
          src="../../assets/image/cover.jpg"
          alt=""
        />
        <p>color</p>
      </div>
    </div>
    <hr />
    <div class="p-4 flex flex-col gap-2">
      <p class="text-xl">Custom</p>
      <form
        action=""
        @submit.prevent=""
        class="rounded-md flex w-48 bg-slate-200 cursor-pointer hover:bg-slate-400"
      >
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <span class="fas fa-plus text-ellipsis"></span>
          </div>
          <input
            id="dropzone-file"
            @change="ChangeImage()"
            type="file"
            class="hidden"
          />
        </label>
      </form>
    </div>
    <transition-group
      name="fadeNew"
      tag="div"
      v-if="ImageFiled"
      @after-enter="afterenter"
      class="w-full rounded-sm grid grid-cols-2 gap-2 px-5"
    >
      <img
        v-for="image in ImageFiled"
        :key="image"
        class="w-full rounded-lg border-2 h-full cursor-pointer"
        :src="image.Url"
        alt=""
        @click="setStyle(image)"
      />
    </transition-group>
    <transition-group name="fadeBackGround">
      <component
        v-if="activeComponent != null"
        @return="(n) => (activeComponent = n)"
        @exit="(x) => (activeComponent = x)"
        :is="activeComponent"
      ></component>
    </transition-group>
  </div>
</template>

<script setup>
import SelectColor from "./SelectColor.vue";
import { defineEmits, ref } from "vue";
import gsap from "gsap";
import { BackGroundImage, ChangeColorBackGround } from "../../Stores/Stores";
let ReciveColor = ChangeColorBackGround().setNewColor;

let ReciveImage = ref(BackGroundImage().SetBackGround);

let emit = defineEmits(["back"]);
let back = () => {
  emit("back", null);
};
let activeComponent = ref(null);
let exit = () => {
  emit("exit", null);
};

let ImageFiled = ref([]);
let ChangeImage = () => {
  let value = {
    Url: URL.createObjectURL(event.target.files[0]),
    name: event.target.files[0].name,
    size: "cover",
  };
  setStyle(value)
};


let setStyle = (value) => {

  let res = ImageFiled.value.find((item) => {
    return item.name === value.name;
  });

  if (!res) {
    ImageFiled.value.push(value);
  }
  ReciveImage.value(value);
  ReciveColor("bg-slate-300");
};

// animation
let afterenter = (el) => {
  gsap.to(el, {
    opacity: 1,
    x: 15,
  });
};
</script>

<style>
</style>