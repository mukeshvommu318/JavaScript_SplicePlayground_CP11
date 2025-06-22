let arr = [1, 7, 3, 1, 0, 20, 77];
let output = document.getElementById("otp")
output.textContent="["+arr.join(", ")+"]"


let StartIndex = document.getElementById("startIndexId")
let DeleteCount = document.getElementById("deleteCountId")
let ItemAdd = document.getElementById("itemAddId")
let btnElement = document.getElementById("btn")



btnElement.onclick=function(){
    let StartIndexValue = parseInt(StartIndex.value)
    let DeleteCountValue = parseInt(DeleteCount.value)
    let ItemAddValue = ItemAdd.value

    arr.splice(StartIndexValue,DeleteCountValue,ItemAddValue)
    output.textContent="["+arr.join(", ")+"]"
}

// let UpdatedArr = arr.splice()