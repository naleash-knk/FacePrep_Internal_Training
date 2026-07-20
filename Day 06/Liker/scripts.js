
let count = 0;

const button = document.getElementById("btn");

button.addEventListener("click",func);

function func(){
    count++;
    console.log(count);
    document.getElementById("count").innerHTML= `Count: ${count}`;
}