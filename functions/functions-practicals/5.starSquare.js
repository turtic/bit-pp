// Write a function that draws a square of a given size. For example,  if the size of square is 5 the function should draw:

function starSquare(n) {
    var s = "*";

for (var r = 0; r <= n - 1; r++) {

    if (r == 0 || r == n - 1) {
        var line = "";
        for (var i = 0; i < n; i++) {
            line = line + s;
        }
        line = line + "\n";
        console.log(line)
    } else {
        var line = "";
        for (var i = 0; i < n; i++) {

            if (i == 0 || i == n - 1) {
                line = line + s;
            } else { line = line + " " }
        }
        line = line + "\n";
        console.log(line)
    }

}

return ""

}

console.log(starSquare(4));