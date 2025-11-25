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
function renderBars(arr,y=[],str){
    displayDiv.innerHTML = '' 
    arrRand.forEach((value,index) => {
        const bar = document.createElement('div')
        bar.className = 'array-bar'
        bar.style.height = `${value+100}px`
        bar.textContent=value
        if(str=="compared"){
          if (y[0]==index) {
            bar.style.backgroundColor = '#ef4444'; 
        } else if(y[1]==index) {
            bar.style.backgroundColor = '#3bbb09ff'; 
        }
        }
        if(str=="comparing"){
          if (y[0]==index) {
            bar.style.backgroundColor = '#58a3d8'; 
        } else if(y[1]==index) {
            bar.style.backgroundColor = '#58a3d8'; 
        }
        }
         if(str=="comparings"){
          if (y[0]==index) {
            bar.style.backgroundColor = '#fbff8bff'; 
        } else if(y[1]==index) {
            bar.style.backgroundColor = '#58a3d8'; 
        }
        }
        displayDiv.appendChild(bar)
})
}
