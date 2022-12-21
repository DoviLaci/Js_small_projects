console.log("Background js ok");
const color=["green","red","yellow","blue","magenta","lightbrown","brown","yellowgreen"];
let btn=document.getElementById("btn");
let body=document.getElementsByTagName("body");
btn.addEventListener("click",()=>{
    console.log("click");
    let i=Math.ceil(Math.random()*8)
    document.querySelector("body").style.backgroundColor=color[i];
})