
// var print = (function () {
//    return console.log;
// })()("This might work or not?");


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var input = [1, undefined, 2, NaN, 3, 4, 5, "six"]

// var output = transformArray(input, function (param) {
//    return param + "";
// })

// console.log(output);

// function transformArray(array, action) {
//    var result = [];
//    for (var index = 0; index < array.length; index++) {
//        var element = array[index];
//        result[index] = action(element);
//    }
//    return result;
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

"stric"

function saySomething(msg1) {
    function message(msg2) {
        var output = msg1 + " " + msg2;
        var result = function () {
            output += "!"
            console.log(output);
        }
        return result;
    }
    return message;
 }
 
 saySomething("Hi")("there")() 