var n = 4;
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

        // var line = "";
        // line = line + s;

        // for (var i = 0; i < n - 2; i++) {
        //     line = line + " ";
        // }

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