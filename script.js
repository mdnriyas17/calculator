let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let zeroes = document.getElementById("zeroes");
let dot = document.getElementById(".");

let add = document.getElementById("add");
let sub = document.getElementById("subtract");
let mul = document.getElementById("mul");
let mod = document.getElementById("mod");
let div = document.getElementById("div");
let clear = document.getElementById("clear");
let clear_last = document.getElementById("clear_last");
let memory_plus = document.getElementById("memory_plus");
let memory_minus = document.getElementById("memory_minus");
let btn = document.querySelector(".btn");
let equal = document.getElementById("equal");

btn.addEventListener("click", display);
clear.addEventListener("click",clearValue);
equal.addEventListener("click",result);


let input = document.querySelector(".btn");
let fResult = document.querySelector("#result");
result.fResult = ""

document.body.addEventListener("keypress",keypress);

function display(e){
    let span = document.querySelector("#span");
    if(e.target.value===undefined){
        span.innerHTML = span.innerHTML+"";
    }
    else{
        span.innerHTML = span.innerHTML+e.target.value;
    }   
}


function clearValue(){
    let span = document.querySelector("#span");
    let fResult = document.querySelector("#result");
    span.innerHTML="";
    fResult.value = "0";
}


function result(){
    let span = document.querySelector("#span"); 
    let fResult = document.querySelector("#result");
    fResult.value = eval(span.innerText); 
}


function calculation(val1,operator,val2){
    if(operator === "+"){
        return [val1+val2];
    }
    else if(operator === "-"){
        return [val1-val2];   
    }
    else if(operator === "*"){
        return [val1*val2];
    }
    else if(operator === "/"){
        return [val1/val2];
    }
    else if(operator === "%"){
        return [val1%val2];
    }
}


function keypress(e)
{
    let span = document.querySelector("#span");
    if((e.key<10 && e.key>=0) || e.key==="*" || e.key==="-" || e.key==="+" || e.key==="/" || e.key==="%")
    {
        span.innerText += e.key;
    }
    else if(e.key==="Enter")
    {
        result();
    }
}
