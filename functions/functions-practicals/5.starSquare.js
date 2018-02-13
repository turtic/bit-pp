// Write a function that draws a square of a given size. For example,  if the size of square is 5 the function should draw:

function starSquare(n) {
    var s = "*";
    var sum = '';

    for (var r = 0; r < n; r++) {

        if (r == 0 || r == n - 1) {
            var line = "";
            for (var i = 0; i < n; i++) {
                line = line + s;
            }
            line = line + "\n";
            sum = sum + line;
        } else {
            var line = "";
            for (var i = 0; i < n; i++) {

                if (i == 0 || i == n - 1) {
                    line = line + s;
                } else { line = line + " " }
            }
            line = line + "\n";
            sum = sum + line;
        }

    }

    return sum;

}

console.log(starSquare(4));