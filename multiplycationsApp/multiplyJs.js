console.log("Js Ok");
const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
const questionElement=document.getElementById("question");
const formElements=document.getElementById("form");
const inputElemenst=document.getElementById("input");
const scoreElement=document.getElementById("score");
let score=JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
};
scoreElement.innerText=`score : ${score}`;
questionElement.innerHTML=`What is ${num1} multiply by ${num2}`;
const correctAnswer=num1*num2;
formElements.addEventListener("submit",function(){
    const userAnswer=parseInt(inputElemenst.value);
    if(userAnswer===correctAnswer){
        score++;
        updateLocalStorage();
    }else{
        alert(`Wrong! The result is ${num1*num2}`);
        score--;
        updateLocalStorage();
    }
});
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}