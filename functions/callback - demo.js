var s = 'abc1';

// sifra mora da sadrzi bar jedan broj
// ako je sifra korekta > succes 
// ako nije error


function okCallback() {
    console.log('pass is correct')
}

function errorCallback() {
    console.log('pass is incorrect')
}


function checkPass(pass, good, bad) {

    var ind = false;

    for (var i = 0; i < pass.length; i++) {

        var p = parseInt(pass[i]);

        if (!isNaN(p)) {
            ind = true;
            break
        }

    }

    if (ind == true) {
        okCallback();
    } else {
        errorCallback();
    }

}

console.log(checkPass(s, okCallback, errorCallback));