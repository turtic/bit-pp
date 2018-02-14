// zadatoj niski zamenjuje svako slovo 'a' zvezdicom i vraca ukupan broj zamena 

// var a= 'bananananan';


var result = (function (a) {

    var z = [];
    var counter = 0;
    for (var i = 0; i < a.length; i++) {

        z[i] = a[i]
    }

    for (i = 0; i < a.length; i++) {

        if (z[i] === 'a') {
            z[i] = '*';
            counter = counter + 1;
        }
    }

    var sum = '';

    for (i = 0; i < a.length; i++) {

        sum = sum + z[i];
    }

    return console.log('string: ' + sum + '\n' + 'number: ' + counter)

})('bananananan');
