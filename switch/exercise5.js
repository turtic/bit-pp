var day = 11;

switch (day) {
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Fall");
        break;
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;

    default:
        console.log("Input must be a number between 1 and 12")
}