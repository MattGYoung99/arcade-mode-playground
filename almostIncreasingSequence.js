const almostIncreasingSequence = arr => {
    let numbers = 0;
    for (var x=0;x<arr.length-1;x++) {
        if (arr[x] > arr[x+1]) {
            numbers += 1;
        }
        console.log(numbers)
    }
    return arr;
}


almostIncreasingSequence([40,50,60,10,20,30]);