// function digital_root(number) {
//
//         var num = number.toString();
//
//         if (num.length >= 2) {
//             var sum = num[0];
//             console.log('number::', number);
//             console.log('number of digits::', num.length);
//             for (var i = 1; i < num.length; i++) {
//                 sum = Number(sum) + Number(num[i]);
//             }
//             //console.log('sum::', sum);
//
//             return digital_root(sum);
//
//         }
//         console.log('number::', number);
//         return number;
//
//
// }

// function digital_root(number) {
//
//     var num = number.toString();
//
//     if (num.length >= 2) {
//         var sum = 0;
//         console.log('number::', number);
//         console.log('number of digits::', num.length);
//         for (var i = 0; i < num.length; i++) {
//             sum = sum + Number(num[i]);
//         }
//         //console.log('sum::', sum);
//
//         return digital_root(sum);
//
//     }
//     console.log('number::', number);
//     return number;
//
//
// }

// function digital_root(number) {
//     if (number < 10) {
//         return number;
//     } else {
//         var sum = number.toString().split("").reduce(function (acc, d) {return acc + +d;},0);
//         console.log("sum:: ", sum);
//         return digital_root(sum);
//
//     }
// }

function digital_root(number) {
    if (number < 10) {
        return number;
    } else {
        var sum = number.toString().split("").reduce((acc, d) => acc + +d, 0);
        console.log("sum:: ", sum);
        return digital_root(sum);

    }
}


digital_root(154158);