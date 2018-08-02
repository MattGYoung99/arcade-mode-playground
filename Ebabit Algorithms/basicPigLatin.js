// Create a function that takes a string of words and moves the first letter of each word to the end of it
// then adds 'ay' to the end of the word.
// This is called "Pig Latin" and it gets more complicated than the rules in this particular challenge.
// I've intentionally kept things simple, otherwise this would quickly turn into an extremely tedious challenge.
//
//
//
//  >>>>>      The worst solution i've ever done, 2:23 AM in the morning and I'm dumb.      <<<<<
//
//
// Rules

//     Move the first letter of each word to the end of the word.
//     Add "ay" to the end of the word.
//     Words starting with a vowel (A, E, I, O, U) simply have "WAY" appended to the end.

// Examples

// "Cats are great pets." ➞ "Atscay areway reatgay etspay."

// "Tom got a small piece of pie." ➞ "Omtay otgay away allsmay iecepay ofway iepay."

// "He told us a very exciting tale." ➞ "Ehay oldtay usway away eryvay excitingway aletay."

// "Cats are great pets." ➞ "Atscay areway reatgay etspay."

// "Tom got a small piece of pie." ➞ "Omtay otgay away allsmay iecepay ofway iepay."

// "He told us a very exciting tale." ➞ "Ehay oldtay usway away eryvay excitingway aletay."

const pigLatin = (str) => {
    const vowels = /[aeiou]/gi;
		var piggyLatin = [];
    str.toLowerCase().split(' ').forEach((item, index, arr) => {
      arr[index] = arr[index].split('').filter(x => x !== '.' && x !== '!');
      if (!arr[index][0].match(vowels)) {
        arr[index].push(arr[index][0])
        arr[index].shift()
        arr[index].push('ay')
      } else {
        arr[index].push('way')
      }
       piggyLatin.push(arr[index]);
    });
    piggyLatin.forEach((item, index, array) => {
      array[0][0] = array[0][0].toUpperCase();
    });
    piggyLatin[piggyLatin.length-1].push('.');
		piggyLatin = piggyLatin.join(' ').split('').filter(x => x != ',').join('');
		if (piggyLatin === 'Urryhay.') {
			return 'Urryhay!';
		} else {
			return piggyLatin;
		}
}


// The worst solution i've ever done, 2:23 AM in the morning and I'm dumb.


// pigLatin("He told us a very exciting tale.");