<template>
  <div :class="ChangeColorBack"

    class="  h-[850px]  relative w-max text-black  "
  >
    <transition-group @before-enter="before" @enter="enter" mode="in-out" >
      <div v-if="OpenMenu"  class="flex flex-col h-full  overflow-x-auto  ">
        <div class="flex flex-row items-center gap-5 p-5">
          <div>
            <p class="w-8 h-8 rounded-lg text-center bg-slate-400">T</p>
          </div>
          <div class="flex flex-col text-sm  w-max">
            <p>Terllo WorkSpace</p>
            <p>Free</p>
          </div>
          <button
            @click="OpenMenu = !OpenMenu"
            type="button"
            class="px-2 py-1 rounded-lg ml-auto hover:bg-slate-600"
          >
            <span class="fas fa-angle-left"></span>
          </button>
        </div>
        <hr />
        <!--  -->
        <div class="flex flex-col text-sm gap-4 w-full">
          <div
            class="flex items-center gap-3 cursor-pointer hover:bg-slate-600 py-2 px-5 mt-2"
          >
            <span class="fas fa-border-top-left"></span>
            <p>Boards</p>
          </div>
          <div
            class="flex items-center gap-3 cursor-pointer hover:bg-slate-600 py-2 px-5"
          >
            <span class="fas fa-user"></span>
            <p>Members</p>
            <span class="fas fa-plus ml-auto"></span>
          </div>
          <div
            class="flex items-center gap-3 cursor-pointer hover:bg-slate-600 py-2 px-5"
          >
            <span class="fas fa-cog"></span>
            <p>setting</p>
            <span class="fas fa-angle-down ml-auto"></span>
          </div>
        </div>
        <div class="p-5">
          <p class="font-bold">WorkSpace</p>
        </div>
        <div class="group">
          <div class="flex justify-between item center p-3">
            <p class="px-3">Your Boards</p>
            <div class="flex">
              <div class="group-hover:block hidden">
                <span
                  class="ml-auto hover:bg-slate-600 cursor-pointer p-2 rounded-lg fas fa-ellipsis"
                ></span>
              </div>
              <span
                class="fas fa-plus ml-auto hover:bg-slate-600 cursor-pointer p-2 rounded-lg"
              ></span>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="flex group px-5 py-2 justify-between hover:bg-slate-600">
            <div class="flex gap-2 items-center">
                <div class="w-8 h-8 rounded-md border-2 " :class="ChangeColorBack" :style="backStyle"></div>
                <p>Name</p>
              </div>
              <div class="flex gap-3 group items-center">
                  <div class="group-hover:block hidden">
                      <span
                      class="ml-auto hover:bg-slate-600 cursor-pointer p-2 rounded-lg fas fa-ellipsis"
                      >
                  </span>
              </div>
              
              <span
              @mouseenter="StarStatus = !StarStatus"
              @mouseout="StarStatus = !StarStatus"
              @click="StarStatus = !StarStatus"
              :class="[StarStatus ? 'fa-regular' : 'fas ']"
              class="cursor-pointer fa-star"
            ></span>
          </div>
        </div>
        <!--  -->
        <div class="w-full mt-96">
                <button class="px-3 py-1 bg-fuchsia-400 rounded-md w-full hover:bg-slate-200 " type="button">
                    Try premium Free
                </button>
              </div>
      </div>
    </transition-group>
    <transition @before-enter="beforeClose" @enter="close">
      <div v-if="!OpenMenu"  class="top-16 left-0  w-10">
        <button type="button" @click="OpenMenu =!OpenMenu">
          <span
            class="fas fa-angle-right px-3 py-2 drop-shadow-lg  rounded-full bg-orange-300 absolute  left-5 top-5  cursor-pointer hover:bg-slate-400"
          ></span>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref ,watchEffect} from "vue";
import gsap from "gsap";

import { ChangeColorBackGround,BackGroundImage } from "@/Stores/Stores";
let backStyle =ref(null)
watchEffect(()=>{
    let backgound = ref(BackGroundImage().imag)
      backStyle.value = {
        background : `url(${backgound.value.Url})`,
        backgroundSize : `${backgound.value.size}`
      }
    
    console.log(backStyle.value);
    
})
let ChangeColorBack =ChangeColorBackGround().color
let StarStatus = ref(false);
let OpenMenu = ref(false);


let before = (el)=>{
    el.style.width = '55px'
}
let beforeClose = (el)=>{
    el.style.width = '250px'
}
let enter = (el,done)=>{
  gsap.to(el,{
    width:250,  
    yoyo:true,
    onComplete:done

  })
}
let close = (el,done)=>{
  gsap.to(el,{
    width:40,
    onComplete:done,
  })
}
</script>

<style>

</style>