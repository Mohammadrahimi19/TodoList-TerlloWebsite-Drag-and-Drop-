<template>
  <div class="flex flex-row justify-between h-96 ">
    <transition-group  @before-enter="beforEnter" appear  @enter="enter" mode="in-out">
      <div v-for="n in 3" :key="n" :data-index="n" class="w-96 bg-slate-300 rounded-lg m-2">
      </div>
    </transition-group>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
let item1 = ref(false);
setTimeout(() => {
  item1.value = !item1.value;
}, 200);

let beforEnter = (el)=>{
  el.style.height ='100px',
  el.style.opacity=0.5
}
let enter = (el, done) => {
  gsap.to(el, {
    duration: 2,
    height: 450,
    opacity: 0.75,
    yoyo:true,
    repeat:10,
    onComplete: done,
    delay: el.dataset.index * 0.5,
  });
};


</script>
<style >
</style>