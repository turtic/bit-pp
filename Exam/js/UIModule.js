
var UIModule = (function(){

    var UISelectors = {
        subjectSelector : ".add-subject", 
        studentSelector: ".add-student-name", 
        gradeSelector: ".add-grade", 
        buttonSelector: ".add-btn"
    }

    var subjectInput = document.querySelector(UISelectors.subjectSelector);
    var studentInput = document.querySelector(UISelectors.studentSelector);
    var gradeInput = document.querySelector(UISelectors.gradeSelector);
    
    var status = {
        OK : "OK", 
        MISSING_DATA: "All inputs have to be filled",
        MISSING_SUBJECT: "Please insert subject", 
        MISSING_STUDENT: "Please insert student name",
        MISSING_GRADE: "Please insert a grade",
    };

    function getFormData(){
        var formData = {};
        formData.subject = subjectInput.value;
        formData.student = studentInput.value;
        formData.grade = gradeInput.value;

        return formData;
    }
  
      //validation
      function validateData(subject, student, grade){
        if(subject == "" || student == "" || grade == ""){
            return status.MISSING_DATA;
        }

        return status.OK;
    }

     //error display
     function setError(message){
        alert(message);
    }

    
    return {
        UISelectors : UISelectors,
        status: status,
        getFormData: getFormData,
        validateData: validateData, 
        setError : setError,  
        
        
    }
})();