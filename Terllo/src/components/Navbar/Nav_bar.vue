<template >
  <header  class=" drop-shadow-md text-sm">
    <nav class="flex gap-5 mx-2">
      <div class="flex items-center gap-3 w-full relative">
        <div class="branding w-32 h-16">
          <img
            class="w-full h-full"
            src="../../assets/image/Trello New.png"
            alt="terllo logo"
          />
        </div>
        <ul class="flex gap-2 relative" ref="popup">
          <li v-for="li in Menu" :key="li.id" @click="toggle2(li.id)">
            <!-- لیست منو ها رو نشون میده -->
            <button
              :title="li.Name"
              class="hover:bg-slate-200 rounded-md p-2 w-26"
            >
              {{ li.Name }} <span class="fas fa-angle-down"></span>
            </button>
          </li>
          <transition-group  name="fade" tag="div">
            <component
              v-if="activeComponent && activeComponent.name != 'more'"
              :is="activeComponent.component"
              class="absolute mt-14 w-3/4 "
              :DropDownValue="activeComponent.child"
              @back="exit()"
              @exit='exit()'
            
            >
            </component>
          </transition-group>
          <!-- برای سابمنو -->
          <li
            v-if="CheckUlStatus"
            class="hover:bg-slate-200 rounded-md p-2 w-max cursor-pointer"
            @click="toggle2('more')"
          >
            More
            <span class="fas fa-angle-down"></span>

            <transition-group name="fade" tag="li">
              <component
                :is="activeComponent.component"
                v-if="
                  activeComponent != null && activeComponent.name === 'more'
                "
                class="absolute mt-7"
                :DropDownValue="SubMenu"
              >
              </component>
            </transition-group>
          </li>

          <li>
            <button class="bg-slate-200 rounded-md p-2" type="button">
              <span class="fas fa-plus" :class="' xl:!hidden lg:!hidden md:!hidden sm:!block xs:!block'"></span>
              <p class="xl:block lg:block md:block sm:hidden xs:hidden 2xs:hidden">Create</p>
            </button>
          </li>
        </ul>
        <div class="flex items-center  relative ml-auto ">
          <form action="" @click.prevent="">
            <div title="searchBox" class="search relative group lg:hover:w-96">
              <input
                class="bg-white bg-opacity-45 rounded-lg border-b-2 border-l-2 border-blue-200 indent-8 px-5 py-2 lg:group-hover:w-full lg:block sm:hidden xs:hidden 2xs:hidden md:hidden"
                type="search"
                placeholder="Search"
              />
              <span
                class="fas fa-magnifying-glass lg:absolute sm:relative lg:left-3 lg:top-1/3 md:left-3 2xs:right-0 md:top-1/3  sm:top-0 xs:pt-3 2xs:pt-3 cursor-pointer text-center rounded-full w-10 h-10 my-auto lg:pt-0 sm:pt-[12.5px] md:hover:bg-slate-100"
              ></span>
            </div>
          </form>
          <div class="flex items-center gap-2 lg:text-lg xs:text-xs relative cursor-pointer lg:px-4 2xs:px-0">
            <span
              title="Notification"
              class="fa-regular w-8 text-center fa-bell bg-slate-100 p-2 rounded-full"
            ></span>
            <span
              title="queastion"
              class="fa-regular w-10 text-center fa-circle-question lg:block md:block sm:block xs:hidden 2xs:!hidden hover:bg-slate-100 hover:p-2 hover:rounded-full"
            ></span>
            <span
              title="Account"
              ref="account"
              @click="AccountStatus = !AccountStatus"
              class="account w-8 h-8 rounded-full bg-slate-400 flex items-center justify-center text-sm hover:bg-slate-100 hover:p-2 hover:rounded-full"
              >MP</span
            >
            <transition-group name="fade" tag="div" >
              <nav_bar_account
                v-show="AccountStatus"
                class="absolute -left-[16.5rem] top-12 "
              />
            </transition-group>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import {
  computed,
  defineAsyncComponent,
  onMounted,
  reactive,
  ref,
  watchEffect,
} from "vue";
import Nav_bar_WorkSpace from "./Nav_bar_WorkSpace.vue";
import Nav_bar_recent from "./Nav_bar_recent.vue";
import Nav_bar_starred from "./Nav_bar_starred.vue";
import Nav_bar_template from "./Nav_bar_template.vue";
import Nav_bar_account from "./Nav_bar_account.vue";
import { toggle, get_space } from "@/composable/Navbar";
let popup = ref(null);
let activeComponent = ref(null);
let maxLi = ref(0);
let AccountStatus = ref(false);
let account =ref(null)

let exit=(res)=>{
  activeComponent.value.component=res
}

document.addEventListener("click",(event)=>{
   if(!account.value.contains(event.target)){
       AccountStatus.value = false 
   }
})





  
const DropDownComponent = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    resolve(import("@/components/Navbar/Nav_bar_More.vue"));
  });
});

const toggle2 = (id) => {
  activeComponent.value = toggle(
    id,
    DropDownComponent,
    activeComponent,
    Menu
  ).value;
  document.addEventListener("click", (event) => {
    if (popup.value && !popup.value.contains(event.target)) {
        activeComponent.value = null;
    }
  });
};

let Menu = reactive([
  {
    id: "Parent-1",
    Name: "WorkSpace",
    component: Nav_bar_WorkSpace,
    child: [
      {
        Name: "Terllo Workspace",
      },
      {
        Name: "Terllo Workspace",
      },
    ],
  },
  {
    id: "Parent-2",
    Name: "Recent",
    component: Nav_bar_recent,
    child: [
      {
        Name: "reza",
      },
    ],
  },
  {
    id: "Parent-3",
    Name: "Starred",
    component: Nav_bar_starred,
    child: [
      {
        Name: "reza",
      },
    ],
  },
  {
    id: "Parent-4",
    Name: "Templates",
    component: Nav_bar_template,
    child: [
      {
        Name: "cover",
        src: "/src/assets/image/cover.jpg",
      },
      {
        Name: "dogs",
        src: "/src/assets/image/dogs.jpg",
      },
      {
        Name: "natuer",
        src: "/src/assets/image/natuer.jpg",
      },
      {
        Name: "person",
        src: "/src/assets/image/person.jpg",
      },
    ],
  },
]);

let SubMenu = reactive([]);
let dropdwonStatus = ref(false);

let ResizeWidth = () => {
  activeComponent.value = null;
  maxLi.value = get_space();
  if (maxLi.value < Menu.length) {
    const ItemMove = Menu.length - maxLi.value;
    let value = Menu.splice(-ItemMove);
    value.forEach((item) => {
      SubMenu.push(item);
    });
    console.log(SubMenu);
  } else if (maxLi.value > Menu.length && SubMenu.length > 0) {
    const itemBack = maxLi.value - Menu.length;
    let value = SubMenu.splice(-itemBack);

    value.forEach((item) => {
      Menu.push(item);
    });
  }
};

const CheckUlStatus = computed(() => {
  return maxLi.value < 4;
});
watchEffect(() => {
  dropdwonStatus.value = CheckUlStatus.value;
});


onMounted(() => {
  window.addEventListener("resize", ResizeWidth);
  ResizeWidth();
});







</script>

<style >
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(-5px);
}
.fade-enter-from {
  opacity: 0;
}





</style>