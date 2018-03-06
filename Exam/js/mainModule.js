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

            if (formData.student.indexOf(' ') == -1) {
                alert('Invalid name');
                return;
            }

         


            var res = formData.student.split(" ");
            res[0] = res[0].charAt(0).toUpperCase() + res[0].slice(1);
            res[1] = res[1].charAt(0).toUpperCase() + res[1].slice(1);



            // UIModule.setError(UIModule.status.OK);

            // create exam (datamodul)
            var ourSubject = new dataModule.subject(formData.subject);

            var ourStudent = new dataModule.student(res[0], res[1]);

            var ourExam = new dataModule.exam(ourSubject, ourStudent, formData.grade);



            if (ourExam.hasPassed()) {


                UIModule.createAndAppend(ourExam.getExamInfo(), UIModule.UISelectors.passedListSelector )

                dataModule.passFailed.passed++;

            } else {

                UIModule.createAndAppend(ourExam.getExamInfo(), UIModule.UISelectors.failedListSelector )

                dataModule.passFailed.failed++;

            }
            
            // total students
            document.querySelector(UIModule.UISelectors.totalSelector).innerText = 'Total students: ' + dataModule.passFailed.total();
            // passed and failed
            // document.querySelector(UIModule.UISelectors.passedCounterSelector).innerText = dataModule.passFailed.passed;
            // document.querySelector(UIModule.UISelectors.failedCounterSelector).innerText = dataModule.passFailed.failed;

            UIModule.changeText(UIModule.UISelectors.passedCounterSelector, dataModule.passFailed.passed);
            UIModule.changeText(UIModule.UISelectors.failedCounterSelector, dataModule.passFailed.failed);


            // percent
            // document.querySelector(UIModule.UISelectors.passedPercentageSelector).innerText = dataModule.passFailed.percent(dataModule.passFailed.passed);
            // document.querySelector(UIModule.UISelectors.failedPercentageSelector).innerText = dataModule.passFailed.percent(dataModule.passFailed.failed);
            UIModule.changeText(UIModule.UISelectors.passedPercentageSelector, dataModule.passFailed.percent(dataModule.passFailed.passed));
            UIModule.changeText(UIModule.UISelectors.failedPercentageSelector, dataModule.passFailed.percent(dataModule.passFailed.failed));

            // UIModule.subjectInput.innerText = '';

            UIModule.changeValue(UIModule.UISelectors.studentSelector, '')
            UIModule.changeValue(UIModule.UISelectors.gradeSelector, '')





        });
    }

    return {
        init: function () {
            console.log("lets go...");
            addLoginButtonListener();
        }
    }

})(UIModule, dataModule);

mainModule.init();
