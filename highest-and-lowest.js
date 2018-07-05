// function highAndLow(numbers) {
//     var numArray = [];
//     var newString = numbers.split(" ");
//     console.log('newString:: ', newString);
//     var maxVAlue = Math.max(...newString);
//     numArray.push(maxVAlue);
//     console.log('maxVAlue:: ', maxVAlue);
//     var minValue = Math.min(...newString);
//     numArray.push(minValue);
//     console.log('minValue:: ', minValue);
//     console.log('numArray:: ', numArray);
//     var joined = numArray.join(" ");
//     console.log('joined:: ', joined);
//     return joined;
//
// }

function highAndLow(numbers) {
    numbers = numbers.split(" ").map(Number);
    console.log('numbers:: ', numbers);
    console.log('max and min:: ', `${Math.max(...numbers)} ${Math.min(...numbers)}`);
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;


}

//highAndLow("1 2 3 4 5");
//highAndLow("1 2 -3 4 5");
//highAndLow("1 9 3 4 -5");
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");