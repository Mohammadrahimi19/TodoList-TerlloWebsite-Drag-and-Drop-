import { ref } from "vue";

const active = ref(null)
export function  toggle  (id,DropDownComponent,activeComponent,Menu)  {
  // liStatus.value = liStatus.value === id ? "null" : id;
    active.value=activeComponent
  if (id === 'more') {
    active.value = {
      component: DropDownComponent,
      name: "more",
    };
  } else {
    Menu.forEach((item) => {
      if (item.id === id) {
        active.value = {
          name: item.Name,
          component: item.component,
          child:item.child
        };
      }
    });
  }
  
  return active
}



export function  get_space()  {
    let avaliableWidth = window.innerWidth;
    let value;
    if (avaliableWidth >= 1250) {
      value = 4;
    } else if (1250 > avaliableWidth && avaliableWidth >= 1150) {
      value = 3;
    } else if (1150 > avaliableWidth && avaliableWidth >= 1050) {
      value = 2;
    } else if (1050 > avaliableWidth && avaliableWidth >= 850) {
      value = 1;
    } else if (avaliableWidth < 850) {
      value = 0;
    }
    return value;
  }


  export function ResizeWidth(Menu,SubMenu,maxLi){
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
    return {Menu , SubMenu,maxLi}
  }