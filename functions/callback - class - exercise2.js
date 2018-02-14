function small() {
    console.log(8);
}

function large() {
    console.log(966);
}

function huge() {
    console.log(1234124);
}

function generateNumber (stefan){

    return stefan();

}

generateNumber (large);