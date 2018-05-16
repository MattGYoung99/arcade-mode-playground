// Using the bike's timer, calculate the current time.
// Return an answer as the sum of digits that the digital timer in the format hh:mm would show.

const lateRide = (n) => {
    const addTwoDigits = (n) => {
        let sum = 0;
        while (n) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        return sum;
    }
    let hours = addTwoDigits((Math.floor(n / 60)))
    let minutes = addTwoDigits(n - (Math.floor(n / 60)) * 60);
    return hours+minutes;
}