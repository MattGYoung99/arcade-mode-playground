// arrange each array from smallest to largest so that 
// each statue will be bigger than the previous one exactly by 1.
// return number of statues needed

const makeArrayConsecutive2 = (arr) => {
    arr = arr.sort();
    let sum = 0;
        for (let x=0;x<arr.length-1;x++) {
            if (arr[x]+1 !== arr[x+1]) {
               sum += (arr[x+1] - arr[x])-1;
            }
        }
		return (sum <= 0) ? 0 : sum;
}
