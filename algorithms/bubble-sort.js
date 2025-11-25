async function bubblesrt(){
      let n = arrRand.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arrRand[j] > arrRand[j + 1]) {
                let temp = arrRand[j];
                arrRand[j] = arrRand[j + 1];
                arrRand[j + 1] = temp;
                renderBars(arrRand);
                await sleep();
            }
        }
    }
}
function renderBars(arr){
    displayDiv.innerHTML = '' 
    arrRand.forEach(value => {
        const bar = document.createElement('div')
        bar.className = 'array-bar'
        bar.style.height = `${value+100}px`
        bar.textContent=value
        displayDiv.appendChild(bar)
})
}