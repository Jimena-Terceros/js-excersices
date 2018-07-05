function outlierNumber(numbers) {
    var oddNumbers = [];
    var evenNumbers = [];
    for(var i = 0; i<numbers.length; i++) {
        if (numbers[i]%2 === 0){
            console.log('The ' + numbers[i] + ' is Even');
            evenNumbers.push(numbers[i]);
        }
        else {
            console.log('The ' + numbers[i] + ' is Odd');
            oddNumbers.push(numbers[i]);
        }

    }
    console.log('oddNumbers ', oddNumbers.length );
    console.log('evenNumbers ', evenNumbers.length );
    if (oddNumbers.length === 1){
        console.log('The outlier number is: ', oddNumbers[0]);
        return oddNumbers[0];
    }
    if (evenNumbers.length === 1) {
        console.log('The outlier number is: ', evenNumbers[0]);
        return evenNumbers[0];
    }

}

function outlierNumberFind(numbers) {
    // var outlierNum = numbers.find(num => num % 2 !==0);
    // console.log('outlierNum:: ', outlierNum);
    // return outlierNum;

    var outlierNum = numbers.find(num => num % 2 ===0);
    console.log('outlierNum:: ', outlierNum);
    return outlierNum;

}

//outlierNumber([3, 7, 2, 9, 5]);
outlierNumberFind([7, 15, 31, 4, 21]);