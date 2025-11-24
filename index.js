const arraySize=document.getElementById("sizeSlider")
const range=document.getElementById("rangeSlider")
let arraysizedisp=document.getElementById("sizeValue")
let rangesizedisp=document.getElementById("rangeValue")
function sizedisp(){
let arrsize=Math.random()*arraySize.value
}
function rangedisp(){
rangesizedisp.textContent=`5- ${range.value}`
}
function randomArray(){
console.log(document.getElementById("sizeSlider").value)
}