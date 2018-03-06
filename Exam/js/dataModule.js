var dataModule = (function () {

    // function Database() {
    //     this.database = [];

    // }

    // Database.prototype.addResult = function (result) {

    //     this.database.push(result);

    // }

    // var database =  new Database();

    var passFailed = {
        passed: 0,
        failed: 0,
        total: function () {
            return this.passed + this.failed;
        },
        percent: function (x) {
            var a = x * 100 / this.total();
            return a.toPrecision(4) + '%';
        }
    } 

    var Subject = function (name) {
        this.name = name;
        this.getSubjectName = function () {
            return this.name
        }
    }

    var Student = function (name, surname) {
        this.name = name;
        this.surname = surname;
        this.getStudentData = function () {
            return this.name + ' ' + this.surname;
        }

    }

    var Exam = function (subject, student, grade) {
        this.subject = subject;
        this.student = student;
        this.grade = grade;
        this.getExamInfo = function () {
            return this.subject.name + ' ' + this.student.getStudentData()
        };
        this.hasPassed = function () {
            if (this.grade > 5) {
                return true;
            } else {
                return false;
            }
        }
    }
    


    return {
        subject: Subject,
        student: Student,
        exam: Exam,
        passFailed: passFailed
    }




})();