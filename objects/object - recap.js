


var book = {
    title: "A Game Of Thrones",
    author: { name: 'rr' }
}

var author = {
    name: "George R.R. Martin",
    quotes: [
        "Sleep is good but books are better."
    ]
}

console.log(book.author.name);


var author = {
    name: "George R.R. Martin",
    yearOfBirth: 1948,
    age: function () {
        // 2018 - author.yearOfBirth;
        // return 2018 - author.yearOfBirth;
        // return 2018 - yearOfBirth;

        return 2018 - this.yearOfBirth;
    }
}

var yearsOld = author.age;

console.log(yearsOld);
console.log(yearsOld());

var author = {
    name: "George R.R. Martin",
    yearOfBirth: 1948,
    write: (function () {
        return console.log("Writing....");
    })()
}


console.log(author.write)

var author = {
    name: "George R.R. Martin",
    gender: "male",
    country: "US",
    quotes: [1, 2, 3, 4, 5, 6]
}

delete author.quotes[0];
delete author.country;

console.log(author.country)
console.log(author.quotes[2])



function factory(name) {

    return {
        name: name
    };
}

var o = new factory('one');
console.log(o.name); // "one"


var n = 5;

function change(x) {
    x = x + 5;
}
change(n)

console.log(change(n))

console.log(n)


var o = {
    n:5
};

function changeObj(obj) {
    obj.n = obj.n + 5;
}
changeObj(o)

console.log(changeObj(o))

console.log(o)


var original = { howmany: 1 };
var mycopy = original;

console.log(mycopy.howmany); 				// 1
mycopy.howmany = 100; 		// 100
console.log(original.howmany); 			// 100


var str = new String("Potato head");
console.log(typeof str.toUpperCase());  // "POTATO HEAD"
str.toLowerCase();  // "potato head"