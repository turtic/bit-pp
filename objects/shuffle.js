function shuffle(a) {

    function randNum(a, b) {
        var min = Math.min(a, b);
        var max = Math.max(a, b);

        return parseInt(((max - min) * Math.random()) + min);

    }

    var z = [];

    for (var i = 0; i < a.length; i++) {

        var index = randNum(0, a.length)

        z.push(a[index]);
        a.splice(index, 1);
    }

    for (var i = 0; i < a.length; i++){
        z.push(a[i]);
    }


    return z;

}


console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8]))


function shuffle222(a) {

    var b = [];

    var usedIndexes = [];

    for (var i=0; i<a.length; ){
       
        // generate random index
        var randomIndex;

       randomIndex = Math.floor(Math.random()*a.length);

    //    check if we have already used it

    if (usedIndexes.indexOf(randomIndex) == -1) {
        // if not
        // copy the element and extend the array of used indexes

        b.push(a[randomIndex]);
        usedIndexes.push(randomIndex);
        i++
    } else {
        // if yes
        // go to the next iteration
        continue;
    }

    }

return b;

}

console.log(shuffle222(([1, 2, 3, 4, 5, 6, 7, 8])))



function shuffle333(a){

    return a.sort(function(){
        return 0.5 - Math.random()
    })

}

console.log(shuffle333(([1, 2, 3, 4, 5, 6, 7, 8])))
