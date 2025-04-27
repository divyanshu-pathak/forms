document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault();

    let isValid = true;

    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    if (!/^\S+@\S+\.\S+$/.test(email)){
        emailError.textContent = "Invalid email format";
        isValid = false;
    }
    else{
        emailError.textContent = "";
    }

    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");
    if(!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
        passwordError.textContent = "Password must be at least * chars, 1 uppercase ans 1 symbol";
        isValid = false;
    }
        else{
            passwordError.textContent="";
        }
        
    let confirmpassword = document.getElementById("confirmpassword").value;
    let confirmpasswordError = document.getElementById("confirmpasswordError");
    if(confirmpassword !== password){
            confirmpasswordError.textContent = "Entered Password don't match";
            isValid = false;
    }
        else{
            confirmpasswordError.textContent = "";
        }

    let mobNumber = document.getElementById("mobNumber").value;
    let mobNumberError = document.getElementById("mobNumberError");
    if(mobNumber.length === 10){
        mobNumber.textContent = "Enter 10 digits valid Mobile Number";
        isValid = false;
    }
    else{
        mobNumber.textContent = "";
    }
})