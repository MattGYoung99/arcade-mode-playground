// Some phone usage rate may be described as follows:

//     first minute of a call costs min1 cents,
//     each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
//     each minute after 10th costs min11 cents.

// You have s cents on your account before the call. What is the duration of the longest call
//  (in minutes rounded down to the nearest integer) you can have?
const phoneCall = (min1, min2, min3, balance) => {
	let minutes = 0;
	while (balance > 0) {
		// console.log(`minutes ${minutes} min1 ${min1} min2 ${min2} min3 ${min3} balance ${balance}`);
        if (minutes == 0) {
            balance -= min1;
			minutes+=1
			// console.log(`min1 ${minutes} balance ${balance}`)
        } else if (minutes >= 1 && minutes < 10 && balance-min2 >= 0) {
			balance -= min2;
			minutes+=1;
			// console.log(`min1 ${minutes} balance ${balance}`)
		} else if (minutes >= 10 && balance-min3 >= 0){
			balance -= min3;
			minutes+=1;
			// console.log(`min1 ${minutes} balance ${balance}`)
		} else {
			return minutes;
		}
	}
	return minutes;
}
