

// var Stefansbreakfast = {
//     name: 'french toast',
//     ingredients: ['bread', 'eggs', 'oil', 'milk'],
//     energy: 600,
//     printInstructions: function () {
//         console.log('Beat egg, vanilla and cinnamon in shallow dish.' + '\n' 
//         + 'Stir in milk. Dip bread in egg mixture, turning to coat both sides evenly.' + '\n'
//         + 'Cook bread slices on lightly greased nonstick griddle or skillet on medium heat until browned on both sides.');
//     },
//     JSCompliant: function () {

//         if (Stefansbreakfast.energy > 500) { return true } else { return false }
//     },
// };


// // console.log(Stefansbreakfast.name);
// // console.log(Stefansbreakfast.printInstructions());

var Mihajlosbreakfast = {
    name: 'Sticky cinnamon fig & yoghurt breakfast bowls',
    ingredients: ['ripe figs', 'teaspoon cinnamon', 'orange juice', 'runny honey', 'blackberries', 'Greek yoghurt', 'granola', 'pistachio nuts'],
    energy: 356,
    printInstructions: function () {
        console.log('Preheat the oven to 200ºC/400ºF/gas 6.' + '\n'
            + 'In a small bowl, whisk the cinnamon, orange juice and honey until combined, then spoon over the figs. Roast in the oven for 15 minutes, or until tender and sticky.' + '\n'
            + 'Halve the figs and arrange cut-side up on a lined non-stick baking tray, so that they fit snugly.' + '\n'
            + 'Scatter the blackberries over the figs and return to the oven for a final 2 to 3 minutes.' + '\n'
            + 'Divide the yoghurt between four breakfast pots or bowls. Top with the roasted fruit, reserving the juices in the tray.' + '\n'
            + 'Scatter the granola and pistachios over the pots and drizzle with the reserved juices to finish.');
    },
    JSCompliant: function () {

        if (Mihajlosbreakfast.energy > 500) {
            return true
        } else {
            return false
        }
    },

};

console.log(Mihajlosbreakfast.name);
console.log(Mihajlosbreakfast.printInstructions());
console.log(Mihajlosbreakfast.ingredients);
console.log(Mihajlosbreakfast.ingredients[7]);


Mihajlosbreakfast.energy = 357;

console.log(Mihajlosbreakfast.energy);

// Mihajlosbreakfast.JSCompliant= function () {

//     if (Mihajlosbreakfast.energy < 500) { return true } else { return false }
// }


console.log(Mihajlosbreakfast.JSCompliant());