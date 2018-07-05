// function longest_consec(arr, n) {
//     let result;
//
//     if (arr.length === 0 || n > arr.length || n <= 0) {
//         console.log("The parameters are not satisfy the requirements");
//         return "";
//     }
//     else {
//
//         var wordSizes = arr.map(word => word.length);
//         console.log("wordSizes::", wordSizes);
//         var longestWord = Math.max(...wordSizes);
//         console.log("longestWord:: ", longestWord);
//         var position = arr.findIndex(word => word.length === longestWord);
//         console.log("position::", position);
//         console.log("arrSize:: ", arr.length );
//         console.log("arrSize:: ", arr.length - 1 );
//         if(arr.length -1 <= position) {
//
//             result = arr.slice(position-(n-1), position + 1).join("");
//             console.log("result: ", result);
//             return result;
//
//         }
//         else {
//             if (wordSizes[position -1] > wordSizes[position + 1]){
//
//                 result = arr.slice(position-(n-1), position + 1).join("");
//                 console.log("result: ", result);
//                 return result;
//
//             }
//             else {
//                 result = arr.slice(position, n + 1).join("");
//                 console.log("result: ", result);
//                 return result;
//
//             }
//
//         }
//
//     }
// }

function longest_consec(arr, n) {
    let joinedWords = [];

    if (arr.length === 0 || n > arr.length || n <= 0) {
        console.log("The parameters are not satisfy the requirements");
        return "";
    }
    else {
        if(n > 1){
            for (var i = 0; i < arr.length - 1; i++) {
                let words = [];
                let count = 0;
                words.push(arr[i]);
                count = count + 1;
                for (var j = i + 1; j < arr.length; j++) {
                    console.log("wordsI:: ", words);
                    words.push(arr[j]);
                    console.log("wordsJ:: ", words);
                    count = count + 1;
                    if (count === n) {
                        break;
                    }
                }
                words.join("");
                console.log("wordss:: ", words.join(""));
                joinedWords.push(words.join(""));
                console.log("joinedWords:: ", joinedWords);
            }

            var wordSizes = joinedWords.map(word => word.length);
            console.log("wordSizes:: ", wordSizes);
            var longestWord = Math.max(...wordSizes);
            console.log("longestWord:: ", longestWord);
            var position = joinedWords.findIndex(word => word.length === longestWord);
            console.log("position:: ", position);
            console.log("longString:: ", joinedWords[position]);
            return joinedWords[position];

        }
        else{
            var wordSizes = arr.map(word => word.length);
            console.log("wordSizes:: ", wordSizes);
            var longestWord = Math.max(...wordSizes);
            console.log("longestWord:: ", longestWord);
            var position = arr.findIndex(word => word.length === longestWord);
            console.log("position:: ", position);
            console.log("longString:: ", arr[position]);
            return arr[position];

        }
    }

}



//longest_consec(["zone", "abigail", "theta", "form"], 2);
//longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 3);
//longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 5);
longest_consec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3);
//longest_consec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2);
//longest_consec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2);
//longest_consec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1);
