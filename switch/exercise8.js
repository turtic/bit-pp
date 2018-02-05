var city = 'Beograd';

switch (city) {

    case 'Beograd':
    case 'Zrenjanin':
    case 'Bor':
    case 'Valjevo':
    case 'Kraljevo':
        console.log("This city is in Serbia");
        break;

    case 'Washigton':
    case 'New York':
    case 'Boston':
    case 'San Francisco':
        console.log("This city is in USA");
        break;

    case 'Paris':
    case 'Marseille':
    case 'Nice':
        console.log("This city is in France");
        break;

    case 'Munich':
    case 'Berlin':
        console.log("This city is in Germany");
        break;

    case 'London':
        console.log("This city is in UK");
        break;

    default:
        console.log("Please choose a different city")

}

