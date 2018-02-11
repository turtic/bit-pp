
function hexToRgba(hex) {

    var red = parseInt('0x' + hex[1] + hex[2]);
    var green = parseInt('0x' + hex[3] + hex[4]);
    var blue = parseInt('0x' + hex[5] + hex[6]);

    return 'rgba(' + red + ',' + green + ',' + blue + ')'
}

console.log(hexToRgba('#fbafff'))