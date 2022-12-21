console.log("Js Ok");
const textArea=document.getElementById("textarea");
const attr = document.createAttribute("maxlenght");
attr.value="50"
textArea.setAttributeNode(attr);
const totalCounter=document.getElementById("total-counter");
const remaininEl=document.getElementById("remaining");
textArea.addEventListener("keyup",()=>{
    updateRender()
})
function updateRender(){
    totalCounter.innerText=textArea.value.length;
    remaininEl.innerText=textArea.getAttribute("maxlenght")-textArea.value.length;
}