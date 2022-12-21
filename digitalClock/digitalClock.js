console.log("js ok");
const hourElement=document.getElementById("hour");
const minutesElement=document.getElementById("minutes");
const secondsElements=document.getElementById("seconds");
function updateClock(){
    let h = new Date().getHours();
    let m =new Date().getMinutes();
    let s = new Date().getSeconds();
    if(h<10){
        hourElement.innerHTML="0"+h;
    }else hourElement.innerText=h;
    if(m<10){
        minutesElement.innerHTML="0"+m;
    }else minutesElement.innerText=m;
    if(s<10){
        secondsElements.innerHTML="0"+s
    }else secondsElements.innerText=s;
    setTimeout(()=>{updateClock()},1000)
}
updateClock()