const arraySize=document.getElementById("sizeSlider")
const range=document.getElementById("rangeSlider")
let arraysizedisp=document.getElementById("sizeValue")
let rangesizedisp=document.getElementById("rangeValue")
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
    const displayDiv = document.getElementById('display')
    displayDiv.innerHTML = '' // Clear previous
    arrRand.forEach(value => {
        const bar = document.createElement('div')
        bar.className = 'array-bar'
        bar.style.height = `${value}px` // Or scale this value
        displayDiv.appendChild(bar)
    })
    console.log(arrRand)
}