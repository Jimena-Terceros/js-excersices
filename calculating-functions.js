// function makeNum (num, func) {
//     if (func === undefined) {
//         return num;
//     }else {
//         console.log('func(num):: ', func(num));
//         return func(num);
//     }
// }
function zero(func) {
    function makeNum (num, func) {
        if (func === undefined) {
            return num;
        }else {
            return func(num);
        }
    }
    return makeNum(0, func);
}
function one(func) {
    function makeNum (num, func) {
        if (func === undefined) {
            return num;
        }else {
            return func(num);
        }
    }
    return makeNum(1, func);
}
function two(func) {
    function makeNum (num, func) {
        if (func === undefined) {
            return num;
        }else {
            return func(num);
        }
    }
    return makeNum(2, func);
}
function three(func) {
    function makeNum (num, func) {
        if (func === undefined) {
            return num;
        }else {
            return func(num);
        }
    }
    return makeNum(3, func);
}
function four(func) {
    function makeNum (num, func) {
        if (func === undefined) {
            return num;
        }else {
            return func(num);
        }
    }
    return makeNum(4, func);
}
function five(func) {
    function makeNum (num, func) {
        if (func === undefined) {
            return num;
        }else {
            return func(num);
        }
    }
    return makeNum(5, func)
}
function six(func) {
    function makeNum (num, func) {
        if (func === undefined) {
            return num;
        }else {
            return func(num);
        }
    }
    return makeNum(6, func)
}
function seven(func) {
    function makeNum (num, func) {
        if (func === undefined) {
            return num;
        }else {
            return func(num);
        }
    }
    return makeNum(7, func)
}
function eight(func) {
    function makeNum (num, func) {
        if (func === undefined) {
            return num;
        }else {
            return func(num);
        }
    }
    return makeNum(8, func)
}
function nine(func) {
    function makeNum (num, func) {
        if (func === undefined) {
            return num;
        }else {
            return func(num);
        }
    }
    return makeNum(9, func)
}

function plus (num) {
    return function (res) {
        return res + num;
    }
}
function minus(num) {
    return function (res) {
        return res - num;

    }
}
function times(num) {
    return function (res) {
        return res * num;

    }
}
function dividedBy(num) {
    return function (res) {
        console.log('res: ', res);
        console.log('num: ', num);
        var result = res / num;
        console.log('result: : ', Math.trunc(result));
        return Math.trunc(result);
    }
}


five(dividedBy(six()));
//https://gist.github.com/jamigibbs/adafd95cf738fa872bda