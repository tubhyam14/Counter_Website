const increament=document.getElementById("increament");
const decreament=document.getElementById("decreament");
const reset=document.getElementById("reset");
let count =0;
increament.onclick=function(){
    count++;
    document.getElementById("count").textContent=count;
}

decreament.onclick=function(){
    count--;
    document.getElementById("count").textContent=count;
}

reset.onclick=function(){
    count=0;
    document.getElementById("count").textContent=count;
}