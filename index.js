const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


function showError(input, message){
    const formControl = input.parentElement;
    formControl.classList.add("error")
    const span = formControl.querySelector("span")
    span.innerText = message
}

function showSuccess(input, message){
    const formControl = input.parentElement;
    formControl.classList.add("success")
    const span = formControl.querySelector("span")
    span.innerText = message
}

function checkRequired(array){
    array.forEach(input =>{
        if (input.value === ""){
            showError(input, `${getFieldName(input)} is required`)
        }else {
            showSuccess(input, "Approved")
        }
    })
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function checkLength(input, min){
    if (input.value.length < min){
        showError(input, `${getFieldName(input)} must be more than ${min} characters`)
    }else{
        showSuccess(input, "Approved")
    }
}

function checkEmail(input){
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    if (!regex.test(input.value)){
        showError(input, "your email is not valid")
    }else{
        showSuccess(input, "Approved")
    }
}

function checkPasswordMatch(input1, input2){
    if(input1.value != input2.value){
        showError(input2, "password does not match")
    }
}


form.addEventListener('submit', e =>{
    e.preventDefault()
    checkRequired([username,email,password,password2])
    checkLength(username, 3)
    checkLength(password, 6)
    checkLength(password2, 6)
    checkEmail(email)
    checkPasswordMatch(password, password2)
})