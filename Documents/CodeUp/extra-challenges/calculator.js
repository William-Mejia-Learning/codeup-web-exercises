"use strict";

const clear = document.getElementById("14");
const enter = document.getElementById("15");
let text = document.getElementById("input1");
let input2 = document.getElementById("input2")
let input3 = document.getElementById("input3")
let input4 = document.getElementById("input4")

text.disabled = true;
input2.disabled = true;
input3.disabled = true;
input4.disabled = true;

let clicked = false;

function calculatorValues() {
    for (let i = 0; i <= 9; i++) {
        document.getElementById(`${i}`).addEventListener("click", (e) => {
            console.log(e.target);
            if(clicked === false){
                e.target.firstChild.textContent;
                text.value += e.target.firstChild.textContent;
            }
            if(clicked === true){
                e.target.firstChild.textContent;
                input3.value += e.target.firstChild.textContent;
            }
        })
    }
    for(let i = 10; i <= 13; i++) {
        document.getElementById(`${i}`).addEventListener("click", (e) => {
            input2.value = e.target.firstChild.textContent;
            clicked = true;
        });
    }
}

function clearInput(){
    clear.addEventListener("click", (e)=>{
        text.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
        clicked = false;
    })
}

function submitInput(){
    enter.addEventListener("click", () => {
        if(input2.value === "+"){
            input4.value = parseInt(text.value) + parseInt(input3.value);
        }
        if(input2.value === "*") {
            input4.value = parseInt(text.value) * parseInt(input3.value);
        }
        if(input2.value === "-") {
            input4.value = parseInt(text.value) - parseInt(input3.value);
        }
        if(input2.value === "/") {
            input4.value = parseInt(text.value) / parseInt(input3.value);
        }
        clicked =false;
    })
}

console.log(text);

submitInput();
calculatorValues();
clearInput();