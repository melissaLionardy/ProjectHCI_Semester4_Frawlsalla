const form = document.getElementById("form")
const nama = document.getElementById("name")
const email = document.getElementById("email")
const male = document.getElementById("male")
const female = document.getElementById("female")
const password = document.getElementById("password")
const confirm_password = document.getElementById("confirm_password")
const checkbox = document.getElementById("agree")
const error = document.getElementById("error")

let errorMessage = ""
let genderChoosed = ""

form.addEventListener("submit",(e)=>{
    let errorMessage = ""
    if(nama.value === ""){
        errorMessage = "Name must be filled"
    }
    else if(!(female.checked || male.checked)){
        errorMessage = "Gender must be filled!"
    }
    else if(email.value === ""){
        errorMessage = "Email must be filled"
    }
    else if(password.value === ""){
        errorMessage = "Password must be filled!"
    }
    else if(password.value.length < 8){
        errorMessage = "Password must be more than 8 characters"
    }
    
    else if(confirm_password.value === ""){
        errorMessage = "Confirm Password must be filled!"
    }
    else if(password.value !== confirm_password.value){
        errorMessage = "Password not match"
    }
    else if(!checkbox.checked){
        errorMessage = "Agreement must be checked"
    }
    if(female.checked)
    {
        genderChoosed = "Female"
    }
    else(male.checked)
    {
        genderChoosed = "Male"
    }
    if(errorMessage.length > 0){
        error.innerHTML = errorMessage
        error.style = "color: white"
        e.preventDefault()  
    } 
    else
    {
        alert("Register Success!!");
    }
})
