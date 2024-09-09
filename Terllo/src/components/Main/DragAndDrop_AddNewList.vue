<template>
  <div  class="bg-slate-100 rounded-md p-3 h-max w-96 flex-none text-sm">
    <div
      v-if="!ISaddNewList"
      @click="changeState"
      class="flex flex-row gap-4 p-3 bg-slate-200 hover:bg-opacity-50 items-center rounded-md cursor-pointer w-full">
      <span class="fas fa-plus"></span>
      <p>Add another List</p>
    </div>

    <!-- addListform -->
    <div v-show="ISaddNewList">
      <form action="" @click.prevent=""  class="w-full flex flex-col gap-2 pt-2">
        <div>
          <input
            type="text"
            @keydown.esc="ISaddNewList = false"
            @keydown.enter.prevent="AddNewList"
            ref="AddNewListInput"
            name="AddNewListInput"
            id="AddNewListInput"
            placeholder="Enter List Name"
            class="p-2 border-2 w-full indent-1 border-slate-400 rounded-md"
          />
        </div>
        <div class="flex flex-row gap-1">
          <button @click="AddNewList"
            class="p-3 rounded-md bg-blue-700 w-1/4 text-white"
            type="sumbit">
            Add
          </button>
          <button @click="ISaddNewList =false" class="p-3 rounded-md bg-slate-700 text-white" type="button">
            Cansel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref, watchEffect ,defineEmits} from "vue";
let ISaddNewList = ref(false);
let AddNewListInput = ref(null);
let emit = defineEmits(['Newlist'])


let changeState=()=>{
  watchEffect( async()=>{
    ISaddNewList.value = true;
    await nextTick();
    AddNewListInput.value.focus()  
  })
}


let AddNewList =()=>{
  
  if(!AddNewListInput.value.value.trim()){
    confirm('type something')
  }else{
   emit('Newlist',AddNewListInput.value.value.trim())
    AddNewListInput.value.value = ''
  }
}
</script>
<style>
</style>