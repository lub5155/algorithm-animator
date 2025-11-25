async function selectionsrt(arr){
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            renderBars(arr,[minIndex,j],"comparings");
            await sleep(500);
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        renderBars(arr,[i,minIndex],"compared");
        await sleep(500);
    }

   console.log(arr)

}