import { defineStore } from "pinia";
import { ref } from "vue";
export const ChangeColorBackGround = defineStore('ChangeColor',()=>{
    const color = ref('bg-blue-300')
 
    function setNewColor(newValue){
        color.value = newValue
    }

    return {color,setNewColor}

})

export const CloseMenu = defineStore('CloseMenu',()=>{
    const Status = ref(false)

    function CloseMenu(value){
        Status.value=value
    }
    return {Status,CloseMenu}
})


export const BackGroundImage = defineStore('BackGroundImage',()=>{
    const imag = ref('null')
    function SetBackGround(img){
         imag.value = img
         console.log(img);
    }
    return {imag,SetBackGround}
})




    // state:()=>({
    //     globalColor:null
    // }),
    // actions:{
    //     SetNewColor(newValue){
    //         this.globalColor = newValue
    //     }
    // }