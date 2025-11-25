const arraySize=document.getElementById("sizeSlider")
const range=document.getElementById("rangeSlider")
let arraysizedisp=document.getElementById("sizeValue")
let rangesizedisp=document.getElementById("rangeValue")
const algo=document.getElementById("algo")
const displayDiv = document.getElementById('display')
let arrRand=[]
function sizedisp(){
arraysizedisp.textContent=`${arraySize.value} elements`
}
function rangedisp(){
rangesizedisp.textContent=`5- ${range.value}`
}
function randomArray(){
arrRand=[]
for(let i=0;i<arraySize.value;i++){
arrRand.push(Math.floor((Math.random()*(range.value-5))+5))
}
console.log(arrRand)
displayArray()
}
function displayArray(){
    displayDiv.innerHTML = '' 
    arrRand.forEach(value => {
        const bar = document.createElement('div')
        bar.className = 'array-bar'
        bar.style.height = `${value+100}px`
        bar.textContent=value
        displayDiv.appendChild(bar)
    })
}
function sleep() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}
function algoselct(){
    if(algo.value=="bubble"){
        bubblesrt();
    }
}