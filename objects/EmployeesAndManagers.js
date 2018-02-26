function Employee(name, surname, specialization, salary) {
    this.name = name;
    this.surname = surname;
    this.specialization = specialization;
    this.salary = salary;

};

Employee.prototype.getSpecialization = function () {
    console.log(this.specialization);
}

var pera = new Employee('Pera', 'Peric', 'programer', 500);
var zika = new Employee('Zika', 'Zikic', 'programer', 600);

console.log(pera);
pera.getSpecialization();

function Manager(name, surname, department, salary) {
    this.name = name;
    this.surname = surname;
    this.department = department;
    this.salary = salary;

};

Manager.prototype.getDepartment = function () {
    console.log(this.getDepartment);
}
Manager.prototype.changeDepartment = function (department) {
    this.department = department;
}



var m1 = new Manager('Lazar', 'Lazic', 'sales', 700)
console.log(m1);


m1.changeDepartment('analytics')
m1.getDepartment()


var shareMethods =  {
    getData: function() {
        console.log (this.name, this.surname)
    },
    getSalary: function() {
        console.log (this.salary)
    },
    increaseSalary: function() {
        this.salary - this.salary + this.salary/10;
    }
}

Employee.prototype.__proto__ = shareMethods;
Manager.prototype.__proto__ = shareMethods;

pera.getSalary();
m1.getSalary();