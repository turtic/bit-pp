var mainModule = (function (UIModule, dataModule) {

    function addLoginButtonListener() {

        document.querySelector(UIModule.UISelectors.buttonSelector).addEventListener('click', function () {

            //getting inputs
            var formData = UIModule.getFormData();

            //validation
            var validationResult = UIModule.validateData(formData.subject, formData.student, formData.grade);

            if (validationResult == UIModule.status.MISSING_DATA) {
                UIModule.setError(UIModule.status.MISSING_DATA);
                return;
            }



            // UIModule.setError(UIModule.status.OK);
            var ourSubject = new dataModule.subject(formData.subject);

            var ourStudent = new dataModule.student(formData.student);

            var ourExam = new dataModule.exam(ourSubject, ourStudent, formData.grade);

            if (ourExam.hasPassed()) {

                var newEl = document.createElement('p');
                var newText = document.createTextNode(ourExam.getExamInfo());
                newEl.appendChild(newText);
                var someList = document.querySelector(UIModule.UISelectors.passedListSelector);
                someList.appendChild(newEl);

                dataModule.passFailed.passed++;

            } else {

                var newEl = document.createElement('p');
                var newText = document.createTextNode(ourExam.getExamInfo());
                newEl.appendChild(newText);
                var someList = document.querySelector(UIModule.UISelectors.failedListSelector);
                someList.appendChild(newEl);

                dataModule.passFailed.failed++;

            }
            // total students
            document.querySelector(UIModule.UISelectors.totalSelector).innerText = 'Total students: ' + dataModule.passFailed.total();
            // passed and failed
            document.querySelector(UIModule.UISelectors.passedCounterSelector).innerText = dataModule.passFailed.passed;
            document.querySelector(UIModule.UISelectors.failedCounterSelector).innerText = dataModule.passFailed.failed;
            // percent
            document.querySelector(UIModule.UISelectors.passedPercentageSelector).innerText = dataModule.passFailed.percent(dataModule.passFailed.passed);
            document.querySelector(UIModule.UISelectors.failedPercentageSelector).innerText = dataModule.passFailed.percent(dataModule.passFailed.failed);

// total 100%
// faile x% x=fail*100/total

        });
    }

return {
    init: function () {
        console.log("lets go...");
        addLoginButtonListener();
    }
}

}) (UIModule, dataModule);

mainModule.init();
