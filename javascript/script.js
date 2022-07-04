let pass_inputs = document.querySelectorAll(".validation");
const error_messages = document.querySelectorAll('.error-message');
const confirmBtn = document.querySelector('button[type="submit"]');

let pass1 = pass_inputs[0];
let pass2 = pass_inputs[1];

let isValidated = false


pass_inputs.forEach(passInput => {
    passInput.addEventListener("keyup", validatePass)
});


//console.log(pass_inputs);
function validatePass() {
    
    let result = comparePassInputs(pass1, pass2);
    console.log(result)

    if (result) {

        if (pass1.value != pass2.value) {
            
            pass_inputs.forEach(passInput => {
                passInput.classList.add("error");
                passInput.setCustomValidity("Invalid field")
            });

            error_messages.forEach(div => {
                div.classList.add("error-message-activate");
            });

        } else {
            pass_inputs.forEach(passInput => {
                passInput.classList.remove("error");
                passInput.setCustomValidity("")
            });

            error_messages.forEach(div => {
                div.classList.remove("error-message-activate");
            });
        }
        
    } else {
        pass_inputs.forEach(passInput => {
            passInput.classList.remove("error");
            passInput.setCustomValidity("")
        });

        error_messages.forEach(div => {
            div.classList.remove("error-message-activate");
        });
    }
}


//this function is created to make sure atleast one input has been filled out already before validation
function comparePassInputs(p1, p2) {
    if (p1.value.length == 0 || p2.value.length == 0) {

        return false;

    } else {
        return true;
    }
}