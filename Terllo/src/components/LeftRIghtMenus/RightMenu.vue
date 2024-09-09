<template>
  <div>
    <div class=" absolute lg:w-96 md:w-96 sm:w-80 xs:w-80 2xs:w-80   overflow-auto h-[50rem]  right-3 md:right-0 sm:right-0 xs:right-2 xl:top-2 lg:top-2 md:top-2 sm:top-0 xs:top-0 2xs:top-0 flex flex-col bg-white rounded-md text-sm gap-2 px-5 ">
      <div class="flex justify-between items-center px-5 py-2">
        <div></div>
        <p class="text-xl font-bold">Menu</p>
        <button
          type="button "
          class="hover:bg-slate-100 rounded-md px-2 py-1"
          @click="exit()"
        >
          <span class="fas fa-xmark"></span>
        </button>
      </div>
      <hr> 

      <div class="flex gap-2 flex-col ">
        <div v-for="item in Firstgroup" :key="item.name" class="flex  items-center gap-4 cursor-pointer hover:bg-slate-300  rounded-md p-2  ">
            <span :class="item.span"></span>
            <div class="flex flex-col">
                <p >{{ item.name }}</p>
                <p v-if="item.title">{{ item.title }}</p>
            </div>
        </div>
      </div>
      <!-- first -->
      <hr>
      <div class="flex gap-2 flex-col ">
        <div @click="activeComponent=ChangeBackground " class="flex  items-center gap-4 cursor-pointer hover:bg-slate-300  rounded-md p-2  ">
               <div class="w-5 h-5 rounded-md bg-red-400"></div>
               <p>Change fbackgraound</p>
        </div>
        <div v-for="item in seccendGroup" :key="item.name" class="flex  items-center gap-4 cursor-pointer hover:bg-slate-300  rounded-md p-2  ">
            <span :class="item.span"></span>
            <p >{{ item.name }}</p>
        </div>
        <div class="flex items-center gap-4 px-2 hover:bg-slate-200">
            <span class="fas fa-folder-plus"></span>
            <p>Make Templates</p>
            <button class=" p-2 hover:bg-slate-500 rounded-md">
                <span class="fas fa-briefcase"></span>
                upgrade
            </button>
        </div>
      </div>
      <!-- seccend -->
       <div class="flex flex-col gap-2">
           <div v-for="item in LastGroup" :key="item.name" class="flex  items-center gap-4 cursor-pointer hover:bg-slate-300  rounded-md p-2  ">
                 <span :class="item.span"></span>
                 <p >{{ item.name }}</p>
             </div>
       </div>
         
    
       <transition-group name="fadeBackGround">
           <component @exit="(x)=> activeComponent = x "  @back="(n)=>activeComponent = n" v-if="activeComponent != null" :is="activeComponent"></component>
        </transition-group>
    </div>
       
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import ChangeBackground from './ChangeBackground.vue';
let activeComponent = ref(null)
let Firstgroup = reactive([
    {
        name:'About this Board',
        title:'add discrieption to your board',
        span:'fas fa-info'
    },
    {
        name:'Activity',
        title:null,
        span:'fas fa-list'
    },
    {
        name:'Arichved Item',
        title:null,
        span:'fas fa-box-open'
    }
])
let seccendGroup = reactive([
    {
        name:'Setting',
        span:'fab fa-whmcs',
    },
    {
        name:'Custom Filed',
        span:'fas fa-file-lines',
    },
    {
        name:'Automation',
        span:'fas fa-robot',
    },
    {
        name:'Power-ups',
        span:'fas fa-rocket',
    },
    {
        name:'label',
        span:'fas fa-layer-group',
    },
    {
        name:'Stickers',
        span:'fas fa-image  ',
    },
 

])
let LastGroup = reactive([
    {
        name:'Watch',
        span:'fas fa-eye',
    },
    {
        name:'Copy Board',
        span:'fas fa-copy',
    },
    {
        name:'Email-to-board',
        span:'fas fa-envelope',
    },
    {
        name:'Print,export and share',
        span:'fas fa-share-nodes',
    },
    {
        name:'Close Board',
        span:'fas fa-minus  ',
    },
])
import { defineEmits } from "vue";
const emit = defineEmits(["exit"]);
let exit = () => {
  emit("exit", null);
};
</script>
<style >

.fadeBackGround-leave-active {
  transition: all 0.5s;
}
.fadeBackGround-enter-active {
  transition: all 0.5s;
}
.fadeBackGround-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
.fadeBackGround-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fadeBackGround-enter-to {
  opacity: 1;
  transform: translateX(-5px);
}
.fadeBackGround-enter-from {
  opacity: 0;
  transform:translateX(5px)
}

</style>