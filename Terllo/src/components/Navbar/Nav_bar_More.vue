<template>
  <div class="w-56 left-0 flex flex-col gap-1 bg-white  rounded-md">
    <li
      class="flex justify-between items-center p-2 hover:bg-slate-100 relative z-10"
      v-for="(DropDown, index) in DropDownValue"
      :key="index"
      @click.stop="toggle2(DropDown.id)"
    >
      <div class="flex justify-between items-center w-full">
        <p>{{ DropDown.Name }}</p>
        <slot></slot>
        <span :class="[DropDown.child ? 'fas fa-angle-right' : '']"></span>
      </div>
    </li>
    <transition-group
      tag="div"
      name="fade"
      v-if="activeComponent != null && activeComponent.child"
    >
      <component
        @exit="exit()"
        @back="back()"
        :is="activeComponent.component"
        class="cursor-pointer absolute w-full "
        :DropDownValue="activeComponent.child"
        >
      </component>
    </transition-group>
  </div>
</template> 

<script setup>
import { defineProps, ref } from "vue";

import { toggle } from "@/composable/Navbar";

const activeComponent = ref(null);
const toggle2 = (id) => {
  activeComponent.value = toggle(id, "", activeComponent, DropDownValue).value;
};

let getProps = defineProps({
  DropDownValue: {
    type: null,
    requried: true,
  },
  // https://0g5gs8bp-5173.euw.devtunnels.ms/
});
let DropDownValue = getProps.DropDownValue;
let exit=(res)=>{
  activeComponent.value.child=res
}
let back = (res) =>{
  activeComponent.value.component = res
}
</script>

<style >
</style>