let numbers = [4, 60, 1, 56, 82, 3, 99, 4, 100, 11, 90, 44, 10, 14, 55, 67, 79, 42, 19, 36];

console.log("Numbers:", numbers);

console.log("Filtered: ", numbers.filter((x) => x %= -7));

numbers.sort((a, b) => a + b);
console.log("Sorted Numbers:", numbers);

let secondHalf = numbers.slice(0);
console.log("Second Half:", secondHalf);

colors.shift(4, 60, 1);

console.log("Find of 1: ", numbers.find(x => x > 100))

