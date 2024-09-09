<template>
  <div class="relative">
    <div v-show="!Is_Show" class="flex items-baseline">
      <div
        @click="ShowInput"
        class="flex gap-4 p-3 items-baseline cursor-pointer hover:bg-slate-400 rounded-lg px-2 w-full mr-1"
      >
        <span class="fas fa-plus"></span>
        <p>Add a Card</p>
      </div>
      <div
        @click="activeComponent = true"
        title="Create from template"
        class="ml-auto cursor-pointer hover:bg-slate-300 p-2 rounded-lg"
      >
        <span class="fas fa-copy"></span>
      </div>
    </div>
    <transition-group tag="div" name="fade">
      <DragDrop_CreateFromTeamplate
        v-if="activeComponent"
        @exit="(res) => (activeComponent = res)"
      />
    </transition-group>

    <!-- addForm -->
    <transition-group tag="div" name="fadeNew">
      <form v-show="Is_Show" @submit.prevent="" class="flex flex-col gap-3">
        <textarea
          @input="changesize"
          @keydown.esc="Is_Show = false"
          @keydown.enter.prevent="setNewItem($refs.NewItemInput)"
          placeholder="Enter  name for this Card.. "
          class="p-3 rounded-lg w-full border-2 h-fit resize-none"
          ref="NewItemInput"
        />
        <div class="flex gap-2">
          <button
            @click="setNewItem($refs.NewItemInput)"
            class="py-3 px-5 hover:opacity-45 bg-blue-500 text-white fou rounded-md"
            type="button"
          >
            Add
          </button>
          <button
            @click="Is_Show = false"
            class="p-3 rounded-md hover:bg-slate-300"
            type="button"
          >
            Cansel
          </button>
        </div>
      </form>
    </transition-group>
  </div>
</template>

<script setup>
import { nextTick, ref, defineEmits, watchEffect } from "vue";
import DragDrop_CreateFromTeamplate from "./DragDrop_CreateFromTeamplate.vue";

let activeComponent = ref(false);

const NewItemInput = ref(null);
let emit = defineEmits(["newItem"]);
let Is_Show = ref(false);

let is_add = defineProps({
  is_add: Boolean,
});
let changesize = () => {
  if (
    NewItemInput.value.clientHeight < NewItemInput.value.scrollHeight &&
    NewItemInput.value.clientHeight < 450
  ) {
    NewItemInput.value.style.height = "auto";
    NewItemInput.value.style.height = NewItemInput.value.scrollHeight + 20 + "px";
  }
  console.log(NewItemInput.value.clientHeight);
};

watchEffect(() => {
  Is_Show.value = is_add.is_add;
});

let ShowInput = async () => {
  Is_Show.value = true;
  await nextTick();
  NewItemInput.value.focus();
  activeComponent.value = false;
};

let setNewItem = (item) => {
  if (!item.value.trim()) {
    confirm("type SomeThing");
  } else {
    emit("newItem", item.value.trim());
    item.value = "";
    activeComponent.value = false;
    NewItemInput.value.style.height = 'fit-content'
  }
};
</script>

<style>
</style>