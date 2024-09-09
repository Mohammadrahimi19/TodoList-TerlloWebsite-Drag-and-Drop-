<template>
  <div >
    <div ref="NewBox" 
      class= "bg-slate-100 drop-shadow-xl  w-full overflow-y-auto  text-xs  flex flex-col p-3 gap-3  rounded-lg flex-none "
     >
      <form @click.prevent="" action="">
        <div class="flex justify-between items-center w-full ">
          <input
            type="text"
            name="Todo"
            id="Todo"
            :value="Todos.Todo"
            ref="TodoItem"
            class="bg-transparent rounded-md w-full h-max text-xl focus:bg-white indent-2 p-2"
          />
          <span class="fas fa-ellipsis cursor-pointer pr-2"></span>
        </div>
      </form>
      <Draggable
        :list="Todos.items"
        tag="div"
        v-model="Todos.items"
        group="Todos"
        item-key="id"
        ghost-class="ghost"
        drag-class="drag"
        class="flex flex-col gap-2 h-max "
      >
        <template #item="{ element }">
          <form @click.prevent="" action="">
            <div class="flex w-full relative">
              <div name="Todo-item-1"  class="rounded-md border-2 p-2 w-full  break-words "  id="todo-item-1">
               {{ element }}
              </div>
              <span
                class="fas fa-pen absolute right-1 text-xs top-1 cursor-pointer bg-white p-2 hover:bg-slate-200 rounded-md"
              ></span>
            </div>
          </form>
        </template>
      </Draggable>

      <DragAndDrop_AddNewItem
        @newItem="
          (item) => {
            addNewItem(item);
          }
        "
      />
    </div>
  </div>
</template>

<script setup>
import DragAndDrop_AddNewItem from "./DragAndDrop_AddNewItem.vue";
import Draggable from "vuedraggable";
import { defineProps, ref,nextTick,onMounted} from "vue";

let TodoItem = ref();
let props = defineProps({
  todos: Object,
});
let Todos = props.todos;

let addNewItem = async(item) => {
  Todos.items.push(item);
  await changesize()
  NewBox.value.scrollTo (0,NewBox.value.scrollHeight)
};

let NewBox = ref()
let changesize = async() => {
  await nextTick()
  if (
    NewBox.value.clientHeight < NewBox.value.scrollHeight &&
    NewBox.value.scrollHeight < 600
  ) {
    NewBox.value.style.height = "auto";
    NewBox.value.style.height = NewBox.value.scrollHeight + 20 + "px";
  }else if(NewBox.value.scrollHeight > 600){
    NewBox.value.style.height = "600px";
  }
};
onMounted(()=>{
  changesize()
})


</script>

<style>
</style>