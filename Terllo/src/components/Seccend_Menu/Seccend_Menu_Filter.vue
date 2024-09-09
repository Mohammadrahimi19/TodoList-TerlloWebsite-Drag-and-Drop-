<template>
  <div>
    <div
      class="absolute overflow-auto  h-[48rem] right-32 md:right-3 sm:right-3 xs:right-2  xl:top-16  lg:top-24  md:top-24 sm:top-24 xs:top-24    flex flex-col bg-white  rounded-md text-sm  gap-5 px-5 py-5"
    >
      <div class="flex justify-between items-center px-5">
        <div></div>
        <p class="text-md font-bold">Filter</p>
        <button
          type="button "
          class="hover:bg-slate-100 rounded-md px-2 py-1"
          @click="exit()"
        >
          <span class="fas fa-xmark"></span>
        </button>
      </div>

      <div id="Keywords">
        <div class="flex flex-col w-full gap-2">
          <label for="Keywords" class="font-serif text-sm">KeyWords</label>
          <input
            type="text"
            name="Keywords"
            class="p-2 border-2 rounded-md border-gray-500 outline-none focus:border-blue-400 focus:border-2"
            placeholder="Enter KeyWord ..."
          />
          <p class="text-xs">Search Cards,members,labels,and more</p>
        </div>
      </div>

      <!--memebers  -->
      <div id="memebers" class="flex flex-col">
        <div>
          <p>Members</p>
        </div>
        <div class="flex flex-col gap-2 px-3 py-2">
          <div class="flex items-center gap-4">
            <input type="checkbox" name="NoMembers" id="NoMembers" />
             <label for="NoMembers" class="flex items-center gap-4 cursor-pointer">
                 <span class="fas fa-user"> </span>
                 <p>No Members</p>
             </label>
            </div>
          <div class="flex items-center gap-4">
            <input type="checkbox" name="Card_assinged" id="Card_assinged" />
            <label for="Card_assinged" class="flex items-center gap-2 cursor-pointer"> 
                <div
                  class="w-8 h-8 text-cyan-200 text-xs bg-blue-900 rounded-full text-center pt-2"
                >
                  MR
                </div>
                <p>Cards assigned to me</p>
            </label>
          </div>
        </div>
      </div>
      <!-- Due date -->
      <div id="Due_date">
        <div>
          <p>Due date</p>
        </div>
        <div class="p-3 flex flex-col gap-5">
          <div
            v-for="date in DueDate"
            :key="date.Name"
            class="flex items-center gap-3 cursor-pointer"
          >
            <input type="checkbox" :name="date.Name" :id="date.Name" />
            <label :for="date.Name" class="flex items-center gap-3 cursor-pointer">
                <span :class="date.span"></span>
                <p>{{ date.Name }}</p>
            </label>
          </div>
          <!-- toggle btn -->
          <div v-show="ShowHidden"  @click="ShowHidden = false">
            <button  type="button" class="px-6 hover:underline text-blue-500">
              Show More Option
              <span class="fas fa-angle-down"></span>
            </button>
          </div>
          <!-- hidden item -->
          <div id="Date_Hidden" class="flex flex-col gap-5" v-if="!ShowHidden">
            <div
              v-for="Hidden in HiddenDate"
              :key="Hidden.Name"
              class="flex items-center gap-3 "
            >
              <input type="checkbox" :name="Hidden.Name" :id="Hidden.Name" />
              <label :for="Hidden.Name" class="flex items-center gap-3 cursor-pointer">
                <span :class="Hidden.span"></span>
                <p>{{ Hidden.Name }}</p>
            </label>
            </div>
          </div>
        </div>
      </div>
      <!-- labels -->
      <div id="labels" class="px-2 flex flex-col gap-3 relative">
        <div>
          <p class="text-md">Labels</p>
        </div>
        <div class="px-2 flex flex-col gap-4">
          <div
            v-for="label in labels"
            :key="label"
            class="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="checkbox"
              :name="label.Name || label.colorName"
              :id="label.Name || label.colorName"
            />
            <span v-if="label.span" :class="label.span"></span>
            <p v-if="label.Name">{{ label.Name }}</p>
            <div
              v-else
              :class="label.color"
              class="w-full h-8 rounded-md"
            ></div>
          </div>
          <!-- select Color -->
          <div class="flex gap-3 relative">
            <input type="checkbox" name="selectd" id="selected" />
            <input
              type="text"
              placeholder="Select labels "
              class="p-2 rounded-sm cursor-pointer w-full"
              @click="ColorShow = !ColorShow"
              @keyup="ColorShow = false"
            />
            <span
              class="fas fa-angle-down absolute right-2 cursor-pointer top-3"
            ></span>
            <div
              v-if="ColorShow"
              class="absolute top-10 left-5 flex flex-col w-full rounded-md gap-3 bg-white"
            >
              <div
                v-for="item in hidden_Color"
                :key="item"
                class="flex gap-3 items-center hover:bg-blue-200 hover:border-2 h-10 border-l-blue-600 hover:opacity-95 cursor-pointer p-2"
              >
                <input type="checkbox" :name="item" />
                <div :class="item" class="w-full h-8 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- activity -->
      <div class="flex flex-col gap-4 px-2">
        <div>activity</div>
        <div class="flex px-3 gap-2 flex-col">
          <div
            v-for="active in activities"
            :key="active"
            class="flex gap-3 items-center"
          >
            <input type="checkbox" :name="active" :id="active" />
            <label :for="active">{{ active }}</label>
          </div>
        </div>
      </div>
      <!-- Any Match -->
      <div class="relative  px-3">
        <div class="relativee">
            <input type="text" readonly  v-model="any" class="w-full p-3 rounded-lg" @click="anyStatus =!anyStatus">
            <span  class="fas fa-angle-down absolute right-5  top-4"></span>
        </div>
        <!-- hidden match  -->
          <div v-show="anyStatus" class="absolute p-2 bg-white w-full rounded-md -top-40  right-2  flex flex-col gap-2  ">
            <div v-for="item in HiddenMatch" :key="item"   @click="select(item.Name)"  class="flex flex-col hover:border-l-2 border-blue-600 p-3 cursor-pointer hover:bg-blue-300 ">
                <p>{{ item.Name }}</p>
                <p>{{ item.title }}</p>
            </div>
         </div> 
      </div> 
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";


let DueDate = reactive([
  {
    Name: "No date",
    span: "fas fa-calendar-days",
  },
  {
    Name: "OverDue",
    span: "fas fa-clock text-red-600",
  },
  {
    Name: "Due in the naxt day",
    span: "fas fa-clock text-yellow-500",
  },
]);
let HiddenDate = reactive([
  {
    Name: "Due in the naxt week",
    span: "fas fa-clock ",
  },
  {
    Name: "Due in the naxt mounth",
    span: "fas fa-clock ",
  },
  {
    Name: "marked as complete",
  },
  {
    Name: "Not marked as complete",
  },
]);
let ShowHidden = ref(true);
let ColorShow = ref(false);
let labels = reactive([
  {
    span: "fab fa-discourse",
    Name: "No Label",
  },
  {
    color: "bg-red-300",
    colorName: "red-300",
  },
  {
    color: "bg-orange-300",
    colorName: "orange-300",
  },
  {
    color: "bg-blue-300",
    colorName: "blue-300",
  },
]);
let hidden_Color = reactive(["bg-red-300", "bg-yellow-500", "bg-blue-200"]);
let activities = reactive([
  "Active in the last week",
  "Activity in the last two weeks",
  "Active in the last four weeks",
  "Without active in the last fout weeks",
]);
let anyStatus = ref(false)   
let HiddenMatch = reactive([
    {
        Name:'Any Match',
        title:'Matches any label and any member'
    },
    {
        Name:'Exact Match',
        title:'Matches all label and all member'
    },
])
let any = ref('Any Match')

let select =(item)=>{
    any.value = item
    anyStatus.value = false
} 


import { defineEmits } from "vue";
const emit = defineEmits(["exit"]);
let exit = () => {
  emit("exit", null);
};
</script>

<style>
</style>    