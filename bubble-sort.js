async function bubblesrt(){
      let n = arrRand.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            renderBars(arrRand,[j,j+1],"comparing");
            await sleep(300);
            if (arrRand[j] > arrRand[j + 1]) {
                let temp = arrRand[j];
                arrRand[j] = arrRand[j + 1];
                arrRand[j + 1] = temp;
                renderBars(arrRand,[j,j+1],"compared");
                await sleep(300);
            }
        }
    }
}
function renderBars(arr, y = [], str) {
    displayDiv.innerHTML = '';
    arr.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.className = 'array-bar';
        bar.style.height = `${value + 100}px`;
        bar.textContent = value;
        
        if (str == "compared") {
            if (y[0] == index) {
                bar.style.backgroundColor = '#3bbb09ff'; 
            } else if (y[1] == index) {
                bar.style.backgroundColor = '#ef4444'; 
            }
        } else if (str == "comparing") {
            if (y.includes(index)) {
                bar.style.backgroundColor = '#58a3d8'; 
            }
        } else if (str == "comparings") {
            if (y[0] == index) {
                bar.style.backgroundColor = '#fbff8bff'; 
            } else if (y[1] == index) {
                bar.style.backgroundColor = '#58a3d8'; 
            }
        }
        else if (str == "current") {
            if (y.includes(index)) {
                bar.style.backgroundColor = '#ef4444'; 
            }
        } else if (str == "shifting") {
            if (y.includes(index)) {
                bar.style.backgroundColor = '#f59e0b'; 
            }
        } else if (str == "shifted") {
            if (y.includes(index)) {
                bar.style.backgroundColor = '#dc2626';
            }
        } else if (str == "inserted") {
            if (y.includes(index)) {
                bar.style.backgroundColor = '#8b5cf6';
            }
        } else if (str == "sorted") {
            if (y.includes(index)) {
                bar.style.backgroundColor = '#8b5cf6'; 
            } else {
                bar.style.backgroundColor = '#06d6a0'; 
            }
        } else {
            bar.style.backgroundColor = '#06d6a0';
        }
        
        displayDiv.appendChild(bar);
    });
}
