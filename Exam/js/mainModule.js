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



            UIModule.setError(UIModule.status.OK);

            var ourExam = new Exam(formData.subject, formData.student, formData.grade)

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
