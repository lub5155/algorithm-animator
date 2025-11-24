const arraySize=document.getElementById("sizeSlider")
const range=document.getElementById("rangeSlider")
let arraysizedisp=document.getElementById("sizeValue")
let rangesizedisp=document.getElementById("rangeValue")
function sizedisp(){
arraysizedisp.textContent=`${arraySize.value} elements`
}
function rangedisp(){
rangesizedisp.textContent=`5- ${range.value}`
}
function randomArray(){
console.log(document.getElementById("sizeSlider").value)
}