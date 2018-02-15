var user = {
    name: 'Pera',
    user: 'peragenije',
    password: 'abcde',
    email: 'pera.genije@gmail.com',
    age: 19,
    programmer: true,
    language: ['JavaScript', 'Python'],
    mode: {
        type: 'admin',
        level: 3,
    },
    addDiscount: function() {
        return 10;
    }
};

user.ip='213.35.65.5';

user.email='pera.supergenije@gmail.com';

function newDiscount() {
    return 20;
}

user.addDiscount = newDiscount;

console.log(typeof user);
console.log(user);
console.log(user['age']);
console.log(user.email);
console.log(user.mode.type);
console.log(user.language[0]);



