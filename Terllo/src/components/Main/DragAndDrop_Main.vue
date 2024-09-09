<template>
  <div :style="backStyle" class="flex flex-row flex-nowrap drop-shadow-lg gap-4 p-5" >
    <Draggable  tag="div"  :list="Todos" item-key="id" class="flex flex-row flex-nowrap drop-shadow-lg h-96 gap-4 relative" drag-class="drag" ghost-class="ghost">
      <template #item="{element}">
        <DragAndDrop_TasksBox :todos="element" class="w-96" />
      </template>
    </Draggable>
    
    <DragAndDrop_AddNewList @Newlist="setNewList" /> 

  </div>
</template>

<script setup>
import {  reactive,ref, watchEffect} from "vue";
import DragAndDrop_AddNewList from "./DragAndDrop_AddNewList.vue";
import DragAndDrop_TasksBox from "./DragAndDrop_TasksBox.vue";
import {BackGroundImage} from '../../Stores/Stores.js'
import Draggable from 'vuedraggable';
let backStyle =ref()
watchEffect(()=>{
    let backgound = ref(BackGroundImage().imag)
      backStyle.value = {
        background : `url(${backgound.value.Url})`,
        backgroundSize : `${backgound.value.size}`
      }
    
    console.log(backStyle.value);
    
})
let Todos = reactive([
  {
    id: 0,
    Todo: "انگلیسی",
    items: ["lisning", "writing"],
  },
  {
    id: 1,
    Todo: "تمرین",
    items: ["تمرین 1", "تمرین 2"],
  },
]);


let setNewList = (item) => {
  Todos.push({
    id: Todos.length + 1,
    Todo: item,
    items: [],
  });
};
</script>

<style>

.drag > div{
  overflow-y: auto !important; 
  transform: rotate(10deg);
} 
.ghost{
  background: grey;
  border-radius:5px ;
  height: max-content;
}
.ghost>div{
  visibility: hidden;
}
</style>  