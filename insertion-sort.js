async function insertsort() {
    let n = arrRand.length;
    
    for (let i = 1; i < n; i++) {
        let key = arrRand[i];
        let j = i - 1;
        renderBars(arrRand, [i], "current");
        await sleep(500);
        
        while (j >= 0 && arrRand[j] > key) {
            renderBars(arrRand, [j, j + 1], "shifting");
            await sleep(500);
            arrRand[j + 1] = arrRand[j];
            renderBars(arrRand, [j, j + 1], "shifted");
            await sleep(500);
            
            j = j - 1;
        }
        arrRand[j + 1] = key;
        renderBars(arrRand, [j + 1], "inserted");
        await sleep(500);
        let sortedIndices = Array.from({length: i + 1}, (_, idx) => idx);
        renderBars(arrRand, sortedIndices, "sorted");
        await sleep(500);
    }
    let allSorted = Array.from({length: n}, (_, idx) => idx);
    renderBars(arrRand, allSorted, "sorted");
}